// Credits.jsx
import React from 'react';

const Credits = () => {
  return (
    <div className="main-container">
      <div className="box"> {/* Apply the box class directly here */}
        <h2>Credits</h2>
        <p>This Project Was Completed by Brandon, Cole, Jayden, and Taylor!</p>
        <p>Brandon:</p>
        <p>Cole: Was in Charge of AWS operations, moving the Database to RDS, putting our backend in a Docker Container to launch to the Elastic Beanstalk, and deploying our frontend to S3 instance!</p>
        <p>Jayden</p>
        <p>Taylor</p>
      </div>
    </div>
  );
};

export default Credits;

