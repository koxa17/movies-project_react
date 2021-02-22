import React, {Component} from 'react'
import ClearList from '../components/ClearList'
import Loader from '../components/Loader'
import Movies from '../components/Movies'
import Search from '../components/Search'
import {getLinkWithParametrs} from '../purejs'

export default class Main extends Component {
  state = {
    movies: [],
    loading: true,
    messageError: '',
  }

  componentDidMount() {
    // Запрос на сервер
    fetch('https://yts.mx/api/v2/list_movies.json')
      // Ковертируем в формат json
      .then(response => response.json())
      // Полученые запрос сохраняем в state
      .then(data =>
        this.setState({
          movies: data.data.movies,
        })
      )
      .catch(err => {
        this.setState({
          messageError: 'Упс что-то пошло не так =(',
        })
        console.error(err)
      })
      // Отключаем preloader
      .finally(() => {
        this.setState({
          loading: false,
        })
      })
  }

  // Поиск фильмов
  searchingMovies = value => {
    // Получаем сформированую ссылку с параметрами поиска
    const getUrlTerm = getLinkWithParametrs(value)

    // Включаем анимацию загрузки
    this.setState({
      loading: true,
    })

    // Делаем запрос на сервер
    fetch(getUrlTerm)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return this.setState({
          movies: data.data.movies,
        })
      })
      .catch(err => {
        this.setState({
          messageError: 'Упс что-то пошло не так =(',
        })
        console.error(err)
      })
      .finally(() => this.setState({loading: false}))
  }

  render() {
    const {movies, loading, messageError} = this.state
    return (
      <div className="container">
        <div className="content pt-3">
          <Search searchingMovies={this.searchingMovies} />
          {loading ? (
            <Loader />
          ) : movies ? (
            <Movies movies={movies} />
          ) : (
            <ClearList message={messageError} />
          )}
        </div>
      </div>
    )
  }
}
