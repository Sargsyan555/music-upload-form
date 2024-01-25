import React from 'react'
import { useState } from 'react';
import SongRow from './SongRow';
import './SongList.css'
export default function SongList() {
    class SongModel {
        constructor(songName, artistName, trackNumber = 2, file = null) {
          this.songName = songName;
          this.artistName = artistName;
          this.trackNumber = trackNumber;
          this.file = file;
        }
      }
      const initialSongs = [
        new SongModel('Song 1', 'Artist 1'),
        new SongModel('Song 2', 'Artist 2'),
        // Add more songs as needed
      ];
      const [songs, setSongs] = useState(initialSongs);

  return (
    <div className='song-list'>
        <table>
        <thead>
          <tr>
            <th></th>
            <th>Song Name</th>
            <th>Artist Name</th>
            <th>Track</th>
            <th></th>

            {/* Additional header columns can be added here */}
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <SongRow key={index} song={song} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
