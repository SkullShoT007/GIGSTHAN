import "./style1.css"
import React from 'react'



class About extends React.Component {
    state = {  } 
    render() { 
      
        return (
       
       <>
  {/*section 1*/}
  {/* About Section */}
  {/* Hero Section */}
  <section className="hero-section text-center text-white py-5">
    <div className="container">
      <h1 className="display-4 fw-bold custom-top">Welcome to Gigsthan</h1>
      <p className="lead">Your Destination for Freelance Success</p>
      <a href="#about" className="btn btn-lg btn-outline-light mt-3">
        Learn More
      </a>
    </div>
  </section>
  {/* About Section */}
  <section id="about" className="about-section py-5">
    <div className="container">
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bold">About Us</h2>
        <p className="text-muted">
          Empowering Freelancers and Businesses in the Indian Marketplace
        </p>
        <hr className="w-50 mx-auto" />
      </div>
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h3 className="fw-bold">Our Mission</h3>
          <p>
            We aim to empower freelancers and businesses by simplifying the
            process of finding and working with top talent. At{" "}
            <strong>Gigsthan</strong>, we foster a freelance ecosystem that
            supports flexibility, transparency, and reliability.
          </p>
          <h3 className="fw-bold mt-4">Why Choose Gigsthan?</h3>
          <div className="row text-center my-4">
            <div className="col-md-6 col-lg-3">
              <div className="feature-box p-4">
                <i className="bi bi-person-circle display-5 text-primary" />
                <h5>Freelancer-Centric</h5>
                <p>
                  Easy-to-navigate job marketplace, portfolio management, and
                  AI-powered recommendations.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="feature-box p-4">
                <i className="bi bi-briefcase display-5 text-success" />
                <h5>Business Solutions</h5>
                <p>
                  Quickly find verified, skilled freelancers with our secure
                  escrow payment system.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="feature-box p-4">
                <i className="bi bi-cpu display-5 text-warning" />
                <h5>AI-Powered Matching</h5>
                <p>
                  Our algorithms connect freelancers with relevant
                  opportunities, enhancing productivity.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="feature-box p-4">
                <i className="bi bi-shield-lock display-5 text-danger" />
                <h5>Secure Payments</h5>
                <p>
                  Payments are protected with our escrow system, promoting trust
                  and accountability.
                </p>
              </div>
            </div>
          </div>
          <h3 className="fw-bold mt-4">Our Story</h3>
          <p>
            <strong>gigsthan</strong> was founded with a passion for addressing
            the challenges of the Indian freelance market. Our platform is
            reliable and perfectly suited for India’s growing gig economy.
          </p>
          <h3 className="fw-bold mt-4">Our Vision</h3>
          <p>
            Our vision is to be India’s most trusted freelancing platform,
            empowering freelancers and businesses with a sustainable and
            inclusive community where everyone can succeed.
          </p>
          <h3 className="fw-bold mt-4">Join Us!</h3>
          <p>
            Whether you're a freelancer or a business seeking talent,{" "}
            <strong>[Platform Name]</strong> is your solution. Join us today and
            be a part of India’s thriving freelance future.
          </p>
          <div className="text-center mt-5">
            <a
              href="mailto:support@platform.com"
              className="btn btn-lg btn-primary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>


  

  {/* Contact Us Modal */}
  <div
    className="modal fade"
    id="contactModal"
    tabIndex={-1}
    aria-labelledby="contactModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="contactModalLabel">
            Contact Us
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Name <span className="required-asterisk">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
                required=""
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">
                Email <span className="required-asterisk">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail"
                placeholder="xyz@gmail.com"
                required=""
              />
            </div>
            <div className="mb-3">
              <label className="form-check-label" htmlFor="exampleCheck1">
                Leave us a few words{" "}
                <span className="required-asterisk">*</span>
              </label>
              <textarea
                name="text_area"
                id="text_area"
                required=""
                className="form-control fixed-textarea"
                defaultValue={""}
              />
            </div>
            <div className="btn-lg">
              <button className="btn btn-danger" type="button">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* Login Modal */}
  <div
    className="modal fade"
    id="loginModal"
    tabIndex={-1}
    aria-labelledby="loginModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="loginModalLabel">
            Login
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Username
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                Must be between 3 and 15 characters.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
 


      
</>

       
       

           
        )
  
    }
}
 
export default About;