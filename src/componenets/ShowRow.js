// SongRow.js
import React from 'react';

const SongRow = ({ song }) => {
  return (
    <div className="song-row">
      <span>{song.trackNumber}</span>
      <span>{song.songName}</span>
      <span>{song.artistName}</span>
    </div>
  );
};

export default SongRow;
