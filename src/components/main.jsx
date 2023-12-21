import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
 
const Main = () => {
  const [airport, setAirport] = useState('');
  const [airportOptions, setAirportOptions] = useState([]);
  const [aircraft, setAircraft] = useState('');
  const [aircraftOptions, setAircraftOptions] = useState([]);
  const [airline, setAirline] = useState('');
  const [airlineOptions, setAirlineOptions] = useState([]);
  const [gates, setGates] = useState('');
  const [gatesOptions, setGatesOptions] = useState([]);
 
 
  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await fetch('http://airportdbdocker-env.eba-r6rauie6.us-east-1.elasticbeanstalk.com/airport');
        if (!response.ok) {
          throw new Error('Failed to fetch Airport');
        }
        const data = await response.json();
        setAirportOptions(data._embedded?.airport || []);
      } catch (error) {
        console.error('Error fetching airport data:', error.message);
      }
    };
 
    fetchAirports();
  }, []);
 
  useEffect(() => {
    const fetchAircraft = async () => {
      try {
        const response = await fetch('http://airportdbdocker-env.eba-r6rauie6.us-east-1.elasticbeanstalk.com/aircraft');
        if (!response.ok) {
          throw new Error('Failed to fetch Airport');
        }
        const data = await response.json();
        setAircraftOptions(data._embedded?.aircraft || []);
      } catch (error) {
        console.error('Error fetching aircraft data:', error.message);
      }
    };
 
    fetchAircraft();
  }, []);
 
  useEffect(() => {
    const fetchAirline = async () => {
      try {
        const response = await fetch('http://airportdbdocker-env.eba-r6rauie6.us-east-1.elasticbeanstalk.com/airline');
        if (!response.ok) {
          throw new Error('Failed to fetch Airline');
        }
        const data = await response.json();
        setAirlineOptions(data._embedded?.airline || []);
      } catch (error) {
        console.error('Error fetching airline data:', error.message);
      }
    };
 
    fetchAirline();
  }, []);
 
  useEffect(() => {
    const fetchGates = async () => {
      try {
        const response = await fetch('http://airportdbdocker-env.eba-r6rauie6.us-east-1.elasticbeanstalk.com/gates');
        if (!response.ok) {
          throw new Error('Failed to fetch Gates');
        }
        const data = await response.json();
        setGatesOptions(data._embedded?.gates || []);
      } catch (error) {
        console.error('Error fetching gates data:', error.message);
      }
    };
 
    fetchGates();
  }, []);
 
 
  return (
    <div className="form-container">
      <div className="form-box">
        <h2>List of Airports</h2>
        <div className="form-group">
          <label htmlFor="airport">Select an Airport:</label>
          <select
            id="airport"
            value={airport}
            onChange={(e) => setAirport(e.target.value)}
            >
             <option value="">Select...</option>
            {airportOptions.map((option, index) => (
            <option key={index} value={option.name}>
            {option.name} - {option.code}
            </option>
            ))}
          </select>
          <label htmlFor="airport">Select an Aircraft Tail Number:</label>
          <select
            id="aircraft"
            value={aircraft}
            onChange={(e) => setAircraft(e.target.value)}
            >
             <option value="">Select...</option>
            {aircraftOptions.map((option, index) => (
            <option key={index} value={option.name}>
            {option.tailNumber}
            </option>
            ))}
          </select>
          <br/>
          <label htmlFor="airport">Select an Airline: </label>
          <select
            id="airline"
            value={airline}
            onChange={(e) => setAirline(e.target.value)}
            >
             <option value="">Select...</option>
            {airlineOptions.map((option, index) => (
            <option key={index} value={option.name}>
            {option.name}
            </option>
            ))}
          </select>
          <br/>
          <label htmlFor="airport">Select a gate: </label>
          <select
            id="gates"
            value={gates}
            onChange={(e) => setGates(e.target.value)}
            >
             <option value="">Select...</option>
            {gatesOptions.map((option, index) => (
            <option key={index} value={option.name}>
            {option.name}
            </option>
            ))}
          </select>
        </div>
        <div className="links">
          <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
};
 
export default Main;