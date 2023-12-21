import React from 'react';
// import AddDataForm from './AddDataForm';

const Admin =() =>{};

// const Admin = () => {
//   const handleAddData = async (formData) => {
//     try {
//       // Make a POST request to your server to add data to the database
//       const response = await fetch('http://localhost:8080/addData', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to add data');
//       }

//       // Handle success, maybe refresh the data on the page
//       console.log('Data added successfully');
//     } catch (error) {
//       console.error('Error adding data:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Page</h2>
//       {/* Other admin page content */}
//       <AddDataForm onAddData={handleAddData} />
//     </div>
//   );
// };

export default Admin;





























// import React, { useState } from "react";
// import axios from "axios"; // Import axios for making HTTP requests
// import { Link } from "react-router-dom";

// const Admin = () => {
//   const [activeEntity, setActiveEntity] = useState("Flight");

//   // State for aircraft form data
//   const [aircraftFormData, setAircraftFormData] = useState({
//     airline_id: "",
//     id: "",
//     tail_number: "",
//     status: "",
//     gates_id:"",
//   });

//   // Function to handle submitting aircraft data
//   const handleAircraftSubmit = () => {
//     console.log("Submit button clicked");
//     const aircraftData = {
//       id: aircraftFormData.id,
//       airline_id: aircraftFormData.airline_id,
//       tail_Number: aircraftFormData.tail_number,
//       gates_id: aircraftFormData.gates_id,
//       status: aircraftFormData.status,
//     };

//     console.log("Aircraft data to be submitted:", aircraftData);
//     putAircraftData(aircraftData);
//   };

//   // Function to make a POST request to add aircraft data
//   const putAircraftData = async (data) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/aircraft",
//         data,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       console.log("Server response:", response);

//       if (response.status === 201) {
//         console.log("Aircraft data added successfully");
//       } else {
//         throw new Error("Failed to add aircraft data");
//       }
//     } catch (error) {
//       console.error("Error adding aircraft data:", error.message);
//     }
//   };

//   return (
//     <div>
//       {/* Your existing code for conditional rendering of aircraft form */}
//       {activeEntity === "Aircraft" && (
//         <div className="h-1/2 w-1/2 items-center pl-5">
//           <div className="mt-6 flex flex-row justify-between">
//             <h1 className="text-4xl text-gray-700">Add Aircraft</h1>
//           </div>
//           <div className="p-5">
//             <div className="flex p-2">
//               <h2 className="w-2/5">Airline Name:</h2>
//               <input
//                 type="text"
//                 id="airline_name"
//                 name="airline_name"
//                 value={aircraftFormData.airline_name}
//                 onChange={(e) =>
//                   setAircraftFormData((prevData) => ({
//                     ...prevData,
//                     airline_name: e.target.value,
//                   }))
//                 }
//               />
//               </div>
//               Add Aircraft
            
//               <button
//                 onClick={() => switchEntity("Passenger")}
//                 style={{
//                   backgroundColor:
//                     activeButton === "Passenger"
//                       ? "rgb(55, 65, 81)"
//                       : "rgba(255, 255, 255, 0.5)",
//                 }}
//                 className="m-2 w-48 rounded border border-black/50 bg-white/50 p-2 text-white"
//               ></button>
//             </div>
//             {/* Add other input fields for number_of_passengers, tail_number, type */}
//             <button onClick={handleAircraftSubmit}>Submit</button>
//           </div>
        
//       )}
//     </div>
//   );
// };


