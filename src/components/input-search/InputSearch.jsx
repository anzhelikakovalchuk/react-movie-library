import React from 'react'
import MovieList from '../movie-list/MovieList'
import './InputSearch.css';

class InputSearch extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }
  
  setValue = (e) => {
    this.setState({
      value: e.currentTarget.value
    });
  };
  
  render() {
    const { items } = this.props;
    const { value } = this.state
    let filteredItem = items.filter(item => (
      item.includes(value)
    ))
    let renderItems = value ? filteredItem: items
    
    return (
      <div className="Search">
        <input className="Search-input" onChange={this.setValue} placeholder="Type a title to start search" />
        <MovieList items={renderItems} />
      </div>
    )
  }
}

export default InputSearch
