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
        </div>
        <div className="Home-testimonials">
        </div>
      </div>
     );
  }
}
 
export default Home;