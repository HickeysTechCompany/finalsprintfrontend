//Main page how you search
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Main = () => {
  const [airport, setAirport] =useState('');
  //These options need to be tied to a database
  const [airportOptions, setAirportOptions] = useState([]);

  
  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await fetch('http://localhost:8080/airport');
        if (!response.ok) {
          throw new Error('Failed to fetch Airport');
        }
        const data = await response.json();
        console.log(data);
        setAirportOptions(data._embedded?.airport || []);
      } catch (error) {
        console.error('Error fetching airport data:', error.message);
      }
    };


  fetchAirports();
}, []);
 
  return (
    <div className="form-container">
      <div className="form-box">
        <h2>List of Airports</h2>
        <div className="form-group">
          <label htmlFor="airport">Select an Option:</label>
          <select
            id="airport"
            value={airport.name || ''}
            onChange={(e) => setAirport(e.target.value)}
          >
            <option value="">Select...</option>
            {airportOptions.map((option, index) => (
              <option key={index} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        {airport && (
  <div>
    <p>Name: {airport}</p>
  </div>
)}

        <div className="links">
          <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Main 
