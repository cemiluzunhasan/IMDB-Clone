import React, { Component } from "react";
import { Card, Icon } from 'antd';
import { connect } from "react-redux";
import actions from '../../store/modules/movies/actions'

class Trending extends Component {

  componentDidMount() {
    this.props.dispatch(actions.getTrending({ mediaType: 'all', timeWindow: 'week' }));
  }

  render() {
    return (
      <div className="container mt-30">
        <h1>Trending Movies</h1>
        <div className="slider">
          <Icon type="left-circle" theme="twoTone" />
            {this.props.trendingMovies.results.length > 0 && this.props.trendingMovies.results.map((item, index) => (
              <Card key={index} hoverable cover={<img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} className="movie-cover" alt={item.title}/>}>
                <Card.Meta title={item.title} />
              </Card>
            ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ trendingMovies }) => ({ trendingMovies });
export default connect(mapStateToProps)(Trending);
