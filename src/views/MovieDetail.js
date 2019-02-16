import React, { Component } from 'react';
import actions from '../store/modules/movies/actions'
import { connect } from 'react-redux';

class MovieDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(actions.getMovie(this.props.match.params.id));
  }

  render() {
    console.log("Movie =",this.props.movie);
    return (
      <div className="movie-details-container">
        <img src={this.props.movie && `https://image.tmdb.org/t/p/original/${this.props.movie.backdrop_path}`} className="movie-backdrop" />
      </div>
    );
  };
};

const mapStateToProps = ({ movie }) => ({ movie });
export default connect(mapStateToProps)(MovieDetail);