import React from 'react'

import Header from './Header'
import MovieSearchForm from './MovieSearchForm'

function Hero () {
  return (
    <div className="hero relative bg-black max-h-96 h-96">
      <div className="hero__image bg-hero-pattern absolute top-0 h-full w-full opacity-30 bg-black bg-no-repeat bg-center bg-cover blur-sm" />
      <Header/>
      <MovieSearchForm />
    </div>
  )
}

export default Hero;
