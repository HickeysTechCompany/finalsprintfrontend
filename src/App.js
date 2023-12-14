import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from "./components/Main";
import Login from "./components/Login";
import Credits from "./components/Credits";
import './styles.css';

function App() {
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
