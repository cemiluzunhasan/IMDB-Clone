import React, { Component } from 'react';
import { Layout, Select, Icon } from 'antd';
import './assets/main.scss'
import "antd/dist/antd.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import actions from './store/modules/movies/actions'
import routes from './plugins/routes'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      displayedResults: [],
      value: ''
    }
  }
  handleChange = (value) => {
    console.log("Value => ", value)
    this.setState({ value });
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
            showSearch
            value={this.state.value}
            placeholder="Search Movies"
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            style={{width: '200px'}}
            onSearch={this.handleSearch}
            suffixIcon={this.state.loading && <Icon type="loading" spin />}
            onChange={this.handleChange}
            notFoundContent={null}>
              { this.props.searchResults.results.map((item, key) => <Select.Option key={key}>{item.title}</Select.Option>)}
          </Select>
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

const mapStateToProps = ({ searchResults }) => ({ searchResults });
export default connect(mapStateToProps)(App);
