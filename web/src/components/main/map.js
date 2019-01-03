import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import onClickOutside from 'react-onclickoutside';
import keys from '../../keys.js';

import Searchbar from './searchbar.js';
import Modal from './Modal.js';

const style = {
  // width: '100%',
  height: '90vh',
  // overflow:'hidden',
  loadLocation: false
};

class MapContainer extends Component {
  state = {  }

  onMarkerClick = () => {
    this.setState({loadLocation: true})
  };

  render() {
    const { loadLocation } = this.state; 
    return ( 
      <div className="Map">
        <Searchbar />
        <div className='Map-googlemap'> 
          <Map 
            google={this.props.google} 
            style = {style}
            zoom={9}
             initialCenter = {
               {
                 lat: 40.854885,
                 lng: -88.081807
               }
             }
          >
            <Marker onClick={this.onMarkerClick} name={'Current location'} />

            {/* <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>'New York'</h1>
              </div>
            </InfoWindow> */}
          </Map>
        </div>
        {loadLocation ?
          <Modal />
        : null}
      </div>
     );
  }
}
 
export default GoogleApiWrapper({
  apiKey: keys.googleKey,
})(MapContainer);