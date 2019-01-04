import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import logo from './google.png';

class SignIn extends Component {
  state = {
    username: '',
    password: '',
  };

  loginUser = e => {
    e.preventDefault();
    this.props.history.push('/');
  };

  loginGoogle = e => {
    e.preventDefault();
    this.props.loginGoogle();
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="App-sign">
        <div className="signin">
          <div className="signin--box">
            <h1 className="signin-flatfinder">Flatfinder</h1>
            <h1 className="signin--header">Sign Up</h1>
            <div className="signin--buttons">
            </div>
            {this.state.requestError ? <h5>Invalid Email or Password</h5> : null}
            <form className="signin--signin">
              Username:<br />
              <input
                name="username"
                className="signin--signin__username"
                placeholder="Username"
                onChange={this.handleInputChange}
              />
              <br />
              Password
              <br />
              <input
                name="password"
                className="signin--signin__password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
              <br />
              <input
                className="signin--signin__button"
                type="submit"
                value="Sign In"
                onClick={e => this.loginUser(e)}
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
    );
  }
}

export default SignIn;