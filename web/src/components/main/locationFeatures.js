import React, { Component } from 'react';
// import CheckBox from "../functions/checkbox";

class LocationFeatures extends Component {
    
  render() { 
    return ( 
      <div className="Location-Features">
        <p>Location Features </p>
        <label>Groceries<input type="checkbox" checked/><i></i></label>
              <label>Food &amp; Drink<input type="checkbox" checked/><i></i></label>
              <label>Shopping<input type="checkbox" checked/><i></i></label>
              <label>Coffee<input type="checkbox" checked/><i></i></label>
              <label>Schools<input type="checkbox" checked/><i></i></label>
              <label>Parks<input type="checkbox" checked/><i></i></label>
              <label>Libraries &amp; Books<input type="checkbox" checked/><i></i></label>
              <label>Entertainment<input type="checkbox" checked/><i></i></label>
              <label>Public Transit<input type="checkbox" checked/><i></i></label> 
      </div>
     );
  }
}
 
export default LocationFeatures;