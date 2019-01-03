import React, { Component } from 'react';

const style= {
  marginRight: '1rem', 
  background: 'EA4336'
}

class Map extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Sidebar">
        <div className="Sidebar-title">
          <p>Flatfinder</p>
        </div>
        <div className='options'>
          <p style={{color: '#616161', fontSize:'13px'}}>Options</p>
          <p><i style={style} className="fas fa-clock icon-color"></i>Posted today</p>
          <p><i style={style} className= "fas fa-dog icon-color"></i>Dogs</p>
          <p></p>
          <p style={{color: '#616161', fontSize:'13px'}}>Advanced Options</p>
        </div>
      </div>
     );
  }
}
 
export default Map;