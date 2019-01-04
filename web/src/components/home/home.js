import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import landing from './landing.jpg';

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
        <div>
           <img src={landing} alt="SideLogo" className="Home-pic"/>
        </div>
      </div>
     );
  }
}
 
export default Home;