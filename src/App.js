import logo from './logo.svg';
import { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from "./components/Main";
import Login from './components/Login';

function App() {

  return (
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
