import "./style1.css"
import React from 'react'
class Main extends React.Component {
    state = {  } 
    render() { 
        return (

      <>
      <div id="carouselExample" className="carousel slide ">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="container custom-container">
        <div className="custom-div1">
          <h1>
            Unlock your <br />
            freelance potential <br />
            with GigSthan
          </h1>
          <button className="btn btn-danger mt-4">Get Started</button>
        </div>
        <div className="custom-div2">
          <img
            src="gigsthan-bg-image.png"
            alt=""
            height={400}
            width={600}
            className="image-fluid d-block w-100 "
          />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="container custom-container">
        <div className="custom-div1">
          <h1>
            Unlock your <br />
            freelance potential <br />
            with GigSthan
          </h1>
          <button className="btn btn-danger mt-4">Get Started</button>
        </div>
        <div className="custom-div2">
          <img
            src="update.gif"
            alt=""
            height={400}
            width={600}
            className="image-fluid d-block w-100"
          />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="container custom-container">
        <div className="custom-div1">
          <h1>
            Unlock your <br />
            freelance potential <br />
            with GigSthan
          </h1>
          <button className="btn btn-danger mt-4">Get Started</button>
        </div>
        <div className="custom-div2">
          <img
            src="set.gif"
            alt=""
            height={400}
            width={600}
            className="image-fluid d-block w-100"
          />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="container custom-container">
        <div className="custom-div1">
          <h1>
            Unlock your <br />
            freelance potential <br />
            with GigSthan
          </h1>
          <button className="btn btn-danger mt-4">Get Started</button>
        </div>
        <div className="custom-div2">
          <img
            src="robo.gif"
            alt=""
            height={400}
            width={600}
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

      </>


        );
    }
}
 
export default Main;