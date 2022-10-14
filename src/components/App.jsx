import React from 'react'

import './style.css'
import AddMovieButton from './add-movie-button/AddMovieButton'
import InputSearch from './input-search/InputSearch'
import WebpackLogo from '../assets/webpack-logo.png'

const movieList = [
  'Pulp Fiction',
  'Bohemian Rhapsody',
  'Kill Bill',
  'Avengers: War of Infinity',
  'Inception',
  'Reservoir dogs',
  'Home Alone',
]

function App() {
  return (
    <div className="App">
      <img src={WebpackLogo} className="logo" />
      <h1> Home task 1 </h1>
      <h2>
        {' '}
        Crating Component via <code>React.createElement</code>
      </h2>
      <AddMovieButton />
      <h2> Crating Components with other methods:</h2>
      <ul className="App-list">
        <li>
          <h3>
            {' '}
            InputSearch as <code> React.Component </code>{' '}
          </h3>
        </li>
        <li>
          <h3>
            {' '}
            MovieListItem as <code> React.PureComponent </code>{' '}
          </h3>
        </li>
        <li>
          <h3>
            {' '}
            MovieList as <code> Functional Component </code>
          </h3>{' '}
        </li>
      </ul>
      <InputSearch items={movieList} />
    </div>
  )
}

export default App
