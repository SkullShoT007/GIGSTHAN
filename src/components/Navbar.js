import "./style1.css"
import React from 'react'
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    state = {  } 
    render() { 
      
        return (
       <>
        <nav
            className="navbar navbar-expand-lg fixed-top "
            style={{ backgroundColor: "#e3f2fd" }}
          >
            <div className="container-fluid">
              <Link className="navbar-brand custom-text-color" to="/">
                <b>GigSthan</b>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active custom-text-color nav_hover"
                      aria-current="page"
                      to="/"
                      style={{ color: "0A365D" }}
                    >
                      <b>Home</b>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link custom-text-color nav_hover" to="/job_posts">
                      <b>Post a Job</b>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link custom-text-color nav_hover" to="/find_job">
                      <b>Find a Job</b>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link custom-text-color nav_hover" to="/about">
                      <b>About</b>
                    </Link>
                  </li>


    
                  <li class="nav-item">
            <a class="nav-link custom-text-color nav_hover" type="button" data-bs-toggle="modal"
            data-bs-target="#contactModal"><b>Contact Us</b></a>
          </li>

                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search Text"
                    aria-label="Search"
                  />
                  <button className="btn btn-danger me-2" type="submit">
                    Search
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light custom-btn-color me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Login
                  </button>
                  <Link to="/signup">  <button
                    className="btn btn-outline-light custom-btn-color me-2"
                    type="submit"
                  >
                    SignUp
                  </button></Link>
                
                </form>
              </div>
            </div>
          </nav>
     
           
                       
                      
          
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
            <div className="form-footer custom-align">
      <p className="mt-3">Don’t have an account? <a href="#">Sign up</a></p>
      <p><a href="#">Forgot password?</a></p>
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
 
export default Navbar;