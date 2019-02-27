import React, { Component } from 'react';
import routes from '../../plugins/routes'

class Movies extends Component {
  render() {
    let moviesRoutes = routes.find(route => route.name === 'movies')
    
    return (
      <div className="movies-container">
        { moviesRoutes.map()  }
      </div>
    );
  };
};

export default Movies;