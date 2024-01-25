// MusicPlayer.js
import React, { useState } from 'react';
import { FaPlay, FaPause, FaUpload } from 'react-icons/fa';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import SongList from './SongList';
import PlayAllButton from './PlayAllButton';
import AddAllButton from './AddAllButton';
import MusicUploadForm from './MusicUploadForm';
import '../style/MusicPlayer.css'; // Create this file for styling

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);
  const [songs, setSongs] = useState([
    { trackNumber: 1, songName: 'Song 1', artistName: 'Artist 1' },
    { trackNumber: 2, songName: 'Song 2', artistName: 'Artist 2' },
    // Add more songs as needed
  ]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePlayAll = () => {
    // Implement play all logic (simulated)
    console.log('Play All clicked');
  };

  const handleAddAll = () => {
    // Implement add all logic (simulated)
    console.log('Add All clicked');
  };

  return (
    <div className="music-player-container">
      <AudioPlayer
        src={audioSrc}
        autoPlay={isPlaying}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <div className="controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
      <div className="upload-form">
        <MusicUploadForm />
      </div>
      <SongList songs={songs} />
      <div className="buttons-container">
        <PlayAllButton onClick={handlePlayAll} />
        <AddAllButton onClick={handleAddAll} />
      </div>
    </div>
  );
};

export default MusicPlayer;
