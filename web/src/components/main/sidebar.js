import React, { Component } from 'react';
import FlatFeatures from './flatFeatures';

import { Consumer } from "../../contexts/AuthProvider";

// const style= {
//   marginRight: '1rem', 
//   background: 'EA4336'
// }

class Map extends Component {
  state = { 
    posted: false,
    dogs: false,
    cats: false, 
    furnished: false, 
    nonSmoking: false, 
    accessible: false, 
    parking: false, 
  };

  active = (option) => {
    switch (option) {
      case 'posted':
        this.setState({posted: !this.state.posted })
        break;
      case 'dogs':
        this.setState({dogs: !this.state.dogs })
        break;
      case 'cats':
        this.setState({cats: !this.state.cats })
        break;
      case 'furnished':
        this.setState({furnished: !this.state.furnished })
        break;
      case 'non-smoking':
        this.setState({nonSmoking: !this.state.nonSmoking })
        break;
      case 'accessible':
        this.setState({accessible: !this.state.accessible })
        break;
      case 'parking':
        this.setState({parking: !this.state.parking })
        break;
      default:
        // code block
    }
  }

  render() {
    const style = {
      marginRight: '1rem',
      cursor: 'pointer',
      color: '#EA4336',
    }
    const Activestyle = {
      marginRight: '1rem',
      color: 'blue',
      cursor: 'pointer',
    }
    return (
      <Consumer>
        {context => (
        <div className="Sidebar">
          <div className="Sidebar-title">
            <p>Flatfinder</p>
          </div>
          <div className="Sidebar-categories">
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
              <p onClick={() => this.active('cats')}>
                <i style={this.state.cats ? Activestyle 
                  : style}
                  className="fas fa-cat"></i>
                Cats</p>
              <p onClick={() => this.active('furnished')}>
                <i style={this.state.furnished ? Activestyle 
                  : style} className= "fas fa-couch"></i>
                Furnished
              </p>
              <p onClick={() => this.active('non-smoking')}>
                <i style={this.state.nonSmoking ? Activestyle 
                  : style} className= "fas fa-smoking-ban"></i>
                Non-Smoking
              </p>
              <p onClick={() => this.active('accessible')}>
                <i style={this.state.accessible ? Activestyle 
                  : style} className= "fas fa-wheelchair"></i>
                  Accessible
                </p>
                <p onClick={() => this.active('parking')}>
                <i style={this.state.parking ? Activestyle 
                  : style} className= "fas fa-car"></i>
                  Parking
                </p>
              <p style={{color: '#616161', fontSize:'13px'}}>Advanced Options</p>
              <p onClick={() => context.logoutUser()} style={{fontSize: '1.6rem', marginTop: '7rem'}}>Signout</p>
            </div>
          </div>
        </div>
      )}
      </Consumer>
     );
  }
}
 
export default Map;