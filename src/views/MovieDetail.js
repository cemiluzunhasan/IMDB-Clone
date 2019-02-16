import React, { Component } from 'react'
import actions from '../store/modules/movies/actions'
import { connect } from 'react-redux'
import { Col, Row, Rate, Tooltip } from 'antd'

class MovieDetail extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movie: null
    }
  }

  componentWillMount () {
    this.props
      .dispatch(actions.getMovie(this.props.match.params.id))
      .then(movie => {
        this.setState({
          movie
        })
      })
  }

  render () {
    let { movie } = this.state;

    return (
      <div className='movie-details-container'>
        {this.state.movie && (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className='movie-backdrop' />
            <Row>
              <Col span={5}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="movie-poster" />
                <Rate disabled allowHalf allowClear defaultValue={movie.vote_average / 2}/>
              </Col>
              <Col span={19}>
                <p>Title: <span>{movie.title}</span></p>
              </Col>
            </Row>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ movie }) => ({ movie })
export default connect(mapStateToProps)(MovieDetail)
