import React, { Component } from 'react'
import actions from '../../../store/modules/movies/actions'
import { connect } from 'react-redux'
import { Col, Row, Rate, Button } from 'antd'
import PersonItem from '../../UIComponents/PersonItem'
import { MoviesProxy } from '../../../proxies';
import MovieItem from '../../UIComponents/MovieItem';
import { withRouter, Link } from 'react-router-dom'
import { IMAGE_ADDRESS } from '../../../helpers/constants'

class MovieDetail extends Component {
  state = {
    movie: null
  }

  goCast = () => {
    this.props.history.push(`${this.props.match.params.id}/cast`)
  }

  componentDidMount () {
    let id = this.props.match.params.id;

    this.props.dispatch(actions.getMovie(id)).then(movie => {
      this.setState({
        movie
      }, () => {
        this.props.dispatch(actions.getCredits(id)).then(response => {
          let { movie } = this.state;
          movie.credits = response;
          this.setState({
            movie
          }, () => {
            new MoviesProxy({ api_key: '413c8042ab31652325d5a5a50a75fd47' }).getSimilar(id).then(similars => {
              let { movie } = this.state;
              movie.similars = similars;
              this.setState({
                movie
              })
            });
          })
        })
      })
    })
  }

  render () {
    let { movie } = this.state

    return (
      <div className='movie-details-container'>
        {movie && (
          <React.Fragment>
            <Row className='movie-header'>
              <Col>
                <img
                  src={`${IMAGE_ADDRESS}/${movie.backdrop_path}`}
                  className='movie-backdrop'
                  alt="movie"
                />
              </Col>
            </Row>
            <Row type='flex' justify='center'>
              <Col span={19}>
                <div className='movie-card'>
                  <Row>
                    <Col span={6}>
                      <img
                        src={`${IMAGE_ADDRESS}/${movie.poster_path}`}
                        className='movie-poster'
                        alt="movie"
                      />
                    </Col>
                    <Col span={16} offset={1}>
                      <p className='movie-title mb-10'>{movie.title}</p>
                      <div className='movie-info'>
                        <span className='movie-info-item'>
                          {movie.release_date}
                        </span>
                        <span className='movie-info-item'>
                          {movie.genres.map((item, i) => (
                            <span className='movie-genre' key={`ebeninamcigi${i}`}>{item.name}</span>
                          ))}
                        </span>
                        <span className='movie-info-item'>
                          {movie.runtime} min
                        </span>
                      </div>
                      <div className='movie-rating mt-20'>
                        <Rate
                          disabled
                          allowHalf
                          allowClear
                          defaultValue={movie.vote_average / 2}
                        />
                        <span className='movie-average'>
                          {movie.vote_average} / 10
                        </span>
                      </div>
                      <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noopener noreferrer">
                        <img src="/static/img/imdb.svg" style={{ width: '30px' }} className="mt-20" alt="movie" />
                      </a>
                    </Col>
                  </Row>
                  <Row className='mt-30'>
                    <Col span={12} className='pt-30'>
                      <h1>Storyline</h1>
                      <p className='movie-overview'>{movie.overview}</p>
                    </Col>
                    <Col span={7} offset={4} className='movie-details pt-30'>
                      <h1>Details</h1>
                      <p>Release Date : {movie.release_date}</p>
                      <p>
                        Country :{' '}
                        {movie.production_countries.map((item, index) => (
                          <span key={index}>{item.name}</span>
                        ))}
                      </p>
                      <p>
                        Homepage:{' '}{<a href={movie.homepage}>{movie.homepage}</a>}
                      </p>
                      <p>Revenue : {`$ ${movie.revenue}`}</p>
                      <p>Status : {movie.status}</p>
                      <p>Vote Average : {movie.vote_average} / 10 </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row type='flex' justify='center' className='mt-30'>
              <Col span={19}>
                <Col span={12} />
                <Col span={7} offset={4}>
                  <div className='movie-details'>
                    <h1>Cast</h1>
                    {movie &&
                      movie.credits &&
                      movie.credits.cast.map(
                        (cast, index) =>
                          index < 4 && (
                            <PersonItem
                              key={index}
                              person={cast}
                            />
                          )
                      )}
                    <Link to={`/movie/${movie.id}/cast`}>
                      <Button className="btn-link">See All</Button>
                    </Link>
                  </div>
                </Col>
              </Col>
            </Row>
            <Row type="flex" justify="center" className="mt-30">
              <Col span={19}>
                <Link to={`/movie/${movie.id}/similar`}>
                  <h1>You may also like</h1>
                </Link>
                { movie.similars && movie.similars.results.map((movie, index) => (
                  index <= 4 &&
                  <MovieItem
                    key={index}
                    title={movie.title}
                    rating={movie.vote_average}
                    image={movie.poster_path}
                  />
                ))}
              </Col>
            </Row>
          </React.Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ movie }) => ({ ...movie })
export default withRouter(connect(mapStateToProps)(MovieDetail));
