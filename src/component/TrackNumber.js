import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './TrackNumbers.css'
export default function TrackNumber() {
  
    const handleDropdownClick = (e) => {
        // Prevent the click event from reaching the button
        e.stopPropagation();
        // Add your logic for the dropdown click here
        console.log('Dropdown clicked');
      };
    return (
      <div className="track-numbers">
        <button>
          <div className="button-content">
            <FontAwesomeIcon icon={faArrowDown} />
            <FontAwesomeIcon icon={faArrowUp} />
                <span> Track Numbers</span>
          </div>
        </button>
        <button onClick={handleDropdownClick} className="dropdown-arrow" >
            <span >▼</span>
        </button>
        </div>        
    );  
}
