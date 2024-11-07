import "./style1.css"
import React from 'react'



class Post_job extends React.Component {
    state = {  } 
    render() { 
      
        return (
       
       <>
       <>
 
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    /* Custom Styling */\n    body {\n      background-color: #f7f7f7;\n      font-family: 'Arial', sans-serif;\n    }\n    .container {\n      margin-top: 50px;\n    }\n    header h1 {\n      font-size: 2.5rem;\n      font-weight: bold;\n      color: #333;\n    }\n    header p {\n      color: #555;\n      font-size: 1.1rem;\n    }\n    .card {\n      border: none;\n      border-radius: 10px;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    }\n    .card-body {\n      padding: 2rem;\n    }\n    .form-label {\n      font-weight: bold;\n      color: #333;\n    }\n    .form-control, .form-select {\n      border-radius: 5px;\n      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);\n    }\n    .btn-primary {\n      background-color: #007bff;\n      border: none;\n      border-radius: 25px;\n      font-size: 1.1rem;\n      padding: 10px 20px;\n      transition: background-color 0.3s;\n    }\n    .btn-primary:hover {\n      background-color: #0056b3;\n    }\n    .btn-file {\n      background-color: #f1f1f1;\n      border: 1px solid #ccc;\n      border-radius: 5px;\n      padding: 10px 15px;\n      width: 100%;\n      cursor: pointer;\n    }\n    .btn-file:hover {\n      background-color: #e9ecef;\n    }\n    .form-control:focus, .form-select:focus {\n      border-color: #007bff;\n      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n    }\n  "
    }}
  />
  <div className="container mb-5">
    <header className="text-center mb-5">
      <h1>Post a Freelance Job</h1>
      <p>Fill in the details below to post a job for freelancers</p>
    </header>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <form action="#" method="POST" encType="multipart/form-data">
              {/* Job Title */}
              <div className="mb-3">
                <label htmlFor="jobTitle" className="form-label">
                  Job Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="jobTitle"
                  name="jobTitle"
                  placeholder="Enter job title"
                  required=""
                />
              </div>
              {/* Category */}
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  id="category"
                  className="form-select"
                  name="category"
                  required=""
                >
                  <option value="">Select Category</option>
                  <option value="web-development">Web Development</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="writing">Writing</option>
                  <option value="marketing">Marketing</option>
                  <option value="app-development">App Development</option>
                </select>
              </div>
              {/* Job Type */}
              <div className="mb-3">
                <label htmlFor="jobType" className="form-label">
                  Job Type
                </label>
                <select
                  id="jobType"
                  className="form-select"
                  name="jobType"
                  required=""
                >
                  <option value="">Select Job Type</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="temporary">Temporary</option>
                </select>
              </div>
              {/* Location */}
              <div className="mb-3">
                <label htmlFor="location" className="form-label">
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  placeholder="Enter location (e.g., Remote, India, USA)"
                  required=""
                />
              </div>
              {/* Job Description */}
              <div className="mb-3">
                <label htmlFor="jobDescription" className="form-label">
                  Job Description
                </label>
                <textarea
                  className="form-control"
                  id="jobDescription"
                  name="jobDescription"
                  rows={4}
                  placeholder="Describe the job role and requirements"
                  required=""
                  defaultValue={""}
                />
              </div>
              {/* Upload File (Optional) */}
              <div className="mb-3">
                <label htmlFor="jobFile" className="form-label">
                  Upload a File (Optional)
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="jobFile"
                  name="jobFile"
                />
              </div>
              {/* Submit Button */}
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Bootstrap JS and dependencies */}
</>


 


      
</>

       
       

           
        )
  
    }
}
 
export default Post_job;