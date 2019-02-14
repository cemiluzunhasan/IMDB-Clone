import React, { Component } from 'react';
import { connect } from 'react-redux'
import actions from '../../store/modules/movies/actions'
import * as actionTypes from '../../store/modules/movies/action-types';
import { Card, Icon } from 'antd';

class Upcoming extends Component {

  componentDidMount() {
    this.props.dispatch(actions.getMovies({ endpoint: 'upcoming', type: actionTypes.GET_UPCOMING }));
  }

  render() {
    return (
      <div className="container mt-30">
      <h1>Upcoming</h1>
      <div className="slider">
        <Icon type="left-circle" theme="twoTone" />
          {this.props.upcoming.results.length > 0 && this.props.upcoming.results.map((item, index) => (
            <Card
            key={index}
            hoverable
            cover={<img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} className="movie-cover" alt={item.title}/>}
            >
            <Card.Meta 
              title={item.title} />
          </Card>
          ))}
      </div>
    </div>
    );
  };
};
const mapStateToProps = ({ upcoming }) => ({ upcoming });
export default connect(mapStateToProps)(Upcoming);