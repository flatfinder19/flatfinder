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
      <div>
        <div className="searchbox">
          <Fa icon="search" />
          <p style={{ marginLeft: '1rem', fontSize: '20px'}}>Search box</p>
        </div>
      </div>
    );
  }
}

export default Searchbar;