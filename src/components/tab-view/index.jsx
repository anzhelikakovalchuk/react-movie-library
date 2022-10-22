import React from 'react'

import movie from '../../api/movie'
import Tabs from '../tabs'
import MovieList from '../movie-list'

class ExampleTabs extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      movies: []
    }
  }
  
  async componentDidMount () {
    const response = await movie.get('/')
    console.log('response', response.data.data)
    this.setState({ movies: response.data.data})
  }
  
  
  render() {
    const { movies } = this.state
    
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
}

export default ExampleTabs
