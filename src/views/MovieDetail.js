import React, { Component } from 'react'
import actions from '../store/modules/movies/actions'
import { connect } from 'react-redux'
import { Col, Row, Rate, Card } from 'antd'

class MovieDetail extends Component {
  constructor (props) {
    super(props)

    this.state = {
      movie: null
    }
  }

  componentDidMount () {
    this.props
      .dispatch(actions.getMovie(this.props.match.params.id))
      .then(movie => {
        this.setState({
          movie
        }, () => {
          this.props.dispatch(actions.getCredits(this.props.match.params.id)).then(response => {
            let { movie } = this.state;
            movie.credits = response;
            this.setState({
              movie
            })
          }).catch(err => console.log("Error : ", err))
        })
      })
  }

  render () {
    let { movie } = this.state;
    
    return (
      <div className='movie-details-container'>
        {movie && (
          <div>
            <Row className="movie-header">
              <Col>
                <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className='movie-backdrop' />
              </Col>
            </Row>
            <Row type="flex" justify="center">
              <Col span={19}>
                <div className="movie-card">
                  <Row>
                    <Col span={6}>
                      <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="movie-poster" />
                    </Col>
                    <Col span={16} offset={1}>
                      <p className="movie-title mb-10">{movie.title}</p>
                      <div className="movie-info">
                        <span className="movie-info-item">{movie.release_date}</span>
                        <span className="movie-info-item">{movie.genres.map(item => <span className="movie-genre">{item.name}</span>)}</span>
                        <span className="movie-info-item">{movie.runtime} min</span>
                      </div>
                      <div className="movie-rating mt-20">
                        <Rate disabled allowHalf allowClear defaultValue={movie.vote_average / 2}/>
                        <span className="movie-average">{movie.vote_average} / 10</span>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mt-30">
                    <Col span={12} className="pt-30">
                      <h1>Storyline</h1>
                      <p className="movie-overview">{movie.overview}</p>
                    </Col>
                    <Col span={7} offset={4} className="movie-details pt-30">
                      <h1>Details</h1>
                      <p>Release Date : {movie.release_date}</p>
                      <p>Homepage: {<a href={movie.homepage}>{movie.homepage}</a>}</p>
                      <p>Revenue : {`$ ${movie.revenue}`}</p>
                      <p>Status : {movie.status}</p>
                      <p>Vote Average : {movie.vote_average} / 10 </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              {this.props.movie && this.props.movie.credits && this.props.movie.credits.cast.map((cast, index) => (
                <Card 
                className="movie-cover" 
                key={index}  
                cover={<img src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} 
                alt={cast.name}/>}>
               <Card.Meta title={cast.name} />
             </Card>

              ))}
            </Row>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ movie }) => ({ movie })
export default connect(mapStateToProps)(MovieDetail)
