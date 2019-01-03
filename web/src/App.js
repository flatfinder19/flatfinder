import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthProvider, { AuthContext } from "./contexts/AuthProvider";

import Map from "./components/main/main";
import Login from "./components/auth/login";

class App extends Component {
  render() {
    return (
      <div className="App ">
        <AuthProvider>
          <AuthContext.Consumer>
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
                <Route exact path="/" component={Map} />
              </React.Fragment>
            )}
          </AuthContext.Consumer>
        </AuthProvider>
      </div>
    );
  }
}

export default App;
