import './style1.css'
import React from 'react'
class Hire extends React.Component {
    state = {  } 
    render() { 
        return (

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
          

        );
    }
}
 
export default Hire;