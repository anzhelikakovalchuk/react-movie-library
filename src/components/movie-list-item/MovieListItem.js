import React from 'react'
import './MovieListItem.css'

class MovieListItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { item } = this.props;
    return (
      <li className="List-item">{ item }</li>
    );
  }
}

export default MovieListItem
