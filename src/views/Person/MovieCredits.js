import React, { Component } from 'react';
import { PersonProxy } from '../../proxies'

class MovieCredits extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new PersonProxy().getMovieCredits().then(response => {
      this.setState({
        data: response
      })
    })
  }
  render() {
    return (
      <div className="person-movies-container">
        
      </div>
    );
  };
};

export default MovieCredits;