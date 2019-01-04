import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import keys from '../../keys.js';
import Searchbar from './searchbar.js';
import Modal from './modal.js';
import axios from 'axios';

//const keys = { googleKey: process.env.REACT_APP_GOOGLE_KEY };
console.log(keys);
const style = {
  height: '90vh',
};

class MapContainer extends Component {
  state = { 
    showModal: false,
   }

  // async componentDidMount() {
  //   const data = {
  //     query: '',
  //     "latitude": "40.714199",
  //     "longitude": "-74.006401",
  //     "laundry": true,
  //     "parking": false,
  //     "price": "1,500",
  //     "bedrooms": 2,
  //     "has_image": false,
  //     "cats_ok": false,
  //     "dogs_ok": true,
  //     "square_ft": "",
  //     "no_of_bathrooms": 1,
  //     "no_smoking": false,
  //     "is_furnished": false,
  //     "wheelchair_acccess": false,
  //     "housing_type": ""
  //   };
  //   const token = localStorage.getItem('token');
  //   console.log(token);
  //   const res = await axios
  //     .post("https://flatfinderapp.herokuapp.com/api/personalsearches/",
  //     data,
  //     {
  //       headers: {
  //         Authorization: `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTQ2NjI3NDE2LCJlbWFpbCI6IiJ9.--xKYIQBHbX112u8aC7IDbGUQbqg7XzEwA04mVwxBkQ`
  //       }
  //     }
  //   );
  //   const response = res.data;
  //   console.log(response);
  // }

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


