import React, { Component } from 'react';

import Map from './map.js';
import Sidebar from './sidebar.js';

export default class Main extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='Main'>
        <Sidebar />
        <Map />
      </div>
     );
  }
};


