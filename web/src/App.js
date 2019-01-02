import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthProvider, { AuthContext } from "./contexts/AuthProvider";

import Map from './components/main/main';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <AuthProvider>
          <AuthContext.Consumer>
            {context => (
          <Route path="/" component={Map} />
            )}
          </AuthContext.Consumer>
        </AuthProvider>
      </div>
    );
  }
}

export default App;
