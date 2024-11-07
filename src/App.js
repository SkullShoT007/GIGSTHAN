import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from './components/About';
import Footer from "./components/Footer";
import Job_Board from './components/Job_Board';
import Post_job from './components/Post_job';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />  {/* Use `element` prop */}
          <Route path="/about" element={<About />} />
        
          {<Route path="/job_posts" element={<Post_job />} />}
          <Route path="/find_job" element={<Job_Board/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
