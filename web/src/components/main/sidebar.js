import React, { Component } from 'react';
import FlatFeatures from './flatFeatures';
import classNames from "classnames";

<<<<<<< HEAD
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

=======
// const style= {
//   marginRight: '1rem', 
//   background: 'EA4336'
// }

class Map extends Component {
  state = { 
    posted: false,
    dogs: false,
    cats: false, 
    furnished: false, 
    nonSmoking: false, 
    accessible: false, 
    parking: false, 
  };

  active = (option) => {
    switch (option) {
      case 'posted':
        this.setState({posted: !this.state.posted })
        break;
      case 'dogs':
        this.setState({dogs: !this.state.dogs })
        break;
      case 'cats':
        this.setState({cats: !this.state.cats })
        break;
      case 'furnished':
        this.setState({furnished: !this.state.furnished })
        break;
      case 'non-smoking':
        this.setState({nonSmoking: !this.state.nonSmoking })
        break;
      case 'accessible':
        this.setState({accessible: !this.state.accessible })
        break;
      case 'parking':
        this.setState({parking: !this.state.parking })
        break;
      default:
        // code block
    }
  }

  render() {
    const style = {
      marginRight: '1rem',
      cursor: 'pointer',
      color: '#EA4336',
    }
    const Activestyle = {
      marginRight: '1rem',
      color: 'blue',
      cursor: 'pointer',
    }
>>>>>>> 4632a4d0b1f155cd4bae51d9095b27a51d9bc6f0
    return ( 

      <div className="Sidebar">
        <div className="Sidebar-title">
          <h4>Flatfinder</h4>
        </div>
        <div className='options'>
<<<<<<< HEAD
          <p  className='icon-color' onclick="toggle_visibility('clock')"> <i style={style} id='clock' className="fas fa-clock icon-color"></i>Posted today</p>
          <p className={this.state.active && 'active'}
      onClick={ () => this.setState({active: !this.state.active}) }><i style={style} className= "fas fa-dog"></i>Dogs</p>
         
            <p><i style={style} className= "fas fa-cat icon-color"></i>Cats</p>
       
          <p><i style={style} className= "fas fa-couch icon-color"></i>Furnished</p>
          <p><i style={style} className= "fas fa-smoking-ban icon-color"></i>No Smoking</p>
          <p><i style={style} className= "fas fa-wheelchair icon-color"></i>Accessible</p>
=======
          <p style={{color: '#616161', fontSize:'13px'}}>Options</p>
          <p onClick={() => this.active('posted')}>
            <i style={this.state.posted ? Activestyle 
              : style}
              className="fas fa-clock"></i>
            Posted today</p>
          <p onClick={() => this.active('dogs')}>
            <i style={this.state.dogs ? Activestyle 
              : style} className= "fas fa-dog"></i>
            Dogs
          </p>

          <p onClick={() => this.active('cats')}>
            <i style={this.state.cats ? Activestyle 
              : style}
              className="fas fa-cat"></i>
            Cats</p>
          <p onClick={() => this.active('furnished')}>
            <i style={this.state.furnished ? Activestyle 
              : style} className= "fas fa-couch"></i>
            Furnished
          </p>
          <p onClick={() => this.active('non-smoking')}>
            <i style={this.state.nonSmoking ? Activestyle 
              : style} className= "fas fa-smoking-ban"></i>
            Non-Smoking
          </p>
          <p onClick={() => this.active('accessible')}>
            <i style={this.state.accessible ? Activestyle 
              : style} className= "fas fa-wheelchair"></i>
              Accessible
            </p>
            <p onClick={() => this.active('parking')}>
            <i style={this.state.parking ? Activestyle 
              : style} className= "fas fa-car"></i>
              Parking
            </p>
>>>>>>> 4632a4d0b1f155cd4bae51d9095b27a51d9bc6f0
          <p style={{color: '#616161', fontSize:'13px'}}>Advanced Options</p>
        </div>
      </div>
     );
  }
}
 
export default Map;