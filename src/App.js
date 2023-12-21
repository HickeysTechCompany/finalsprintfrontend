import PropTypes from "prop-types";
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
 
import Main from "./components/Main";
import Login from "./components/Login";
import Credits from "./components/Credits";
import Admin from "./components/Admin";
import './styles.css';
 
 
 
function App() {
  const [airport, setAirport] = useState([]);
  const [aircraft, setAircraft] = useState([]);
  const [airline, setAirline] = useState([]);
  const [gates, setGates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
 
 
 
  useEffect(() => {
    const fetchAirport = async () => {
      try {
        const response = await fetch(`http://airportdbdocker-env.eba-r6rauie6.us-east-1.elasticbeanstalk.com/airport`);
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
 
  useEffect(() => {
    const fetchAircraft = async () => {
      try {
        const response = await fetch(`http://airportdbdocker-env.eba-r6rauie6.us-east-1.elasticbeanstalk.com/aircraft`);
        if (!response.ok) {
          throw new Error("Failed to fetch Aircraft");
        }
        const data = await response.json();
        console.log(data);
        setAircraft(data._embedded?.aircraft || []);
      } catch (error) {
        console.error("Error fetching aircraft data:", error.message);
      }
    };
 
    fetchAircraft();
  }, []);
 
  useEffect(() => {
    const fetchAirline = async () => {
      try {
        const response = await fetch(`http://airportdbdocker-env.eba-r6rauie6.us-east-1.elasticbeanstalk.com/airline`);
        if (!response.ok) {
          throw new Error("Failed to fetch Airline");
        }
        const data = await response.json();
        console.log(data);
        setAirline(data._embedded?.airline || []);
      } catch (error) {
        console.error("Error fetching airline data:", error.message);
      }
    };
 
    fetchAirline();
  }, []);
 
  useEffect(() => {
    const fetchGates = async () => {
      try {
        const response = await fetch(`http://airportdbdocker-env.eba-r6rauie6.us-east-1.elasticbeanstalk.com/gates`);
        if (!response.ok) {
          throw new Error("Failed to fetch Gates");
        }
        const data = await response.json();
        console.log(data);
        setGates(data._embedded?.gates || []);
      } catch (error) {
        console.error("Error fetching gates data:", error.message);
      }
    };
 
    fetchGates();
  }, []);
 
 
 
 
 
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
              <Link to="/Admin" className="navbar-linke">
                Admin
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
          <Route path="/Admin" element={<Admin />} />
         
        </Routes>
      </Router>
    </div>
  );
}
 
export default App;

