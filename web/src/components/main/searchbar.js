import React from "react";
import { Col, Fa, FormInline } from "mdbreact";
// import { Col, Fa, FormInline } from "mdbreact";
class Searchbar extends React.Component {

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
      // <Col md="6">
      //   <FormInline className="md-form">
      //     <Fa icon="search" />
      //     <input
      //       className="form-control form-control-sm ml-3 w-75"
      //       type="text"
      //       placeholder="Search"
      //       aria-label="Search"
      //     />
      //   </FormInline>
      // </Col>
    );
  }
}

export default Searchbar;