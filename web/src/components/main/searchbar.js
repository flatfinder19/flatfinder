import React from "react";
import { Col, Fa, FormInline } from "mdbreact";
// import { Col, Fa, FormInline } from "mdbreact";
class Searchbar extends React.Component {
  state = {

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
          <p className="Search-results">Save search results</p>
      </div>
    );
  }
}

export default Searchbar;