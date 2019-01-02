import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

import Searchbar from './searchbar.js';

class MapContainer extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Map">
        <Searchbar />
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>'New York'</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
     );
  }
}
 
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCDd2rcf0hahjSqDslI2_f9ZsEU4ddKwXo'
})(MapContainer
)