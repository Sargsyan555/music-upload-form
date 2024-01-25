import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

export default function PlayPart() {
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleExpanded = () => {
    
        setIsPlaying(!isPlaying);
        console.log('All songs is playing');
      };
    return (
    <div className='play-part'>                  
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="28"
        viewBox="0 0 24 19"
        fill="black"
        >
        <circle cx="6" cy="6" r="1" fill="black" />
        <circle cx="12" cy="6" r="1" fill="black" />
        <circle cx="18" cy="6" r="1" fill="black" />

        <circle cx="6" cy="18" r="1" fill="black" />
        <circle cx="12" cy="18" r="1" fill="black" />
        <circle cx="18" cy="18" r="1" fill="black" />

        <circle cx="6" cy="12" r="1" fill="black" />
        <circle cx="12" cy="12" r="1" fill="black" />
        <circle cx="18" cy="12" r="1" fill="black" />

        <circle cx="6" cy="0" r="1" fill="black" />
        <circle cx="12" cy="0" r="1" fill="black" />
        <circle cx="18" cy="0" r="1" fill="black" />
        </svg>

    </div>
  )
}
