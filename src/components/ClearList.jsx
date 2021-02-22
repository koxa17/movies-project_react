import React from 'react'

export default function ClearList(props) {
  const {message} = props
  return (
    <div className="clear-movies">
      <h1>{message ? message : 'Ничего не найдено =('}</h1>
    </div>
  )
}
