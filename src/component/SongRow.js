import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPause } from '@fortawesome/free-solid-svg-icons';
import { FaHeart, FaCheck , FaSortDown ,FaArrowRight  } from 'react-icons/fa';

import PlayPart from './PlayPart'
export default function SongRow({song}) {
  return (
    <tr className='song-row'>
            <td><PlayPart /></td>
            <td>{song.songName}</td>
            <td>{song.artistName}</td>
            <td>{song.trackNumber}</td>
            <td className='icons'><FaHeart /> <FaCheck /><FaSortDown /><FaArrowRight /></td>

            {/* Additional header columns can be added here */}
    </tr>
  )
}
