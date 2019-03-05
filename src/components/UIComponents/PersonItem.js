import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PersonItem extends Component {

  render() {
    let { person } = this.props;

    return (
      <Link to={`/person/${person.id}`}>
        <div className="person-item-container pb-20">
          <img src={`https://image.tmdb.org/t/p/original/${person.profile_path}`} className="profile-img mr-20" alt="movie" />
          <span className="person-name">{person.name}</span>
        </div>
      </Link>
    );
  };
};

export default PersonItem;
