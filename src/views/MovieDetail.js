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
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} className='movie-backdrop' />
            <Row>
              <Col span={5}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className="movie-poster" />
                <Rate disabled allowHalf allowClear defaultValue={movie.vote_average / 2}/>
              </Col>
              <Col span={19}>
                <p>Title: <span>{movie.title}</span></p>
                <p>Genres : { movie.genres.map(item => <span>{item.name} </span>)}</p>
                <p>Release Date : {movie.release_date}</p>
                <p>Homepage: {<a href={movie.homepage}>{movie.homepage}</a>}</p>
                <p>Overview: {movie.overview}</p>
                <p>Revenue : {`$ ${movie.revenue}`}</p>
                <p>Status : {movie.status}</p>
                <p>Vote Average : {movie.vote_average} / 10 </p>
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
