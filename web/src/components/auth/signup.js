import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Consumer } from "../../contexts/AuthProvider";

class Signup extends Component {
  state = {
    username: '',
    password: '',
  };

  // loginGoogle = e => {
  //   e.preventDefault();
  //   this.props.loginGoogle();
  // };

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.history.push('/');
    }
  }

  
  render() {
    return (
      <Consumer>
        {context => (
          <div className="App-sign">
          <div className="signin">
            <div className="signin--box">
              <h1 className="signin-flatfinder">Flatfinder</h1>
              <h1 className="signin--header">Sign up</h1>
              <div className="signin--buttons">
              </div>
              {context.globalData.requestError ? <h5 style={{ color: 'red'}}>Invalid Email or Password</h5> : null}
              <form className="signin--signin">
                Username:<br />
                <input
                  name="username"
                  className="signin--signin__username"
                  placeholder="Username"
                  onChange={context.handleInput}
                />
                <br />
                Password
                <br />
                <input
                  name="password"
                  className="signin--signin__password"
                  placeholder="Password"
                  onChange={context.handleInput}
                />
                <br />
                <input
                  className="signin--signin__button"
                  type="submit"
                  value="Sign up"
                  onClick={e => context.signupUser(e)}
                />
              </form>
              <p className="signin--notmember">
                Already a member? <Link to="/login">Sign in</Link>
                <br />
                {/* <NavLink className="home-link" to="/Home">Home</NavLink> */}
              </p>
            </div>
          </div>
        </div>
        )}
      </Consumer>
    );
  }
}

export default Signup;