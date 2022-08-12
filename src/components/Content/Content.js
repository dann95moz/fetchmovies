import React from 'react'

const Content = ({searchedMovies}) => {
  return (
  <div>
    {searchedMovies?.map((movie) => {
      return (
        <div>
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
        </div>
      )
    })}
      </div>
  )
}

export default Content