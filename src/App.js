

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Main from './components/main'; // Import your main component
import Admin from './Admin';

function App() {
  return (
    <div className="Links">
      <Router>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
