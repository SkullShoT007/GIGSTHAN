import './style1.css'
import React from 'react'
class Skills extends React.Component {
    state = {  } 
    render() { 
        return (

            <>
  <h1 className="display-1 text-center custom-margin-topskills">
    {" "}
    Trending Skills{" "}
  </h1>
  <div
    id="carouselExampleCaptions"
    className="carousel slide custom-margin-a "
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
                <a href="#" className="btn btn-primary">
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
                <a href="#" className="btn btn-primary">
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
                <a href="#" className="btn btn-primary">
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
                <a href="#" className="btn btn-primary">
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
                <a href="#" className="btn btn-primary">
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
                <a href="#" className="btn btn-primary">
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
                <a href="#" className="btn btn-primary">
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
                <a href="#" className="btn btn-primary">
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
                <a href="#" className="btn btn-primary">
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
</>

        );
    }
}
 
export default Skills;