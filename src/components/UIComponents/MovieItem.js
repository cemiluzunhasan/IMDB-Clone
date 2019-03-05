import React, { Component } from 'react';

class MovieItem extends Component {

  render() {
    let { title, rating, image } = this.props;

    return (
      <div className="movie-item mt-15 mr-5">
        <img src={`https://image.tmdb.org/t/p/original/${image}`} alt="movie"/>
        <div className="movie-item-detail pb-30">
          <span className="movie-item-title mb-10">{title}</span>
          <span className="movie-item-average">{rating} / 10</span>
        </div>
      </div>
    );
  };
};

export default MovieItem;
