import React, { Component } from 'react';
import { Carousel, Button, Slider } from 'antd'
import ItemScroller from '../UIComponents/ItemScroller'

import { connect } from 'react-redux';

import * as actionTypes from '../../store/modules/movies/action-types'
import actions from '../../store/modules/movies/actions'

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.noData = {
      results: [],
      pagination: {

      }
    }
  }
  componentWillMount() {
    this.props.dispatch(actions.getMovies({ endpoint: 'top_rated', type: actionTypes.GET_TOPRATED })).then((response) => {
      console.log("Top Rated", response)
    });

    this.props.dispatch(actions.getTrending({ mediaType: 'all', timeWindow: 'week' })).then((response) => {
      console.log("Trending", response)
    });

    this.props.dispatch(actions.getMovies({ endpoint: 'now_playing', type: actionTypes.GET_NOWPLAYING })).then((response) => {
      console.log("Now Playing", response);
    })

    this.props.dispatch(actions.getMovies({ endpoint: 'upcoming', type: actionTypes.GET_UPCOMING })).then((response) => {
      console.log("Upcoming", response)
    });
  }
  render() {
    return (
      <div className="mainpage-container">
        <Carousel>
            <div>
              <div className="carousel-item">
                <img src="https://i.pinimg.com/originals/26/00/d5/2600d5fda64fb9356b117219ca2bfce9.jpg" className="carousel-image"/>
                <div className="carousel-caption">
                  <h1 className="carousel-movie-header">Stranger Things</h1>
                  <h2>Drama - 8.0</h2>
                  <p>Oona, a recent graduate in anthropology, has returned to her dead mother’s seaside cottage in southern England to prepare it for sale. Her arrival disturbs Mani, a wary vagrant who has been squatting on the property.</p>
                  <Button className="btn-red mt-20">Go to Detail</Button>
                </div>
              </div>
            </div>
            <div>
              <img src="https://i.pinimg.com/originals/26/00/d5/2600d5fda64fb9356b117219ca2bfce9.jpg" className="carousel-image" />
            </div>
            <div>
              <img src="https://i.pinimg.com/originals/26/00/d5/2600d5fda64fb9356b117219ca2bfce9.jpg" className="carousel-image" />
            </div>
        </Carousel>
        <div className="container mt-30">
          <h1>Trending Movies</h1>
          <ItemScroller
            data={this.props.trendingMovies && this.props.trendingMovies}
          />
        </div>
        <div className="container mt-30">
          <h1>Now Playing</h1>
          <ItemScroller
            data={this.props.nowPlaying && this.props.nowPlaying}
          />
        </div>
        <div className="container mt-30">
          <h1>Top Rated</h1>
          <ItemScroller
            data={this.props.topRated && this.props.topRated}
          />
        </div>
        <div className="container mt-30">
          <h1>Trending Movies</h1>
          <ItemScroller
            data={this.props.upcoming && this.props.upcoming}
          />
        </div>
      </div>
    );
  };
};

const mapStateToProps = ({ trendingMovies, topRated, nowPlaying, upcoming }) => ({ trendingMovies, topRated, nowPlaying, upcoming });
export default connect(mapStateToProps)(MainPage);