import './App.css';
import AddMovieButton from './components/add-movie-button/AddMovieButton'
import InputSearch from './components/input-search/InputSearch'
import React from 'react'

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
      <h1> Home task 1 </h1>
      <h2> Crating Component via <code>React.createElement</code></h2>
      <AddMovieButton />
      <h2> Crating Components with other methods:</h2>
      <ul className="App-list">
        <li><h3> InputSearch as <code> React.Component </code> </h3></li>
        <li><h3> MovieListItem as <code> React.PureComponent </code> </h3></li>
        <li><h3> MovieList as <code> Functional Component </code></h3> </li>
      </ul>
      <InputSearch items={movieList} />
    </div>
  );
}

export default App;
