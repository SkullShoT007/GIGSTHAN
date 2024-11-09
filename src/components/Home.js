import { Link } from "react-router-dom";
import "./style1.css"
import React from 'react'
class Home extends React.Component {
    state = {  } 
    render() { 
      
        return (
       <>
     
           {/*main  */}
      <div id="carouselExample" className="carousel slide ">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="container custom-container">
        <div className="custom-div1">
          <h1 className  = "custom-text-color display-5">
            Unlock your  <br/>
            True freelance 
            Potential <br/>
            with GigSthan
          </h1>
        <Link to="/signup"><button className="btn custom-orange-btn mt-4">Get Started</button></Link>  
        </div>
        <div >
          <img
            src="happy.gif"
            alt=""
            height={400}
            width={700}
            className="image-fluid d-block w-100 "
          />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="container custom-container">
        <div>
          <h1 className  = "custom-text-color display-5">
            Unlock your <br />
            freelance potential <br />
            with GigSthan
          </h1>
        <button className="btn custom-orange-btn mt-4">Get Started</button>
        </div>
        <div >
          <img
            src="update.gif"
            alt=""
            height={400}
            width={700}
            className="image-fluid d-block w-100"
          />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="container custom-container">
        <div >
          <h1 className  = "custom-text-color display-5">
          Platform Updates<br />
          & Enhancements
          </h1>
          <button className="btn custom-orange-btn mt-4">Get Updates</button>
        </div>
        <div className="custom-div2">
          <img
            src="set.gif"
            alt=""
            height={400}
            width={700}
            className="image-fluid d-block w-100"
          />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="container custom-container">
        <div >
          <h1 className  = "custom-text-color display-5">
          Find Your Perfect Match<br />
          with AI 
          </h1>
          <button className="btn custom-orange-btn mt-4">Start Matchmaking</button>
        </div>
        <div className="custom-div2">
          <img
            src="robo.gif"
            alt=""
            height={400}
            width={700}
            className="image-fluid d-block w-100"
          />
        </div>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="prev"
  >
    {/*<span class="carousel-control-prev-icon"></span>*/}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={35}
      fill="currentColor"
      className="bi bi-arrow-left-circle custom-margin-left "
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
      />
    </svg>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExample"
    data-bs-slide="next"
  >
    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={35}
      height={35}
      fill="currentColor"
      className="bi bi-arrow-right-circle custom-margin-right"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
      />
    </svg>
    <span className="visually-hidden ">Next</span>
  </button>
</div>

                          
{/* skills */}

  <h1 className="display-0 text-center custom-margin-topskills custom-text-color">
    {" "}
    Trending Skills{" "}
  </h1>
  <div
    id="carouselExampleCaptions"
    className="carousel slide custom-margin-a technical "
    data-bs-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active custom-position">
        <div className="row center">
          <div className="col center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="f2.jpg"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Generative AI Specialists</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn custom-orange-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="f1.jpg"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Front-End Developer</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn custom-orange-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="f3.jpg"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Video Editor</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn custom-orange-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item custom-position">
        <div className="row center">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="f4.jpg"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">UI/UX Designer</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn custom-orange-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="f5.jpg"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">SEO Expert</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn custom-orange-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="f6.jpg"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Game Developer</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn custom-orange-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item custom-position">
        <div className="row center">
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="f7.jpg"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Graphic Designer</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn custom-orange-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="f8.jpeg"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Java Developer</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn custom-orange-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="f9.jpg"
                className="card-img-top"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">Resume Writer</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn custom-orange-btn">
                  Know More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="visually-hidden">Next</span>
    </button>
  </div>

  {/* join */}


            <div className="container py-4 mb-4">
  <div className="p-5 mb-4 bg-body-tertiary rounded-3">
    <div className="row">
      <h1 className="display-0 text-left ">Why to join GigSthaan?</h1> <br />{" "}
      <br />
      <div className="container-fluid py-5 col-6">
        <h1 className="display-5 fw-bold custom-text-color">Freelancers</h1>
        <p className="col-md-8 fs-4"></p>
        <ul>
          <li>Build your career and earn by working with global clients.</li>
          <li> Showcase your skills and portfolio to top employers.</li>
          <li> Enjoy secure payments through our escrow system.</li>
        </ul>
        <p />
       
         <Link to="/freelancer_account"> <button className="btn custom-orange-btn btn-lg" type="button">Create Freelancer Account  </button></Link>
      
      </div>
      <div className="container-fluid py-5 col-6">
        <h1 className="display-5 fw-bold custom-text-color">Clients</h1>
        <p className="col-md-8 fs-4"></p>
        <ul>
          <li>Find the right talent for your projects quickly.</li>
          <li>Get quality work with the flexibility you need.</li>
          <li>Manage your projects easily with our intuitive dashboard.</li>
        </ul>
        <p />
       
        <Link to="/client_account" > <button className="btn custom-orange-btn btn-lg" type="button">Create Client Account</button></Link>
        
      </div>
    </div>
  </div>
</div>

{/* hire */}


            <div className="container py-4">
            <div className="p-5 mb-4 bg-body-cyan rounded-3 ">
              <div className="container-fluid py-5">
                <div className="row">
                  <div className="col-6">
                    <img src="3680684 1.png" alt="" height={400} width={400} />
                  </div>
                  <div className="col-6">
                    <div className="row mb-5">
                      <div className="col">
                        <h1 className="display-4 fw-bold custom-text">
                          HIRE TALENTED FREELANCERS
                        </h1>
                      </div>
                    </div>
                    <div className="row custom-hire">
                      <div className="col-6">
                        <h4>
                          Post a job <br /> and Hire a Pro
                        </h4>
                      </div>
                      <div className="col-6">
                        <img src="5939835 1.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
          <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
          <script src="https://files.bpcontent.cloud/2024/11/08/12/20241108123922-7G77HD46.js"></script>
        </div>
      </div>
    </div>
  </div>
  
</>

       
       

           
        )
  
    }
}
 
export default Home;
