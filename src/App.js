import React, { Component } from 'react';
import { Layout, Input, Icon, Carousel, Button } from 'antd';
import './assets/main.scss'
import "antd/dist/antd.css";
import Trending from './components/Layout/Trending';

class App extends Component {
  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <div className="App">
        <Header>
          <img className="logo" src="/static/img/logo.svg" alt="filmable" />
          <Input
            placeholder="Search Films"
            className="search"
            prefix={<Icon type="search" />}
            suffix={<div />}
          />
        </Header>
        <Content>
          <Carousel>
            <div>
              <div className="carousel-item">
                <img src="https://i.pinimg.com/originals/26/00/d5/2600d5fda64fb9356b117219ca2bfce9.jpg" className="carousel-image" />
                <div className="carousel-caption">
                  <h1 className="carousel-movie-header">Stranger Things</h1>
                  <h2>Drama - 8.0</h2>
                  <p>Oona, a recent graduate in anthropology, has returned to her dead mother’s seaside cottage in southern England to prepare it for sale. Her arrival disturbs Mani, a wary vagrant who has been squatting on the property.</p>
                  <Button className="btn-red mt-20">Go to Detail</Button>
                </div>
              </div>
            </div>
            <div>
              <img src="https://i.pinimg.com/originals/26/00/d5/2600d5fda64fb9356b117219ca2bfce9.jpg" className="carousel-image" />
            </div>
            <div>
              <img src="https://i.pinimg.com/originals/26/00/d5/2600d5fda64fb9356b117219ca2bfce9.jpg" className="carousel-image" />
            </div>
          </Carousel>
          <Trending />
        </Content>
        <Footer>

        </Footer>
      </div>
    );
  }
}

export default App;
