import React, { useState } from 'react';
const Admin = () => {
  // Define state variables for form inputs
  const [newAirportName, setNewAirportName] = useState('');
  const [newAirportCode, setNewAirportCode] = useState('');

  // Define a function to handle form submission
  const handleAddAirport = async () => {
    try {
      const response = await fetch('http://airportdbdocker-env.eba-r6rauie6.us-east-1.elasticbeanstalk.com/airport', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: newAirportName,
          code: newAirportCode,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Parse error response
        throw new Error(`Failed to add airport data: ${errorData.message}`);
      }
  

      // Reset form inputs after successful submission
      setNewAirportName('');
      setNewAirportCode('');
    } catch (error) {
      console.error('Error adding airport data:', error.message);
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-box">
        <h2>Add Airport Data to Database</h2>
        <div className="form-group">
          <label htmlFor="newAirportName">Airport Name:</label>
          <input
            type="text"
            id="newAirportName"
            value={newAirportName}
            onChange={(e) => setNewAirportName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="newAirportCode">Airport Code:</label>
          <input
            type="text"
            id="newAirportCode"
            value={newAirportCode}
            onChange={(e) => setNewAirportCode(e.target.value)}
          />
        </div>
        <div className="admin-buttons">
          <button onClick={handleAddAirport}>Add Airport</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
