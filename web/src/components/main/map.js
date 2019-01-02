import React, { Component } from 'react';

import Searchbar from './searchbar.js';

class Map extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Map">
        <Searchbar />
        <p> Map goes here </p>
      </div>
     );
  }
}
 
export default Map;