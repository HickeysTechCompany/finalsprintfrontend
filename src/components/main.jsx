//Main page how you search
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Main = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  //These options need to be tied to a database
  const options = ['Toronto Airport', 'Montreal Airport', "St. John's Aiport"];

  return (
    <div>
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
        

      </div>
    </div>
  );
};

export default Main;