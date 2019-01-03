import React, { Component } from 'react';
import FlatFeatures from './flatFeatures';


class Map extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Sidebar">
        <p>Sidebar </p>
       <FlatFeatures/>
      </div>
     );
  }
}
 
export default Map;