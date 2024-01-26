//Shows a list of songs that are either pre-existing or downloaded by the user
import React from 'react'
import SongRow from './SongRow';
import { useSelector } from 'react-redux';
import '../style/SongList.css'

export default function SongList() {
  const songs = useSelector((state) => state.songs.songs); //
  return (
    <div className='song-list'>
        <table>
        <thead>
          <tr>
            <th className='play'></th>
            <th className='songName'>Song Name</th>
            <th className='artistName'>Artist Name</th>
            <th className='trackNumber'>Track</th>
            <th className='icons'></th>
            {/* Additional header columns can be added here */}
          </tr>
        </thead>
        <tbody>
          {/* shows the songs in rows */}
          {songs.map((song, index) => (
            <SongRow key={index} song={song} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
