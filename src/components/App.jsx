import React from 'react'

import Hero from './Hero'
import Footer from './Footer'
import Content from './Content'
import MovieDetail from './MovieDetail'

import movie from '../api/movie'

class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      movies: [],
      selectedMovie: null
    }
  }
  
  componentDidMount () {
    this.onTermSubmit('')
  }
  
  onTermSubmit = async (term) => {
    const response = await movie.get('/', {
      params: {
        q: term
      }
    })
    
    this.setState({
      movies: response.data.data,
      selectedMovie: response.data.data[0]
    })
  }
  
  onMovieSelect = (video) => {
    this.setState({ selectedMovie: video })
  }
  
  render () {
    const { movies, selectedMovie } = this.state
    
    return (
      <div className="App min-h-screen flex flex-col justify-between bg-gray-light">
        <Hero onFormSubmit={this.onTermSubmit}/>
        <MovieDetail video={selectedMovie} />
        <Content movies={movies} onMovieSelect={this.onMovieSelect} />
        <Footer />
      </div>
    )
  }
}

export default App
