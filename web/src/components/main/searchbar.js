import React from "react";
import { Link } from 'react-router-dom';
import { Col, Fa, FormInline } from "mdbreact";

class Searchbar extends React.Component {
  state = {
    search: '',
  };
  getValueOfSelectOne = value => {
    console.log(value);
  }

  render() {
    return (
      <div className="Search">
        <div className="Search-searchbox">
          <Fa icon="search" />
          <p style={{ marginLeft: '1rem', fontSize: '20px'}}>Search box</p>
        </div>
          <Link to='/results'>
            <p className="Search-results">Save search results</p>
          </Link>
      </div>
    );
  }
}

export default Searchbar;