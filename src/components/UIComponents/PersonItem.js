import React, { Component } from 'react';

class PersonItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="person-item-container pb-20">
        <img src={this.props.img} className="profile-img mr-20" />
        <span className="person-name">{this.props.name}</span>
      </div>
    );
  };
};

export default PersonItem;