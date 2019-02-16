import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../store/modules/movies/actions'
import { Card, Icon } from 'antd';
import * as actionTypes from '../../store/modules/movies/action-types';

class NowPlaying extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  componentWillMount() {
    this.props.dispatch(actions.getMovies({ endpoint: 'now_playing', type: actionTypes.GET_NOWPLAYING })).then((data) => {
      console.log("Data is", data);
      this.setState({ loading: false })
    })
  }
  render() {
    let { loading } = this.state

    return (
      <div className="container mt-30">
        <h1>Now Playing</h1>
        <div className="slider">
          <Icon type="left-circle" theme="twoTone" />
            {this.props.nowPlaying.results.length > 0 && this.props.nowPlaying.results.map((item, index) => (
              <Card
              key={index}
              hoverable
              loading={loading}
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
const mapStateToProps = ({ nowPlaying }) => ({ nowPlaying });
export default connect(mapStateToProps)(NowPlaying);
