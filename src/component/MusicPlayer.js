import React, { useState } from 'react';
import { FaPlay, FaPause, FaUpload } from 'react-icons/fa';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './MusicPlayer.css'; // Create this file for styling

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setAudioSrc(fileUrl);
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
        <label htmlFor="file-input">
          <FaUpload />
          Upload Music
        </label>
        <input
          id="file-input"
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
