import React, { Component } from 'react';
import FlatFeatures from './flatFeatures';


// const style= {
//   marginRight: '1rem', 
//   background: 'EA4336'
// }

class Map extends Component {
  state = { 
    posted: false,
    dogs: false,
  };

  active = (option) => {
    switch (option) {
      case 'posted':
        this.setState({posted: !this.state.posted })
        break;
      case 'dogs':
        this.setState({dogs: !this.state.dogs })
        break;
      default:
        // code block
    }
  }

  render() {
    const style = {
      marginRight: '1rem',
      cursor: 'pointer',
      color: '#EA4336'
    }
    const Activestyle = {
      marginRight: '1rem',
      color: 'blue',
      cursor: 'pointer',
    }
    return ( 
      <div className="Sidebar">
        <div className="Sidebar-title">
          <p>Flatfinder</p>
        </div>
        <div className='options'>
          <p style={{color: '#616161', fontSize:'13px'}}>Options</p>
          <p onClick={() => this.active('posted')}>
            <i style={this.state.posted ? Activestyle 
              : style}
              className="fas fa-clock"></i>
            Posted today</p>
          <p onClick={() => this.active('dogs')}>
            <i style={this.state.dogs ? Activestyle 
              : style} className= "fas fa-dog"></i>
            Dogs
          </p>
          <p style={{color: '#616161', fontSize:'13px'}}>Advanced Options</p>
        </div>
       <FlatFeatures/>
      </div>
     );
  }
}
 
export default Map;