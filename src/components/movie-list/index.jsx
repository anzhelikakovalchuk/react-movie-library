import React from 'react'

import MovieCard from '../movie-card'

function MovieList({ movies }) {
  const movieComponents = movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie}/>
    ))
  
  return (
    <div className="movies mt-7">
      <p className="movies__count text-white text-xl text-left">{`${movies.length} movies found`}</p>
      <div className="movies__list grid grid-cols-3 gap-12 mt-7">{movieComponents}</div>
    </div>
  )
}

export default MovieList
