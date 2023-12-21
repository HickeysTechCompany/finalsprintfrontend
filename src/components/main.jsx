//Main page how you search
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Main = () => {
  const [airport, setAirport] =useState('');
  const [aircraft, setAircraft] =useState('');
  const [airline, setAirline] =useState('');
  const [gates, setGates] =useState('');
  //These options need to be tied to a database
  const [airportOptions, setAirportOptions] = useState([]);
  
  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await fetch('http://airportdbdocker-env.eba-r6rauie6.us-east-1.elasticbeanstalk.com/airport');
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
// useEffect(() => {
//   const fetchAircraft = async () => {
//     try {
//       const response = await fetch('http://localhost:8080/aircraft');
//       if (!response.ok) {
//         throw new Error('Failed to fetch Aircraft');
//       }
//       const data = await response.json();
//       console.log(data);
//       setAirportOptions(data._embedded?.aircraft || []);
//     } catch (error) {
//       console.error('Error fetching aircraft data:', error.message);
//     }
//   };
// fetchAircraft();
// }, []);
 


return (
  <div className="form-container">
    <div className="form-box">
      <h2>List of Airports</h2>
      <div className="form-group">
        <label htmlFor="airport">Select an Option:</label>
        <select
          id="airport"
          value={aircraft.name || ''}
          onChange={(e) => setAirport(e.target.value)}
        >
          <option value="">Select...</option>
          {airportOptions.map((option, index) => (
            // This changes what displayed
            <option key={index} value={option.names}>
              {/* This displays what is under  */}
              {option.name}
            </option>
          ))}
        </select>
      </div>
      {airport && (
        <div>
          <p>Name: {airport}</p>
          <p>Aircraft: {}</p>
          
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
