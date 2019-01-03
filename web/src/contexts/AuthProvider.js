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
    currentFlatSearch: null,
    locationFeatures: {
      showGroceryStores: false,
      showGyms: false,
      showPublicTransitPickups: false
    },
    flatSearchData: {
      searchTitle: ""
      // city: setCity(),
      // pinDropLocation: dropPin(),
      // pinProximity: setPinProximity(),
    }
  };
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
