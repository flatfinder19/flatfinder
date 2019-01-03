import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

class Navigation extends Component {
  state = {}
  render () {
    return (
      <div className='Results'>
        <div className='Navigation'>
          <div className="Navigation-box">
            <p className="Navlogo">Flatfinder</p>
          </div>
        </div>
        <div style={{marginLeft: '2rem', fontSize: '1.8rem'}}>
          <Link to="/"><p><i className="fas fa-arrow-left update fa-fw" />Back to Dashboard</p></Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Navigation);