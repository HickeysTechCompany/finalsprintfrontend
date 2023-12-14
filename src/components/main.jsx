//Main page how you search
import React, { useState} from 'react';


const Main = () => {
    const [selectedOption, setSelectedOption] =useState('')
    const options = ['Toronto Airport','Montreal Airport', "St. John's Aiport"];
   ///
    return (
        <div>
          <h2>List of Airports</h2>
    
          {/* Select (Dropdown) Option Box */}
          <label htmlFor="selectOption">Select an Option:</label>
          <select
            id="selectOption"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">Select...</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
    
          {/* Display selected option */}
          {selectedOption && <p>Selected Option: {selectedOption}</p>}
          <h2>List of Airports</h2>
    
          {/* Select (Dropdown) Option Box */}
          <label htmlFor="selectOption">Select an Option:</label>
          <select
            id="selectOption"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">Select...</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
    
          {/* Display selected option */}
          {selectedOption && <p>Selected Option: {selectedOption}</p>}
        </div>
      );
    };
    
    export default Main;
    ///
    
    
    
    
    
    
    
//     return(
//     <div>
//         <div className="main_header">
//             <h1> Search Airport</h1>
//         </div>
//         <div className="main_header1">
//             <h1>Search Airport</h1>
//         </div>
        
        
//         </div>
        
//     );
// };


//<h2> className="searchAirport2"Search Airport</h2>