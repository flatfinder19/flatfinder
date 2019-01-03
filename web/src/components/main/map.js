import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
//import keys from '../../keys.js';
import Searchbar from './searchbar.js';

const keys = process.env.REACT_APP_GOOGLE_KEY;
const style = {
  width: '90%',
  height: '100%',
  loadLocation: false,
};

class MapContainer extends Component {
  state = {};

  onMarkerClick = () => {
    this.setState({ loadLocation: true });
  };

  render() {
    return (
      <div className="Map">
        <Searchbar />
        <div>
          <Map
            google={this.props.google}
            style={style}
            zoom={9}
            initialCenter={{
              lat: 40.854885,
              lng: -88.081807,
            }}
          >
            <Marker onClick={this.onMarkerClick} name={'Current location'} />

            <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>'New York'</h1>
              </div>
            </InfoWindow>
          </Map>
        </div>
        {/* <div style={{position: 'relative'}}>
          <div className = "loadDetail">
            <p> Details </p> 
          </div>
        </div> */}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: keys.googleKey,
})(MapContainer);
