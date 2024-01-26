import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { FaHeart, FaCheck , FaSortDown ,FaArrowRight  } from 'react-icons/fa';
import { useSelector, useDispatch} from 'react-redux';
import {playSong} from '../redux/action';

export default function SongRow({song}) {
  const dispatch = useDispatch();

  const whichIsPlay = useSelector((state) => state.whichIsPlay); //
  console.log(whichIsPlay)

  let isPlay = song.trackNumber === whichIsPlay || whichIsPlay === 'play_all' ? true : false
  
  const playCurrentSong = () => {
    dispatch(playSong(song.trackNumber));

    //Here logic which we can use for playing all songs
  };
  
  
  return (
    <tr className='song-row'>
            <td className='play' onClick={playCurrentSong}> <FontAwesomeIcon icon={isPlay ? faPause : faPlay } /></td>
            <td className='songName'>{song.songName}</td>
            <td className='artistName'>{song.artistName}</td>
            <td className='trackNumber'>{song.trackNumber}</td>
            <td className='icons'><FaHeart /> <FaCheck /><FaSortDown /><FaArrowRight /></td>
            {/* Additional body columns can be added here */}
    </tr>
  )
}
