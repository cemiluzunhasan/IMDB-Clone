import React, { Component } from 'react';
import { Layout, Select, Icon, Divider } from 'antd';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import actions from './store/modules/movies/actions'
import routes from './plugins/routes'

import "antd/dist/antd.css";
import './assets/main.scss'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      displayedResults: [],
      value: undefined
    }
  }
  handleChange = (value) => {
    console.log("Value => ", value)
    this.setState({ value });
    this.props.history.push(`/movie/${value}`)
  }
  handleSearch = (value) => {
    this.setState({ loading: true })
    this.props.dispatch(actions.searchMovie(value)).finally(() => {
      this.setState({ loading: false })
    })
  }
  
  render() {
    const { Header, Content, Footer } = Layout;
    return (
      <div className="App">
        <Header>
          <img className="logo" src="/static/img/logo.svg" alt="filmable" />
          <Select
            placeholder={"Search Movies"}
            value={this.state.value}
            onSearch={this.handleSearch}
            onChange={this.handleChange}
            showSearch
            showArrow={false}
            defaultActiveFirstOption={false}
            filterOption={false}
            style={{ width: '200px' }}
            dropdownRender={menu => 
              <div>
                {menu}
                {this.props.searchResults.results.length > 0 &&
                  <div>
                    <Divider style={{ margin: '4px 0' }} />
                    <div style={{ padding: '8px', cursor: 'pointer' }}>
                      <Icon type="align-center" /> See All Results
                    </div>
                </div>
                }
              </div>}>
              { this.props.searchResults.results.map(item => <Select.Option key={item.id}>{item.title}</Select.Option>)}
          </Select>
        </Header>
        <Content>
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
        </Content>
        <Footer>
          
        </Footer>
      </div>
    );
  }
}

const mapStateToProps = ({ searchResults }) => ({ searchResults });
export default withRouter(connect(mapStateToProps)(App));
