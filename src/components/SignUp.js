import "./style1.css"
import React from 'react'
import { Link } from 'react-router-dom';
class SignUp extends React.Component {
    state = {  } 
    render() { 
      
        return (
       
       <>



  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sign Up / Sign In</title>
  <link
    rel="stylesheet"
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            font-family: Arial, sans-serif;\n            margin: 0;\n            padding: 0;\n        }\n        \n        .container-fluid {\n            display: flex;\n            padding: 0;\n        }\n        \n        /* Left Section Styling with Background Image */\n        .left-section {\n            background-image: url(\"bg111.avif\"); /* Add your image URL here */\n            background-size: cover;\n            background-position: center;\n            color: white;\n            width: 50%;\n            text-align: center;\n            padding: 4rem;\n            height: 100vh; /* Ensure it takes the full viewport height */\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n        }\n\n        .left-section h2 {\n            font-size: 2rem;\n            font-weight: bold;\n        }\n\n        .left-section p {\n            font-size: 1.1rem;\n            margin-top: 10px;\n        }\n\n        /* Right Section Styling */\n        .right-section {\n            width: 50%;\n            padding: 3rem;\n            background: linear-gradient(to bottom right, #ffffff, #f0f2f5);\n            text-align: center;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            box-shadow: -3px 0 10px rgba(0, 0, 0, 0.2);\n            border-radius: 10px;\n            transition: transform 0.3s ease, box-shadow 0.3s ease;\n        }\n\n    \n\n        .right-section h2 {\n            font-size: 2.5rem;\n            font-weight: 600;\n            color: #333;\n            margin-bottom: 2rem;\n            letter-spacing: 1px;\n            text-transform: uppercase;\n            font-family: 'Arial', sans-serif;\n        }\n\n        .form-group {\n            width: 100%;\n            margin-bottom: 1.5rem;\n        }\n\n        .input-group {\n            margin-bottom: 1.5rem;\n        }\n\n        .input-group-text {\n            background-color: #e9ecef;\n            border: 1px solid #ccc;\n            border-radius: 5px;\n            padding: 0.75rem;\n        }\n\n        .form-control {\n            border: 1px solid #ccc;\n            border-radius: 5px;\n            padding: 0.75rem;\n            font-size: 1rem;\n            transition: box-shadow 0.3s ease, border-color 0.3s ease;\n        }\n\n        .form-control:focus {\n            box-shadow: 0px 0px 8px rgba(0, 123, 255, 0.4);\n            border-color: #007bff;\n        }\n\n        .btn-primary {\n            background: linear-gradient(45deg, #007bff, #0056b3);\n            border: none;\n            color: white;\n            padding: 1rem 2rem;\n            border-radius: 25px;\n            font-size: 1.2rem;\n            font-weight: bold;\n            transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;\n            box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);\n        }\n\n        .btn-primary:hover {\n            background: linear-gradient(45deg, #0056b3, #003a75);\n            transform: scale(1.05);\n            box-shadow: 0 8px 20px rgba(0, 123, 255, 0.4);\n        }\n\n        .social-icons {\n            margin-top: 1.5rem;\n            display: flex;\n            justify-content: center;\n            gap: 20px;\n        }\n\n        .social-icons a {\n            color: #333;\n            font-size: 1.75rem;\n            transition: color 0.3s, transform 0.2s ease;\n        }\n\n        .social-icons a:hover {\n            color: #007bff;\n            transform: scale(1.25);\n        }\n\n        .divider {\n            width: 80%;\n            margin: 2rem auto;\n            height: 1px;\n            background-color: #ddd;\n        }\n\n        @media (max-width: 768px) {\n            .container-fluid {\n                flex-direction: column;\n            }\n\n            .left-section, .right-section {\n                width: 100%;\n                padding: 2rem;\n            }\n\n            .right-section h2 {\n                font-size: 2rem;\n            }\n\n            .form-control {\n                font-size: 0.9rem;\n            }\n\n            .btn-primary {\n                font-size: 1rem;\n                padding: 0.8rem 1.5rem;\n            }\n\n            .social-icons a {\n                font-size: 1.5rem;\n            }\n        }\n    "
    }}
  />
  <div className="container-fluid vh-100 d-flex p-0">
    {/* Left Section */}
    <div className="left-section d-flex flex-column justify-content-center align-items-center text-white">
      <h2>New here?</h2>
      <p>
        Join today and start connecting, learning, and growing in various fields
        with Gigsthan
      </p>
    </div>
    {/* Right Section */}
    <div className="right-section d-flex flex-column justify-content-center align-items-center">
      <h2>Sign Up</h2>
      <div className="divider" />
      <form className="form-group w-75 mt-3">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-user" />
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Username" />
        </div>
        <div className="input-group mb-4">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fas fa-lock" />
            </span>
          </div>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <Link to="/"> <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button></Link>
       
      </form>
      <p className="text-center">Or Sign Up with social platforms</p>
      <div className="social-icons">
        <a href="#">
          <i className="fab fa-facebook" />
        </a>
        <a href="#">
          <i className="fab fa-twitter" />
        </a>
        <a href="#">
          <i className="fab fa-google" />
        </a>
        <a href="#">
          <i className="fab fa-linkedin" />
        </a>
      </div>
    </div>
  </div>
</>

 



      


       
       

           
     )
  
    }
}
 
export default SignUp;