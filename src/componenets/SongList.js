// SongList.js
import React from 'react';
import SongRow from './ShowRow';

const SongList = ({ songs }) => {
  return (
    <div>
      <h2>Song List</h2>
      {songs.map((song) => (
        <SongRow key={song.trackNumber} song={song} />
      ))}
    </div>
  );
};

export default SongList;
