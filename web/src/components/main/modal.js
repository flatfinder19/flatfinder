import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';

class Modal extends Component {
  state = {  }

  handleClickOutside = () => {
     this.props.showModal()
  };
  render() { 
    return ( 
      <div className="Modal">
          <div className="Modal-layout">
            <div className="Modal-box">
              <p className="leave-modal" onClick={() => this.props.showModal()}>x</p>
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
                  <a href="https://www.givememymoney.app/" target="_blank" rel="noopener noreferrer">
                    <button className="Slideshow-viewdeets">View more details</button>
                  </a>
                </div>
              </div>
              <input style={{ display: 'none'}}/>   
            </div>
          </div>
          </div>
     );
  }
}
 
export default onClickOutside(Modal);