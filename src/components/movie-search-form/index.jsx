import React from 'react'

// import './style.scss'
import Button from '../button'

// eslint-disable-next-line react/prefer-stateless-function
class MovieSearchForm extends React.Component{
  // eslint-disable-next-line react/state-in-constructor
  state = {
    searchValue: ''
  }
  
  // onFormSubmit = (event) => {
  //   const { onSubmit } = this.props
  //   const { searchValue } = this.state
  //   event.preventDefault()
  //   onSubmit(searchValue)
  // }
  
  render () {
    const { searchValue } = this.state
    return (
      <div className="movie-search flex flex-row items-center p-16 w-9/12 relative m-auto">
        <input
          id="movie-search-input"
          className="movie-search__input h-14 w-full mr-3 pl-6 rounded bg-gray-dark-01 bg-opacity-70 text-white text-xl placeholder-white placeholder-opacity-70"
          type="text"
          placeholder="What do you want to watch?"
          value={searchValue}
          onChange={(event) => this.setState({searchValue: event.target.value})}/>
        <Button theme="primary">Search</Button>
      </div>
    )
  }
}

export default MovieSearchForm;
