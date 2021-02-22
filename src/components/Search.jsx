import React, {Component} from 'react'

function clearForm() {
  // Находим форму
  const form = document.getElementById('form-searching')
  // Очищаем форму
  form.reset()
}

export default class Search extends Component {
  state = {
    valuesForm: '',
  }

  // Обработчик формы
  handlerForm = e => {
    // Значение инпута
    const searchTerm = e.target.value
    // тип параметра для поиска
    const parameter = e.target.dataset.param

    // Сохраняем значение инпута в состояние
    this.setState(state => ({
      valuesForm: {
        [parameter]: searchTerm,
      },
    }))
  }

  // Обрабочик отправки формы
  handlerSubmit = e => {
    // Отменяем перезагрузку
    e.preventDefault()

    if (this.validateInputSearch(e)) {
      // Передаем весь state в фунцию для поиска
      this.props.searchingMovies(this.state.valuesForm)
      // Очищаем форму
      clearForm(e.target)
      this.clearState()
    } else {
      console.log('Input not valid!')
      return false
    }
  }

  // Очистка состояния
  clearState = () => {
    this.setState({
      valuesForm: '',
    })
  }

  // Валидация инпута для поиска
  validateInputSearch = e => {
    // Находим инпут, берем значение
    const input = document.querySelector('input[type="search"]').value
    // Проверяем что поле не пустое
    if (input.length < 1 || input.length === '') {
      clearForm()
      return false
    } else {
      return true
    }
  }

  render() {
    return (
      <form id="form-searching">
        <div className="input-group mb-4">
          <input
            type="search"
            className="form-control search-input"
            placeholder="Search"
            aria-label="Serching movies"
            aria-describedby="button-addon2"
            onChange={this.handlerForm}
            onKeyDown={e => {
              // Проверяем что был нажат "Enter"
              if (e.key === 'Enter') {
                this.handlerSubmit(e)
              }
            }}
            data-param="query_term"
          />
          <button
            className="btn btn-success"
            type="button"
            id="button-addon2"
            onClick={this.handlerSubmit}>
            Button
          </button>
        </div>
      </form>
    )
  }
}
