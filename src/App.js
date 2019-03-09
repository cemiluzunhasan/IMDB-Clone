import React, { Component } from 'react';
import { Button, Layout, Select, Icon, Divider } from 'antd';
import { Switch, Route, withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import actions from './store/modules/movies/actions'
import routes from './plugins/routes'

import "antd/dist/antd.css";
import './assets/main.scss'

class App extends Component {

  state = {
    loading: false,
    displayedResults: [],
    value: undefined
  }

  handleChange = (value) => {
    this.props.history.push(`/movie/${value}`)

    //TODO: Farklı bir çözüm bul
    window.location.reload()
  }
  handleSearch = (value) => {
    this.setState({ loading: true })
    this.props.dispatch(actions.searchMovie(value)).finally(() => {
      this.setState({ loading: false })
    })
  }

  seeAll = () => {
    this.props.history.push('/search')
  }

  render() {
    const { Header, Content, Footer } = Layout;
    let _this = this;
    return (
      <div className="App">
        <Header>
          <Link to="/">
            <img className="logo" src="/static/img/logo.svg" alt="filmable" />
          </Link> 
          <Select
            className="search-box"
            placeholder={"Search Movies"}
            onSearch={this.handleSearch}
            onChange={this.handleChange}
            onSelect={this.handleChange}
            showSearch
            showArrow={false}
            defaultActiveFirstOption={false}
            filterOption={false}
            style={{ width: '200px' }}
            dropdownRender={menu =>
              <React.Fragment>
                {menu}
                {this.props.searchResults.results.length > 0 &&
                  <div>
                    <Divider style={{ margin: '4px 0' }} />
                    <Button style={{ padding: '8px', cursor: 'pointer', zIndex: 3, border: 'none' }} onClick={_this.seeAll}>
                      <Icon type="align-center" /> See All Results
                    </Button>
                </div>
                }
              </React.Fragment>}>
              { this.props.searchResults.results.map(item => <Select.Option key={item.id}>{item.title}</Select.Option>)}
          </Select>
        </Header>
        <Content>
          <Switch>
            {routes.map((route, index) => (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.component}
                key={index}
              />
            ))}
          </Switch>
        </Content>
        <Footer>

        </Footer>
      </div>
    );
  }
}

const mapStateToProps = ({ searchResults }) => ({ searchResults });
export default withRouter(connect(mapStateToProps)(App));
