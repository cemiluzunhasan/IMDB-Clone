import React, { Component } from "react";
import { Card, Icon } from 'antd';

class Trending extends Component {
  render() {
    return (
      <div className="container mt-30">
        <h1>Trending Movies</h1>
        <div className="slider">
          <Icon type="left-circle" theme="twoTone" />
            <Card
              hoverable
              cover={<img src="https://image.tmdb.org/t/p/original/uf7KWtBYF8GaPcXreKECm9bpdeM.jpg" className="movie-cover" />}
              >
              <Card.Meta 
                title="Stranger Things" />
            </Card>
            
        </div>
      </div>
    );
  }
}

export default Trending;
