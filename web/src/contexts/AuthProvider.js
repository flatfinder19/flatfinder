import React, { Component } from "react";
// import axios from "axios";

export const AuthContext = React.createContext({});

export class AuthProvider extends Component {
  state = {
    auth: false,
    username: "",
    email: "",
    name: {
      firstname: "",
      lastname: ""
    },
    location: "",
    //searchFeature: setSearchFeature(), 
    // locationFeatures: {
    //   showGroceryStores: false,
    //   showGyms: false,
    //   showPublicTransitPickups: false
    // },
    flatSearchData: {
      // maxPrice: setMaxPrice(), 
      // numBedrooms: setNumBedrooms(), 
      isFurnished: false
    },
    savedFlats: []
  };

  setLocation = ()=> {
    console.log(navigator.gelocation)
  //look at example in the docs and then
    this.setState(); //response from geolocation 
  }
//probably don't need id here 
  // setLocationFeatures = (index, name, id) => {
  //   console.log("setLocationFeatures:", index, name, id);
  //   const tempState = this.state;
  //   if (name === "groceryStores" || name === "gyms" || name === "publicTransportation") {
  //     tempState.locations[index].links[name] = !tempState.locations[index].links[
  //       name
  //     ];
  //   } else {
  //     tempState.locations[index].section[name].forEach(field => {
  //       if (field._id === id) {
  //         field.value = !field.value;
  //       }
  //     });
  //   }
  //   this.setState(tempState);
  // };

  render() {
    const flatSearchData = this.state;
    console.log("USERINFO on authprovider:", flatSearchData);
    return (
      <AuthContext.Provider
        value={{
          flatSearchData,
          actions: {
            selectCity: this.selectCity,
            expandLocationFeatures: this.expandLocationFeatures,
            setLocationsFeatures: this.setLocationFeatures,
            expandFlatFeatures: this.expandFlatFeatures,
            setFlatFeatures: this.setFlatFeatures,
            toggleAuth: this.toggleAuth,
            createDataExport: this.createDataExport,
            setLogin: this.setLogin,
            setLogout: this.setLogout,
            toggleElement: this.toggleElement,
            removeFlatSeach: this.removeFlatSearch,
            setSingleElement: this.setSingleElement,
            pushFlatSearch: this.pushFlatSearch,
            setCurrentFlatSearch: this.setCurrentFlatSearch
          }
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthProvider;
