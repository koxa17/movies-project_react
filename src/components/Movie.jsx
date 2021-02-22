import React from 'react'
import {cropText} from '../purejs'
import Genres from './Genre'

export default function Movie(props) {
  const {
    title,
    year,
    medium_cover_image: poster,
    genres,
    description_full: description,
    id,
  } = props
  return (
    <div className="card bg-dark bg-gradient text-light" id={id}>
      <img src={poster} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <div className="wrapper_title">
          <h5 className="card-title">{title}</h5>
          <span className="text-muted info-font-size">{year}</span>
        </div>
        <div className="genre text-muted info-font-size genres">
          <Genres genres={genres} />
        </div>
        <p className="card-text description">{cropText(description)}</p>
        <a href="!#" className="card-link more-link">
          More...
        </a>
      </div>
    </div>
  )
}
