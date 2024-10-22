import './style1.css'
import React from 'react'
class Join extends React.Component {
    state = {  } 
    render() { 
        return (

            <div className="container py-4 mb-4">
  <div className="p-5 mb-4 bg-body-tertiary rounded-3">
    <div className="row">
      <h1 className="display-1 text-center">Why to join GigSthan ?</h1> <br />{" "}
      <br />
      <div className="container-fluid py-5 col-6">
        <h1 className="display-5 fw-bold">Freelancers</h1>
        <p className="col-md-8 fs-4"></p>
        <ul>
          <li>Build your career and earn by working with global clients.</li>
          <li> Showcase your skills and portfolio to top employers.</li>
          <li> Enjoy secure payments through our escrow system.</li>
        </ul>
        <p />
        <button className="btn btn-danger btn-lg" type="button">
          Create Freelancer Account
        </button>
      </div>
      <div className="container-fluid py-5 col-6">
        <h1 className="display-5 fw-bold">Clients</h1>
        <p className="col-md-8 fs-4"></p>
        <ul>
          <li>Find the right talent for your projects quickly.</li>
          <li>Get quality work with the flexibility you need.</li>
          <li>Manage your projects easily with our intuitive dashboard.</li>
        </ul>
        <p />
        <button className="btn btn-danger btn-lg" type="button">
          Create Client Account
        </button>
      </div>
    </div>
  </div>
</div>

        );
    }
}
 
export default Join;