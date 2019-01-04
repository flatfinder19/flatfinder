import React from "react";
import { Link } from 'react-router-dom';
import { Col, Fa, FormInline } from "mdbreact";
import { ToastContainer, toast } from 'react-toastify';

class Searchbar extends React.Component {
  state = {
    search: '',
  };
  getValueOfSelectOne = value => {
    console.log(value);
  }

  notify = () => toast.error("Successfully saved your results");

  render() {
    return (
      <div className="Search">
        <div className="Search-searchbox">
          <Fa icon="search" />
          <p style={{ marginLeft: '1rem', fontSize: '20px'}}>Search box</p>
        </div>
        {/* <Link to='/results'> */}
          <p onClick={this.notify} className="Search-results">Save search results</p>
        {/* </Link> */}
          <ToastContainer />
      </div>
    );
  }
}

export default Searchbar;