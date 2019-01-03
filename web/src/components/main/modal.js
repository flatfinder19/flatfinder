import React from 'react';

class Modal extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="Modal">
            <div className="Modal-layout">
              <div className="Modal-box">
                {/* <div className="Slideshow"style={{
                  transform: `translateX(${this.state.translateValue}px)`,
                }}>
                  {this.state.images.map((image, i) => 
                    <img key={i}src={image} style={{ visibility: i === currentIndex ? 'visible': 'hidden' }} className="Slideshow-img" alt="img" />  
                  )}
                </div> */}
                <div className="Slideshow-details">
                  <div className="Slideshow-arrows">
                    <div onClick={() => this.goToPrevSlide()}>
                      <i className="fas fa-arrow-left fa-fw adjust" />
                    </div>
                    <div onClick={() => this.goToNextSlide()}>
                      <i className="fas fa-arrow-right fa-fw opposite" />
                    </div>
                  </div>
                  <div className="SlideShow-title">
                    <p>GiveMeMyMoney</p>
                    <p className="Slideshow-details-sub">Invoice Application</p>
                  </div>
                  <hr className="hr"/>
                  <p className="Slideshow-description">
                    Give Me My Money is a subscription based application that allows 
                    "Admins" to upload invoices, and set automatic email/sms 
                    messages to be sent to their "Client". 
                    The client can click the link in the email/sms and be directed 
                    to a page where they can easily and without barriers make the 
                    required payment to the admin.
                    <br />
                    I was responsible for the client side of the application, determining which styles to use and which
                    layout for our application would work best. I used Redux to handle the applications 
                    state and Sass to manage the applications styling.
                  </p>
                  <div className="Slideshow-view">
                    <a href="https://www.givememymoney.app/" target="_blank" rel="noopener noreferrer">
                      <button className="Slideshow-viewsite">View Site</button>
                    </a>
                    <a href="https://github.com/Lambda-School-Labs/CS8-payme" target="_blank" rel="noopener noreferrer">
                      <button className="Slideshow-viewcode ">View Code</button>
                    </a>
                    <p className="leave-modal" onClick={() => this.props.showModal()}>x</p>
                  </div>
                </div>
                <input style={{ display: 'none'}}/>   
              </div>
            </div>
          </div>
     );
  }
}
 
export default Modal;