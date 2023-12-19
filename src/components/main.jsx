//Main page how you search
import React, { useState } from 'react';
import { Link } from "react-router-dom";


const Main = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <h2>List of Airports</h2>

      

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
      </div>
    </div>
  );
};

export default Main;
