
import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";


const Job_Board = () => {
  // Example job data (can be fetched from an API in a real application)
  const jobData = [
    {
      title: "Frontend Developer",
      category: "Web Development",
      type: "Full-time",
      location: "Remote",
      description: "Looking for an experienced frontend developer proficient in HTML, CSS, and JavaScript."
    },
    {
      title: "UI/UX Designer",
      category: "Design",
      type: "Full-time",
      location: "UK",
      description: "We need a skilled content writer with expertise in SEO and digital marketing."
    },
    {
        title: "Content Writer",
        category: "Writing",
        type: "Part-time",
        location: "India",
        description: "We need a skilled content writer with expertise in SEO and digital marketing."
      }
      ,
    {
        title: "Content Writer",
        category: "Writing",
        type: "Part-time",
        location: "India",
        description: "We need a skilled content writer with expertise in SEO and digital marketing."
      }
      ,
    {
        title: "Content Writer",
        category: "Writing",
        type: "Part-time",
        location: "India",
        description: "We need a skilled content writer with expertise in SEO and digital marketing."
      }
      ,
    {
        title: "Content Writer",
        category: "Writing",
        type: "Part-time",
        location: "India",
        description: "We need a skilled content writer with expertise in SEO and digital marketing."
      }
      ,
    {
        title: "Content Writer",
        category: "Writing",
        type: "Part-time",
        location: "India",
        description: "We need a skilled content writer with expertise in SEO and digital marketing."
      }
      ,
      {
          title: "Content Writer",
          category: "Writing",
          type: "Part-time",
          location: "India",
          description: "We need a skilled content writer with expertise in SEO and digital marketing."
        }
  ];

  // State for jobs, search input, and filters
  const [jobs, setJobs] = useState(jobData);
  const [searchInput, setSearchInput] = useState("");
  const [jobType, setJobType] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  // Function to filter jobs based on user input
  const searchJobs = () => {
    const filteredJobs = jobData.filter((job) => {
      return (
        (job.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          job.description.toLowerCase().includes(searchInput.toLowerCase())) &&
        (jobType === "" || job.type === jobType) &&
        (category === "" || job.category === category) &&
        (location === "" || job.location.toLowerCase() === location.toLowerCase())
      );
    });
    setJobs(filteredJobs);
  };

  return (
    <>
      <header className="bg-primary text-center py-3 mt-4 custom-freelance-head ">
        <h1>Find Freelance Jobs</h1>
      </header>
      <div className="container my-5">

        {/* Search Bar */}
        <div className="row mb-4">
          <div className="col-md-8">
            <input
              type="text"
              className="form-control"
              placeholder="Search for jobs..."
              id="jobSearchInput"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary w-100" onClick={searchJobs}>
              Search
            </button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="row mb-4">
          <div className="col-md-4">
            <label htmlFor="jobTypeFilter" className="form-label">
              Job Type
            </label>
            <select
              id="jobTypeFilter"
              className="form-select"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="">All</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="categoryFilter" className="form-label">
              Category
            </label>
            <select
              id="categoryFilter"
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All</option>
              <option value="web-development">Web Development</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="writing">Writing</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="locationFilter" className="form-label">
              Location
            </label>
            <select
              id="locationFilter"
              className="form-select"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Remote</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
          </div>
        </div>

        <div className="row" id="jobListings">
          {jobs.map((job, index) => (
            <div className="col-md-6" key={index}>
              <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{job.title}</h5>
                  <p className="card-text">
                    <strong>Category:</strong> {job.category}
                  </p>
                  <p className="card-text">
                    <strong>Type:</strong> {job.type}
                  </p>
                  <p className="card-text">
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p className="card-text">{job.description}</p>
                  <a href="#" className="btn btn-primary">Apply Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Job_Board;
