import React, { Component } from 'react';

import Map from './map.js';
import Sidebar from './sidebar.js';

export default class Main extends Component {
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


