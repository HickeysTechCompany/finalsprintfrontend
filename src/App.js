import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import main from "./components/main";
import { useState } from "react";

function App() {

  return (
    <div className= "Links" >
  <Router>
  <Routes>
  <Route path="/main" element= {<main />} />
  </Routes>
  </Router>
            </div>
  );
}


export default App;
