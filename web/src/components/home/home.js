import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import landing from './landing.jpeg';
import random from './random.jpg';
import random2 from './random2.jpg';
import random3 from './random3.jpg';

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
          In the market for a new Flat? Do you have one or more destinations 
          in mind? Flatfinder can find and keep track of the options that fit 
          your livability needs! Keep track of available Flats that will accept 
          your pet, have parking and laundry facilities, or are near landmarks that 
          your prefer. Specify your cities and preferred Flat and location options, 
          then check back in whenever you would like to see the 
          current options available at all of your locations! 
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
                  This app made moving to a new city much easier. 
                  It kept track of possible appartments for me that had all 
                  the living features I was looking for. When it came move
                   I knew what my options were. 
                </p>
                <p>Danielle Phillips</p>
              </hgroup>
            </div>    
          <div className="Home-testimonials-users">
            <div>
              <img className="Home-testimonials-img" src={random2} alt="img" />
            </div>
            <hgroup className="speech-bubble">
              <p>
                Thank you Flatfinder for helping me find the best living spaces. I work in contract positions 
                and when a new opportunity comes up now I can take it, and I can be ready 
                for it with regard to my moving options in new cities. Now I can find what I need faster and stress a little less!
                </p>
              <p>Tim Wong</p>
            </hgroup>
          </div>
          <div className="Home-testimonials-users">
            <div>
              <img className="Home-testimonials-img" src={random3} alt="img" />
            </div>
            <hgroup className="speech-bubble">
              <p>
                I am graduating school soon. I have a dog, I like to bike and I have a car. There 
                are a few cites I am applying for jobs in and it is nice to know I can keep track 
                of what is available without having to re-seach all of these locations when the 
                time to move is upon me. 
                </p>
              <p>Gabriel Martino</p>
            </hgroup>
          </div>
        </div>
        </div>
        <div className="footer">
        <div className="icons">
        <i class="fas fa-at fa-2x"></i>
        <i class="fab fa-facebook-f fa-2x"></i>
        <i class="fab fa-twitter fa-2x"></i>
        </div>
        </div>
      </div>
  }
}
 
export default Home;