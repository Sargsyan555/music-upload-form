import React, { useState } from 'react';
import './PlayAllButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';


const PlayAllButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleExpanded = () => {
    
    setIsPlaying(!isPlaying);
    console.log('All songs is playing');
    //Here can will logic which we can use for playing all songs
  };
  const handleDropdownClick = (e) => {
    // Prevent the click event from reaching the button
    e.stopPropagation();
    // Add your logic for the dropdown click here
    console.log('Dropdown clicked');
  };
    return (
        
          <div className="play-all-button">
            <button onClick={toggleExpanded}>
              <div className="button-content">
                  <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                  <span> Play All</span>
              </div>
            </button>
            <div className='separator'></div>
            <button onClick={handleDropdownClick} className="dropdown-arrow" >
                <span >▼</span>
            </button>
          </div>
        
      );  
    };

export default PlayAllButton;
