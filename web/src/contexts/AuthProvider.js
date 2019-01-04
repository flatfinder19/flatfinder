import React, { Component } from "react";
import axios from "axios";
import { withRouter } from 'react-router-dom';


const AuthContext = React.createContext({});

class Provider extends Component {
  state = {
    auth: false,
    user: null,
    username: '',
    password: '',
    userLocation: null,
    requestError: false,
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

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  loginUser = async e => {
    e.preventDefault();
    const user = {username: this.state.username, password: this.state.password}
    try {
      const response = await axios.post('https://flatfinderapp.herokuapp.com/api-token-auth/', user);
      const token = await response.data.token;
      if (token) {
        localStorage.setItem('token', JSON.stringify(token));
        this.setState({ requestError: false })
        this.props.history.push('/')
      } else {
        this.setState({ requestError: true })
      }
    } catch(e){
      this.setState({ requestError: true })
    }
  };

  signupUser = async e => {
    e.preventDefault();
    const user = {username: this.state.username, password: this.state.password}
    try {
      const response = await axios.post('https://flatfinderapp.herokuapp.com/api-token-auth/', user);
      const token = await response.data.token;
      if (token) {
        localStorage.setItem('token', JSON.stringify(token));
        this.setState({ requestError: false })
        this.props.history.push('/')
      } else {
        this.setState({ requestError: true })
      }
    } catch(e){
      this.setState({ requestError: true })
    }
  };

  logoutUser = () => {
    
  }

  setLocation = ()=> {
    console.log(navigator.gelocation)
  //look at example in the docs and then
    this.setState(); //response from geolocation 
  }


  render() {
    // actions: {
      // selectCity: this.selectCity,
      // expandLocationFeatures: this.expandLocationFeatures,
      // setLocationsFeatures: this.setLocationFeatures,
      // expandFlatFeatures: this.expandFlatFeatures,
      // setFlatFeatures: this.setFlatFeatures,
      // toggleAuth: this.toggleAuth,
      // createDataExport: this.createDataExport,
      // setLogout: this.setLogout,
      // toggleElement: this.toggleElement,
      // removeFlatSeach: this.removeFlatSearch,
      // setSingleElement: this.setSingleElement,
      // pushFlatSearch: this.pushFlatSearch,
      // setCurrentFlatSearch: this.setCurrentFlatSearch
    // }
    return (
      <AuthContext.Provider
        value={{
          globalData : this.state,
          loginUser: this.loginUser,
          handleInput: this.handleInputChange
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
export const AuthProvider = withRouter(Provider);
export const Consumer = AuthContext.Consumer;
