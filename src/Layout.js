import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Job_Board from './components/Job_Board';
import Post_job from './components/Post_job';
import Client_account from './components/Client_account';
import Freelancer_account from './components/Freelancer_account';
import SignUp from './components/SignUp';
// import Login from './components/Login';

const Layout = () => {
  const location = useLocation();

  // Check if the current path is "/client_account"
  const isPage = location.pathname === '/client_account'|| location.pathname === '/signup'|| location.pathname === '/freelancer_account';
 

  return (
    <>
      {/* Render Navbar and Footer only if not on the client_account page */}
      {!isPage && <Navbar />}
    

      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} />
        <Route path="/job_posts" element={<Post_job />} />
        <Route path="/find_job" element={<Job_Board />} />
        <Route path="/client_account" element={<Client_account />} />
        <Route path="/freelancer_account" element={<Freelancer_account />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      {!isPage && <Footer />}
    
    </>
  );
};

export default Layout;
