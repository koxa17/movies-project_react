import React from 'react'

export default function Genres(props) {
  const {genres} = props
  return genres.map((genre, i) => {
    if (i < 3) {
      return <span key={`${i}_${genre}`}>{genre}</span>
    }
    return null
  })
}
