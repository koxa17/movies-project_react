import React from 'react'

export default function Loader() {
  return (
    <div className="wrapper-loading">
      <div className="spinner-border text-success loader" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
