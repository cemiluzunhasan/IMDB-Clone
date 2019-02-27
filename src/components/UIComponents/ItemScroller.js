import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon } from 'antd'

class ItemScroller extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    let { data } = this.props;

    return (
      <div className="slider">
        <Icon type="left-circle" theme="twoTone" />
          {data.results.length > 0 && data.results.map((item, index) => (
            <Link to={`/movie/${item.id}`}>
                <Card 
                  className="movie-cover" 
                  key={index}  
                  cover={<img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} 
                  alt={item.title}/>}>
                <Card.Meta title={item.title} />
              </Card>
            </Link>
          ))}
      </div>
    )
  }
}

export default ItemScroller;
