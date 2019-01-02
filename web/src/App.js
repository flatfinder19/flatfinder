import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Map from './components/main/map';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path="/" component={Map} />
        </Switch>
      </Router>
    );
  }
}

export default App;
