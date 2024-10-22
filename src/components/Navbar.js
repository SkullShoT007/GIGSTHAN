import "./style1.css"
import React from 'react'


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
              <a className="navbar-brand custom-text-color" href="#">
                <b>GigSthan</b>
              </a>
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
                    <a
                      className="nav-link active custom-text-color fd"
                      aria-current="page"
                      href="#"
                      style={{ color: "0A365D" }}
                    >
                      <b>Home</b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link custom-text-color fd" href="#">
                      <b>Post a Job</b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link custom-text-color fd" href="#">
                      <b>Find a Job</b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link custom-text-color fd" href="about.html">
                      <b>About</b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link custom-text-color fd" href="#">
                      <b>Contact</b>
                    </a>
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
                    data-bs-target="#exampleModal"
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-outline-light custom-btn-color me-2"
                    type="submit"
                  >
                    SignUp
                  </button>
                </form>
              </div>
            </div>
          </nav>
         
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Login</h5>
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
          </div>
       
       </>

           
        )
  
    }
}
 
export default Navbar;