import React, { useState } from 'react';
import './AddAllButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const AddAllButton = () => {

  const handleDropdownClick = (e) => {
    // Prevent the click event from reaching the button
    e.stopPropagation();
    // Add your logic for the dropdown click here
    console.log('Dropdown clicked');
  };
    return (
        
          <div className="add-all-button">
            <button>
              <div className="button-content">
                  <FontAwesomeIcon icon={faPlus} />
                  <span> Add All</span>
              </div>
            </button>
            <div className='separator'></div>
            <button onClick={handleDropdownClick} className="dropdown-arrow" >
                <span >▼</span>
            </button>
          </div>
        
      );  
    };

export default AddAllButton;
