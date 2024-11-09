import "./style1.css"
import React from 'react'
import { Link } from 'react-router-dom';


class Client_account extends React.Component {
    state = {  } 
    render() { 
      
        return (
       
       <>
 

  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Client Account Creation</title>
  {/* Bootstrap CSS */}
  <link
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    rel="stylesheet"
  />
  {/* Font Awesome for icons */}
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    /* Background styling */\n    .body {\n      background: url('https://source.unsplash.com/1600x900/?technology,AI') no-repeat center center fixed;\n      background-size: cover;\n      color: #343a40;\n    }\n    /* Form container styling */\n    .form-container {\n      max-width: 500px;\n      margin: 50px auto;\n      padding: 30px;\n      background-color: rgba(255, 255, 255, 0.9);\n      border-radius: 12px;\n      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);\n      animation: fadeIn 1s ease-in-out;\n    }\n    /* Title styling */\n    .form-title {\n      text-align: center;\n      font-weight: bold;\n      color: #007bff;\n      font-size: 1.8em;\n      margin-bottom: 20px;\n    }\n    /* Animation */\n    @keyframes fadeIn {\n      from { opacity: 0; transform: translateY(-10px); }\n      to { opacity: 1; transform: translateY(0); }\n    }\n    /* Input fields and button */\n    .form-group input {\n      border-radius: 5px;\n    }\n    .btn-primary1 {\n      border-radius: 20px;\n      padding: 10px;\n      font-weight: bold;\n      font-size: 1.1em;\n      background-image: linear-gradient(45deg, #007bff, #00d4ff);\n      border: none;\n      transition: transform 0.3s ease;\n    }\n    .btn-primary:hover {\n      transform: scale(1.05);\n    }\n    /* Icon styling */\n    .icon {\n      display: flex;\n      justify-content: center;\n      margin-bottom: 15px;\n    }\n    .icon i {\n      font-size: 50px;\n      color: #007bff;\n    }\n  "
    }}
  />
  <div className="container">
    <div className="form-container">
      {/* Decorative Icon */}
      <div className="icon">
        <i className="fas fa-user-plus" />
      </div>
      <h2 className="form-title">Create Your Account</h2>
      <form action="#" method="post">
        {/* Name Field */}
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
        {/* Email Field */}
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
        {/* Phone Field */}
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
        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Create a password"
            required=""
          />
        </div>
        {/* Submit Button */}
        <Link to="/">  <button type="submit" className="btn btn-primary1 btn-block text-white">
          Create Account
        </button></Link>
      
      </form>
    </div>
  </div>
  {/* Bootstrap JS and dependencies */}
</>


      


       
       

           
        )
  
    }
}
 
export default Client_account;