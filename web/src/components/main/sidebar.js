import React, { Component } from 'react';
import FlatFeatures from './flatFeatures';
import classNames from "classnames";

const style= {
  marginRight: '1rem',
  background: 'EA4336'
 }

class Map extends Component {
//   constructor(props) {
//     super(props);
//     this.addActiveClass= this.addActiveClass.bind(this);
//     this.state = {
//         active: false,
//     };
// }
// toggleClass() {
//     const currentState = this.state.active;
//     this.setState({ active: !currentState });
// };
// state = {cats: false}
//   change () => {
//     switch(case):
//     // cats-change the state of cat true
//     // we change the color of cats 
//   }
  state = {}
  render() { 
    function toggle_visibility(id) {
      let e = document.getElementById(id);
      console.log(e)
      if (e.color== '#EA4336' || e.style.color=='') e.style.color = 'green';
      else e.style.display = '#EA4336';
    }
    
    let style;

    return ( 

      <div className="Sidebar">
        <div className="Sidebar-title">
          <h4>Flatfinder</h4>
        </div>
        <div className='options'>
          <p  className='icon-color' onclick="toggle_visibility('clock')"> <i style={style} id='clock' className="fas fa-clock icon-color"></i>Posted today</p>
          <p className={this.state.active && 'active'}
      onClick={ () => this.setState({active: !this.state.active}) }><i style={style} className= "fas fa-dog"></i>Dogs</p>
         
            <p><i style={style} className= "fas fa-cat icon-color"></i>Cats</p>
       
          <p><i style={style} className= "fas fa-couch icon-color"></i>Furnished</p>
          <p><i style={style} className= "fas fa-smoking-ban icon-color"></i>No Smoking</p>
          <p><i style={style} className= "fas fa-wheelchair icon-color"></i>Accessible</p>
          <p style={{color: '#616161', fontSize:'13px'}}>Advanced Options</p>
        </div>
      </div>
     );
  }
}
 
export default Map;