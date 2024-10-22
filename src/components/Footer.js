import './style1.css'
import React from 'react'
class Footer extends React.Component {
    state = {  } 
    render() { 
        return (

            <div className="container-fluid custom-bg-footer ">
            <footer className="py-3 px-3 ">
              <div className="row">
                <div className="col-6 col-md-2 mb-3">
                  <h5>Company</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2 ">
                      <a href="#" className="nav-link p-0 custom-text-color-footer">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 custom-text-color-footer">
                        Careers
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 custom-text-color-footer">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 custom-text-color-footer">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-2 mb-3">
                  <h5>For Freelancers</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 custom-text-color-footer">
                        How it Works
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 custom-text-color-footer">
                        Find Jobs
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 custom-text-color-footer">
                        Skill Assessments
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 custom-text-color-footer">
                        Freelancers' Forum
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-2 mb-3">
                  <h5>For Clients</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 custom-text-color-footer">
                        How to Hire
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 custom-text-color-footer">
                        Post a Job
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 custom-text-color-footer">
                        Client Reviews
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 custom-text-color-footer">
                        Tips for Clients
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-5 offset-md-1 mb-3">
                  <form>
                    <h6>Stay Updated !!</h6>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of what's new and exciting from us.</p>
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                      <label htmlFor="newsletter1" className="visually-hidden">
                        Email address
                      </label>
                      <input
                        id="newsletter1"
                        type="text"
                        className="form-control"
                        placeholder="Email address"
                      />
                      <button className="btn btn-primary" type="button">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>© 2024 GigSthan, Inc. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                  <li className="ms-3">
                    <a className="link-body-emphasis" href="#">
                      <svg className="bi" width={24} height={24}>
                        <use xlinkHref="#twitter" />
                      </svg>
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-body-emphasis" href="#">
                      <svg className="bi" width={24} height={24}>
                        <use xlinkHref="#instagram" />
                      </svg>
                    </a>
                  </li>
                  <li className="ms-3">
                    <a className="link-body-emphasis" href="#">
                      <svg className="bi" width={24} height={24}>
                        <use xlinkHref="#facebook" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
          

        );
    }
}
 
export default Footer;
