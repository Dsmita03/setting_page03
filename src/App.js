import React, { useState } from 'react'; // Import React and useState

import 'C:/Users/Debasmita/rough/src/App.css'; // Import your CSS file
import 'C:/Users/Debasmita/rough/src/components/Theme.js';// Import your Theme file
import  'C:/Users/Debasmita/rough/src/components/AllowAccess.js';//import your Alow Acess file
import  ' C:/Users/Debasmita/rough/src/components/HideAscalculator.js';// Import your hide as calculator file
import ' C:/Users/Debasmita/rough/src/components/CheckUpdate.js'; // Import your Checkupdate file
import  'C:/Users/Debasmita/rough/src/components/About.js'; //Import Your About file
import Theme from 'C:/Users/Debasmita/rough/src/components/Theme.js';
import AllowAccess from 'C:/Users/Debasmita/rough/src/components/AllowAccess.js';
import About from 'C:/Users/Debasmita/rough/src/components/About.js';
import CheckUpdate from './components/CheckUpdate';
import HideAsCalculator from './components/HideAscalculator';
 

function App() {
  const options = [
    // ... (your options data remains unchanged)
  ]; 

  const [visibleOptions, setVisibleOptions] = useState(options);

  const onChange = (e) => {
    e.preventDefault();
    const value = e.target.value.toLowerCase(); // Convert the input value to lowercase for case-insensitive search

    if (value.trim().length === 0) {
      setVisibleOptions(options); // Reset visibleOptions to the original options when the search input is empty
      return; // Exit the function early
    }

    const returnedItems = options.map((option) => {
      const filteredValues = option.values.filter((item) => {
        // Perform a case-insensitive search in both name and description
        return (
          item.name.toLowerCase().includes(value) ||
          item.description.toLowerCase().includes(value)
        );
      });

      return {
        header: {
          name: option.header.name,
        },
        values: filteredValues,
      };
    });

    setVisibleOptions(returnedItems);
  };

  return (
    <div className="App">
      <div className="container my-5">
        <h1>
          <span>
            <button className="btn-btn-secondary">
              {""}
              <span>&lt;</span>Back{""}
            </button>{""}
            Settings and Privacy
          </span>
        </h1>

        <input
          type="text"
          className="form-control mt-5"
          onChange={onChange}
          placeholder="Search..."
        />

        <div>
          {visibleOptions.map((option) => (
            <div key={option.header.name} className="mt-5 mt-2">
              <h3>{option.header.name}</h3>

              <div>
                {option.values.map((value) => (
                  <ul className="list-group" key={value.name}>
                    <li className="list-group-item mb-2">
                      <h6>{value.name}</h6>
                      <p>{value.description}</p>
                    </li>
                  </ul>
                ))}
                <Theme />
                <AllowAccess/>
                 <HideAsCalculator />
                <CheckUpdate/>
                <About/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
 

export default App;
