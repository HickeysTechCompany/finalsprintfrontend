<<<<<<< Updated upstream
import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from "./components/Main";
import Login from './components/Login';
=======


=======
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from "./components/Main";
import Login from "./components/Login";
import Credits from "./components/Credits";
import './styles.css';
import axios from 'axios';
>>>>>>> Stashed changes

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetch('/airports')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  
 


  // useEffect(() => {
  //   axios.get('http://localhost:3000/Main')
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
<<<<<<< Updated upstream
=======
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
              <ul>
            {data.map(item => (
            <li key={item.id}>{item.name}</li>
              ))}
              </ul>
            </div>
            <div className="navbar-logo">
              <img src="/src/nlflag.png" alt="Newfoundland Flag" className="logo-image" />
            </div>
          </div>
          
        </div>
>>>>>>> Stashed changes

    <div className= "Links" >
  <Router>
  <Routes>
  <Route path="/Main" element= {<Main />} />
  <Route path="/Login" element= {<Login />} />
  </Routes>
  </Router>
            </div>

  );
}

export default App;
