import PropTypes from "prop-types";
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Main from "./components/Main";
import Login from "./components/Login";
import Credits from "./components/Credits";
import Results from './components/Results';
import './styles.css';



function App() {
  const [airport, setAirport] = useState([]);
  const [aircraft, setAircraft] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
 
  
  
  useEffect(() => {
    const fetchAirport = async () => {
      try {
        const response = await fetch(`http://localhost:8080/airport`);
        if (!response.ok) {
          throw new Error("Failed to fetch Airport");
        }
        const data = await response.json();
        console.log(data);
        setAirport(data._embedded?.airport || []);
      } catch (error) {
        console.error("Error fetching airport data:", error.message);
      }
    };

    fetchAirport();
  }, []);
 
  // useEffect(() => {
  //   // Fetch airports data from the server when the component mounts
  //   fetch('http://localhost:8080/airport')
  //     .then(response => response.json())
  //     .then(data => setAirport(data))
  //     .catch(error => console.error('Error fetching airports data:', error));
  // }, []);
 
  // useEffect(() => {
  //   // Fetch airports data from the server when the component mounts
  //   fetch('http://localhost:8080/aircraft')
  //     .then(response => response.json())
  //     .then(data => setAircraft(data))
  //     .catch(error => console.error('Error fetching aircrafts data:', error));
  // }, []);
 



  return (
    <div>
      <Router>
        <div className="navbar">
          <div className="navbar-container">
            <div className="navbar-links">
              <Link to="/Main" className="navbar-link">
                Main
              </Link>
              <Link to="/Login" className="navbar-link">
                Login
              </Link>
              <Link to="/Credits" className="navbar-link">
                Credits
              </Link>
              <Link to="/Results" className="navbar-link">
                Results
                </Link>           
                 </div>
            <div className="navbar-logo">
              <img src="/src/nlflag.png" alt="Newfoundland Flag" className="logo-image" />
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/Main" element={<Main />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Credits" element={<Credits />} />
          <Route path="/Results" element={<Results />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
