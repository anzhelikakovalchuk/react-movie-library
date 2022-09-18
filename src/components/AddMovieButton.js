import React from 'react';

class AddMovieButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfMovies: 0
    };
    
    this.addMovie = this.addMovie.bind(this)
  }
  
  addMovie(){
    this.setState({ numberOfMovies: this.state.numberOfMovies + 1 });
  }
  
  render(){
    return (
      React.createElement('div', {},
        React.createElement('h1', {}, this.state.numberOfMovies),
        React.createElement('button', {onClick: this.addMovie}, 'Add a movie'),
      )
    );
  }
}

export default AddMovieButton
