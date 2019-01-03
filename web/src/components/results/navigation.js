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
        <div className="Results-main">
          <div className="Results-box">
            {/* <div className="Slideshow"style={{
              transform: `translateX(${this.state.translateValue}px)`,
            }}>
              {this.state.images.map((image, i) => 
                <img key={i}src={image} style={{ visibility: i === currentIndex ? 'visible': 'hidden' }} className="Slideshow-img" alt="img" />  
              )}
            </div> */}
            <div className="Slideshow-details">
              {/* <div className="Slideshow-arrows">
                <div onClick={() => this.goToPrevSlide()}>
                  <i className="fas fa-arrow-left fa-fw adjust" />
                </div>
                <div onClick={() => this.goToNextSlide()}>
                  <i className="fas fa-arrow-right fa-fw opposite" />
                </div>
              </div> */}
              <div className="SlideShow-title">
                <p>Address of location goes here</p>
                <p className="Slideshow-details-sub">subtle detail goes here</p>
              </div>
              <hr className="hr"/>
              <p className="Slideshow-description">
                
              </p>
              <div className="Slideshow-view">
                <button className="Slideshow-viewdeets">View more details</button>
              </div>
            </div>
            <input style={{ display: 'none'}}/>   
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Navigation);