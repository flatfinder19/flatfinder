import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import keys from '../../keys.js';
import Searchbar from './searchbar.js';
import Modal from './modal.js';

//const keys = { googleKey: process.env.REACT_APP_GOOGLE_KEY };
console.log(keys);
const style = {
  height: '90vh',
};

class MapContainer extends Component {
  state = { 
    showModal: false,
   }

  showModal = () => {
    this.setState({ 
      showModal: !this.state.showModal, 
    })
  }

  render() {
    const { showModal } = this.state; 
    return ( 
      <div className="Map">
        <Searchbar />
        <div className='Map-googlemap'> 
          <Map 
            google={this.props.google} 
            style = {style}
            zoom={9}
            initialCenter={{
              lat: 40.854885,
              lng: -88.081807
            }}
          >
            <Marker onClick={this.showModal} name={'Current location'} />

            {/* <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>'New York'</h1>
              </div>
            </InfoWindow> */}
          </Map>
        </div>
        {showModal ?
          <Modal showModal={this.showModal}/>
        : null}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: keys.googleKey,
})(MapContainer);


