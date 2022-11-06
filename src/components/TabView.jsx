import React from 'react'

import Tabs from './Tabs'
import MovieList from './MovieList'

function TabView({ movies }) {
  return (
    <div>
      <Tabs>
        <div label="All">
          <MovieList movies={movies}/>
        </div>
        <div label="Documentary">
          <p>Documentary</p>
        </div>
        <div label="Comedy">
          <p>Comedy</p>
        </div>
        <div label="Horror">
          <p>Horror</p>
        </div>
        <div label="Crime">
          <p>Crime</p>
        </div>
      </Tabs>
    </div>
  )
}

export default TabView
