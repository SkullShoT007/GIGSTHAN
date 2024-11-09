import "./style1.css"
import React from 'react'
import { Link } from 'react-router-dom';


class Freelancer_account extends React.Component {
    state = {  } 
    render() { 
      
        return (
            <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Freelancer Account Creation</title>
  {/* Bootstrap CSS */}
  <link
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    /* General styling for the form */\n    body {\n      background-color: #f3f6f9;\n    }\n    .form-container {\n      max-width: 700px;\n      margin: 50px auto;\n      padding: 30px;\n      background-color: #ffffff;\n      border-radius: 10px;\n      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);\n    }\n    .form-title {\n      text-align: center;\n      font-weight: bold;\n      color: rgb(9, 9, 80);\n      margin-bottom: 20px;\n      font-size: 1.8em;\n    }\n    .form-group label {\n      font-weight: bold;\n      color: #333333;\n    }\n    .btn-primary {\n      background-image: linear-gradient(45deg,rgb(9, 9, 80), rgb(30, 30, 155));\n      border: none;\n      font-size: 1.1em;\n    }\n    .profile-pic-preview {\n      width: 100px;\n      height: 100px;\n      border-radius: 50%;\n      object-fit: cover;\n      display: none; /* Hidden by default, will be shown on image upload */\n    }\n  "
    }}
  />
  <div className="container">
    <div className="form-container">
      <h2 className="form-title">Create Your Freelancer Account</h2>
      <form action="#" method="post" encType="multipart/form-data">
        {/* Personal Information Section */}
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your full name"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            required=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            required=""
          />
        </div>
        {/* Profile Picture Upload Section */}
        <div className="form-group">
          <label htmlFor="profilePicture">Upload Profile Picture</label>
          <input
            type="file"
            className="form-control-file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            onchange="previewProfilePic(event)"
          />
          <div className="mt-3 text-center">
            <img
              id="profilePicPreview"
              className="profile-pic-preview"
              alt="Profile Picture Preview"
            />
          </div>
        </div>
        {/* Skills Section */}
        <div className="form-group">
          <label htmlFor="skills">Skills (comma separated)</label>
          <input
            type="text"
            className="form-control"
            id="skills"
            name="skills"
            placeholder="E.g., Web Development, Graphic Design"
            required=""
          />
        </div>
        {/* Portfolio Section */}
        <div className="form-group">
          <label htmlFor="portfolio">Portfolio Links (comma separated)</label>
          <input
            type="text"
            className="form-control"
            id="portfolio"
            name="portfolio"
            placeholder="E.g., Behance, GitHub, LinkedIn"
          />
        </div>
        {/* Profile Description Section */}
        <div className="form-group">
          <label htmlFor="description">Profile Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows={4}
            placeholder="Describe your experience and skills"
            required=""
            defaultValue={""}
          />
        </div>
        {/* Hourly Rate Section */}
        <div className="form-group">
          <label htmlFor="rate">Hourly Rate (USD)</label>
          <input
            type="number"
            className="form-control"
            id="rate"
            name="rate"
            placeholder="Your hourly rate in USD"
            required=""
          />
        </div>
        {/* Submit Button */}
        <Link to="/">   <button type="submit" className="btn btn-primary btn-block">
          Create Account
        </button></Link>
     
      </form>
    </div>
  </div>
  {/* Bootstrap JS and dependencies */}
  {/* JavaScript for profile picture preview */}
</>

       
    

      


       
       

           
        )
  
    }
}
 
export default Freelancer_account;