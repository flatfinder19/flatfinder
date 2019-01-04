import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export default ComposedComponent => {
  class RequireAuthentication extends Component {
    componentDidMount() {
      // console.log(this.props);
      // const token = localStorage.getItem('token');
      // if (token) {
      //   this.props.history.push('/');
      // }
    }

    render() {
      return <ComposedComponent { ...this.props}
      />;
    }
  }

  return withRouter(RequireAuthentication);
};