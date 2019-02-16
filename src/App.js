import React, { Component } from 'react';
import { Layout, Input, Icon, Carousel, Button } from 'antd';
import './assets/main.scss'
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './routes/routes';

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
          <Router>
            <div> 
            {routes.map((route, index) => (
              <Route
                exact
                path={route.path}
                component={route.component}
                key={index}
              />
            ))}
            </div>
          </Router>
        </Content>
        <Footer>

        </Footer>
      </div>
    );
  }
}

export default App;
