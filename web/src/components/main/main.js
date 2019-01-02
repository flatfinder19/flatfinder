import React, { Component } from 'react';
import { connect } from 'react-redux';

import Map from './map.js';
import Sidebar from './sidebar.js';

class Main extends Component {
  state = {  }
  render() { 
    return ( 
      <div style={{display: 'flex'}}>
        <Sidebar />
        <Map />
      </div>
     );
  }
};

const mapStateToProps = state => {
  return {
    data: state.map.data,
  };
};
 
export default connect(mapStateToProps, null)(Main);