import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles.css'; // Import the styles

const Results = () => {
    const [airport, setAiports] = useState('');

    return (
        <div>
          <head>
            <title>Search Results</title>
          </head>
          <body>
            <h1>Search Results</h1>
            <ul>
              {airports.map((data, index) => (
                <li key={index}>
                  <strong>Airport Name:</strong> {data.airport_name}<br />
                  <strong>Airport Code:</strong> {data.code}<br />
    
                  {data.status !== null && data.tail_number !== null ? (
                    <>
                      <strong>Aircraft Status:</strong> {data.status === 1 ? 'Arriving' : 'Departed'}<br />
                      <strong>Tail Number:</strong> {data.tail_number}<br />
    
                      {data.airline_name && <strong>Airline:</strong> {data.airline_name}<br />}
                      {data.gates_name && <strong>Gate Name:</strong> {data.gates_name}<br />}
                    </>
                  ) : (
                    'There is missing data sadge'
                  )}
                  <hr />
                </li>
              ))}
            </ul>
          </body>
        </div>
      );
    };
    
    export default Results;