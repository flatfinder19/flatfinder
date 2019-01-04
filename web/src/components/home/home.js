import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import landing from './landing.jpeg';

class Home extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Home">
        <div className='Navigation'>
          <div className="Navigation-box">
            <p className="Navlogo">Flatfinder</p>
            <div>
              <Link to='/login'><p>Login</p></Link>
              <Link to='/signup'><p>Register</p></Link>
            </div>
          </div>
        </div>
        <div className="Home-main">
          <p className="Home-main-text">Live somewhere you Love</p>
          <img src={landing} alt="SideLogo" className="Home-main-image"/>

        </div>
        <div className="Home-description">
          <p className="Home-description-title">About</p>
          <p className="Home-description-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
             nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
            dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="Home-testimonials">
          <p className="Home-description-title">Testimonials</p>
        </div>
      </div>
     );
  }
}
 
export default Home;