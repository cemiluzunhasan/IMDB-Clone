import React, { Component } from 'react';
import { Layout, Input, Icon, Carousel } from 'antd';
import './assets/main.scss'
import "antd/dist/antd.css";

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
              <img src="https://i.pinimg.com/originals/26/00/d5/2600d5fda64fb9356b117219ca2bfce9.jpg" className="carousel-image" />
            </div>
            <div>
              <img src="https://i.pinimg.com/originals/26/00/d5/2600d5fda64fb9356b117219ca2bfce9.jpg" className="carousel-image" />
            </div>
            <div>
              <img src="https://i.pinimg.com/originals/26/00/d5/2600d5fda64fb9356b117219ca2bfce9.jpg" className="carousel-image" />
            </div>
          </Carousel>
        </Content>
        <Footer>

        </Footer>
      </div>
    );
  }
}

export default App;
