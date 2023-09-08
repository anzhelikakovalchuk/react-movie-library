import React from 'react'

function MovieCard({ movie }) {
  const generes = movie.genres.length < 3 ? movie.genres.join(' & '): movie.genres.join(', ')
  const releaseYear = new Date(movie.release_date).getFullYear()
  
  return (
    <div className="movie-card text-white pb-7 max-w-md">
      <img
        className="movie-card__image w-full"
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className="movie-card__content pt-4">
        <div className="movie-card__header flex justify-between items-center mb-2">
          <h3 className="movie-card__title">{movie.title}</h3>
          <span className="movie-card__release-date text-sm border border-white rounded py-2 px-4">{releaseYear}</span>
        </div>
        <p className="movie-card__genre text-sm">{generes}</p>
      </div>
    </div>
  )
}

export default MovieCard
