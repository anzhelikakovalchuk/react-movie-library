import React from 'react'
import MovieListItem from '../movie-list-item/MovieListItem'
import './MovieList.css'

function MovieList(props) {
  const { items } = props
  const movieItems = items.map((movie) => <MovieListItem item={movie} />)

  return <ul className="List">{movieItems}</ul>
}

export default MovieList
