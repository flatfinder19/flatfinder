import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import landing from './landing.jpeg';
import random from './random.jpg';

class Home extends Component {
  state = {  }
  render() { 
    return <div className="Home">
        <div className="Navigation">
          <div className="Navigation-box">
            <p className="Navlogo">Flatfinder</p>
            <div>
              <Link to="/login">
                <p>Login</p>
              </Link>
              <Link to="/signup">
                <p>Register</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="Home-main">
          <p className="Home-main-text">Live somewhere you Love</p>
          <div>
            <img src={landing} alt="SideLogo" className="Home-main-image" />
          </div>
        </div>
        <div className="Home-description">
          <p className="Home-description-title">About</p>
          <p className="Home-description-details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      <div style={{ backgroundColor: '#F5F5F5'}}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <p className="Home-description-title">Testimonials</p>
          </div>
          <div className="Home-testimonials">
            <div className="Home-testimonials-users">
              <div>
                <img className="Home-testimonials-img" src={random} alt="img" />
              </div>
              <hgroup className="speech-bubble">
                <p>
                  Hey mann heres the bubble Hey mann heres the bubbleHey mann
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                </p>
                <p>Name, lastName</p>
              </hgroup>
            </div>    
          <div className="Home-testimonials-users">
            <div>
              <img className="Home-testimonials-img" src={random} alt="img" />
            </div>
            <hgroup className="speech-bubble">
              <p>
                Hey mann heres the bubble Hey mann heres the bubbleHey mann
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                </p>
              <p>Name, lastName</p>
            </hgroup>
          </div>
          <div className="Home-testimonials-users">
            <div>
              <img className="Home-testimonials-img" src={random} alt="img" />
            </div>
            <hgroup className="speech-bubble">
              <p>
                Hey mann heres the bubble Hey mann heres the bubbleHey mann
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                </p>
              <p>Name, lastName</p>
            </hgroup>
          </div>
        </div>
        </div>
        <div className="footer">

        </div>
      </div>
  }
}
 
export default Home;