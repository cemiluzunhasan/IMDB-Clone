import React, { Component } from 'react';
import { PersonProxy } from '../../../proxies'

class MovieCredits extends Component {
  
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
        MOVIE CREDITS
      </div>
    );
  };
};

export default MovieCredits;
