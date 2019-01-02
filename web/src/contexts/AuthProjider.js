import React, { Component } from "react";
import axios from "axios";
const urls = require("../config/config.json");

export const AuthContext = React.createContext({});

export class FlatFinder extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
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
            showPublicTransitPickups: false, 
        },
        flatSearchData: {
            searchTitle: "", 
            city: setCity(), 
            pinDropLocation: dropPin(), 
            pinProximity: setPinProximity(), 
        }
    }
}
    render() {
        const flatSearchData = this.state;
        console.log("USERINFO on authprovider:", flatSearchData);
        return (
          <AuthContext.Provider
            value={{
              flatSearchData,
              actions: {
                selectCity: this.selectCity,
                setLocationsFeatures: this.setLocationFeatures,
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