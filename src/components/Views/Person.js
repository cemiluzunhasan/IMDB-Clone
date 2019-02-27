import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import routes from '../../plugins/routes';

class Person extends Component {
  render() {
    let personRoutes = routes.find(route => route.name === 'person')
    console.log(this.props.match.params.id);
    return (
      <div>
        { personRoutes.routes.map(route => {
            return (
              <Route 
                path={`${personRoutes.path}${route.path}`}
                component={route.component}
              />
            )
          }
        )
        }
      </div>
      )
  };
};

export default Person;