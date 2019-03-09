import React, { Component } from 'react';
import { Pagination } from 'antd';

class SearchScreen extends Component {
  render() {
    let { data } = this.props
    return (
      <div className="results">
        { data.results.map((item, key) => (
          <div key={key}>
            { item.title }
          </div>
        ))}
        { data.pagination.total_pages >= 1 && 
          <Pagination 
            total={data.pagination.total_results} 
            pageSize={data.pagination.total_pages}
            current={data.pagination.current_page}
            showTotal={total => `Total ${total} data`} />
        }
      </div>
    );
  };
};

export default SearchScreen;