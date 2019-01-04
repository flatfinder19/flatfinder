import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Consumer, AuthProvider } from "./contexts/AuthProvider";
import { withRouter, Redirect} from 'react-router-dom';

import Map from "./components/main/main";
import Results from "./components/results/results";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";
import Home from "./components/home/home";

const PrivateRoute = ({ component: Comp, ...rest }) => (
  <Route
    {...rest}
    render={compProps =>
      localStorage.getItem('token') ? (
        <Comp {...compProps} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: '/home',
          }}
        />
      )
    }
  />
);
class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthProvider>
          <Consumer>
            {context => (
              <React.Fragment>
                {/* <Route
                  exact
                  path="/"
                  render={props => <LoginPage {...props} context={context} />}
                />
                <Route
                  exact
                  path="/register"
                  render={props => <Register {...props} context={context} />}
                /> */}
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/signup" component={Signup} />
                <PrivateRoute path="/results" component={Results} />
                <PrivateRoute exact path="/" component={Map} />
              </React.Fragment>
            )}
          </Consumer>
        </AuthProvider>
      </div>
    );
  }
}

export default App;
