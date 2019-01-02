import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <p className="test">Map</p>
        {this.props.data}
      </div>
     );
  }
};

const mapStateToProps = state => {
  return {
    data: state.map.data,
  };
};
 
export default connect(mapStateToProps, null)(Main);