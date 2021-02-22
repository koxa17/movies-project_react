import React, { Component } from 'react'
import Header from './layout/Header'
import Main from './layout/Main'

export default class App extends Component {
  render() {
    return (
        <div className="background">
          <Header/>
          <Main />
        </div>
    )
  }
}