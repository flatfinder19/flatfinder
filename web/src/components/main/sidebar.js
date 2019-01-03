import React, { Component } from 'react';
import FlatFeatures from './flatFeatures';


const style= {
  marginRight: '1rem', 
  background: 'EA4336'
}

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