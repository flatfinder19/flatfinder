import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      </div>
     );
  }
}
 
export default Home;