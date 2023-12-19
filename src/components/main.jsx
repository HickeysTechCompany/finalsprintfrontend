//Main page how you search
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Main = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
<<<<<<< Updated upstream
      <h2>List of Airports</h2>

      {/* Select (Dropdown) Option Box 1 */}
      <label htmlFor="selectOption1">Select an Option:</label>
      <select
        id="selectOption1"
        value={selectedOption1}
        onChange={(e) => setSelectedOption1(e.target.value)}
      >
        <option value="">Select...</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Display selected option 1 */}
      {selectedOption1 && <p>Selected Option 1: {selectedOption1}</p>}

      {/* Select (Dropdown) Option Box 2 */}
      <label htmlFor="selectOption2">Select an Option:</label>
      <select
        id="selectOption2"
        value={selectedOption2}
        onChange={(e) => setSelectedOption2(e.target.value)}
      >
        <option value="">Select...</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {/* Display selected option 2 */}
      {selectedOption2 && <p>Selected Option 2: {selectedOption2}</p>}

      <div className="links">
        <Link to="/login">Sign In</Link>
        

=======
      <head>
        <title>Search Airports</title>
      </head>
      <body>
        <h1>Search Airports</h1>
        <form action="/Main" method="GET">
          <label htmlFor="airportName">Enter Airport Name:</label>
          <input type="text" id="airportName" name="name" placeholder="Type airport name..." />
          <button type="submit">Search</button>
        </form>
      </body>
      <div></div>

      <div className="links">
        <Link to="/login">Sign In</Link>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};

export default Main;
