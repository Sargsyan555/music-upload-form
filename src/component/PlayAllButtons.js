import React, { useState } from 'react';
import '../style/PlayAllButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { playAllSong } from '../redux/action';


const PlayAllButton = () => {
  const songs = useSelector((state) => state.songs.songs);
  const dispatch = useDispatch();
  const whichIsPlay = useSelector((state) => state.whichIsPlay); //

  const handlePlay = () => {
    dispatch(playAllSong(whichIsPlay)); 
    //here the action is done so that when the user clicks play all all the songs are played
  };
  const handleDropdownClick = (e) => {
    // Prevent the click event from reaching the button
    e.stopPropagation();
    // We can add logic for the dropdown click here
    console.log('Dropdown clicked');
  };
    return (
        
          <div className="play-all-button">
            <button onClick={handlePlay}>
              <div className="button-content">
                  <FontAwesomeIcon icon={whichIsPlay === 'play_all' ?  faPause: faPlay } />
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
