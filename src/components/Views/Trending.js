import React, { Component } from "react";
import { Card, Icon } from 'antd';
import { connect } from "react-redux";

import actions from '../../store/modules/movies/actions'
import { Link } from 'react-router-dom'

class Trending extends Component {

  constructor(props) {
    super(props)

    this.state = {
      loading: true
    }
  }
  componentWillMount() {
    this.props.dispatch(actions.getTrending({ mediaType: 'all', timeWindow: 'week' })).then(() => {
      this.setState({
        loading: false
      })
    });
  }

  render() {
    let { loading } = this.state

    return (
      <div className="container mt-30">
        <h1>Trending Movies</h1>
           <div className="slider">
           <Icon type="left-circle" theme="twoTone" />
             {this.props.trendingMovies.results.length > 0 && this.props.trendingMovies.results.map((item, index) => (
               <Link to={`/movie/${item.id}`}>
                <Card 
                  className="movie-cover" 
                  key={index} 
                  loading={loading} 
                  cover={<img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} 
                  alt={item.title}/>}>
                 <Card.Meta title={item.title} />
               </Card>
               </Link>
             ))}
         </div>
      </div>
    );
  }
}
const mapStateToProps = ({ trendingMovies }) => ({ trendingMovies });
export default connect(mapStateToProps)(Trending);
