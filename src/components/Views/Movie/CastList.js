import React, { Component } from 'react';
import { MoviesProxy } from '../../../proxies';
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import { generateUserImageSource } from '../../../helpers/methods'

class CastList extends Component {
  state = {
    cast: [],
    crew: [],
    id: 0
  }

  componentDidMount() {
    new MoviesProxy({ api_key: '413c8042ab31652325d5a5a50a75fd47' }).getCredits(this.props.match.params.id).then(response => {
      this.setState({
        cast: response.cast,
        crew: response.crew,
        id: response.id
      })
    })
  }

  render() {
    let { cast } = this.state;

    return (
      <div className="list-container pl-30 pr-30">
        { cast.map((item, key) => (
            <Link key={key} to={`/person/${item.id}/details`}>
              <Card
                className="card-item"
                key={key}
                hoverable
                cover={<img alt="example" src={generateUserImageSource(item.profile_path)} style={{ width: '100%' }}/>}>
                  <Card.Meta
                    title={item.character}
                    description={item.name}
                  />
              </Card>
            </Link>
        ))}
      </div>
    )
  }
};

export default CastList;
