import React, { Component } from 'react';
import { PersonProxy } from '../proxies'

class CastDetail extends Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    new PersonProxy({ api_key: `413c8042ab31652325d5a5a50a75fd47` }).getCast(this.props.match.params.id).then(response => console.log("Response", response))
  }

  render() {
    return (
      <div className="cast-detail-container">

      </div>
    );
  };
};

export default CastDetail;