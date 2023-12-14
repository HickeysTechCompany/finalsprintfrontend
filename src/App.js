import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Main from "./components/Main";
import { useState } from "react";

function App() {

  return (
    <div className= "Links" >
  <Router>
  <Routes>
  <Route path="/Main" element= {<Main />} />
  </Routes>
  </Router>
            </div>
  );
}


export default App;
