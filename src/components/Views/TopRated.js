import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../store/modules/movies/actions'
import { Card, Icon } from 'antd';
import * as actionTypes from '../../store/modules/movies/action-types';

class TopRated extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }
  componentWillMount() {
    this.props.dispatch(actions.getMovies({ endpoint: 'top_rated', type: actionTypes.GET_TOPRATED })).then(() => {
      this.setState({
        loading: false
      })
    });
  }

  render() {
    let { loading } = this.state
    
    return (
      <div className="container mt-30">
        <h1>Top Rated</h1>
        <div className="slider">
          <Icon type="left-circle" theme="twoTone" />
            {this.props.topRated.results.length > 0 && this.props.topRated.results.map((item, index) => (
              <Card
              key={index}
              hoverable
              loading={loading}
              cover={<img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} className="movie-cover" alt={item.title} />}
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
const mapStateToProps = ({ topRated }) => ({ topRated });
export default connect(mapStateToProps)(TopRated);