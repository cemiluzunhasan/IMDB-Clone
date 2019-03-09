import React, { Component } from 'react';
import SearchScreen from '../UIComponents/SearchScreen';
import { connect } from 'react-redux';

class SearchResults extends Component {
  render() {
    return (
      <div>
        <SearchScreen data={this.props.searchResults} />
      </div>
    );
  };
};

const mapStateToProps = ({ searchResults }) => ({ searchResults });
export default connect(mapStateToProps)(SearchResults);