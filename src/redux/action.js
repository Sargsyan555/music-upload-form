// src/actions.js
export const addSong = (file) => {
    
    return {
      type: 'ADD_SONG',
      payload: {
        songName: file.name,
        artistName: 'Unknown',
        trackNumber: 0, // Implement logic for track number
        file,
      },
    };
  };
  