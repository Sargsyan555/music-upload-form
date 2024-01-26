export const addSong = (file, trackNumber) => {
  const extractedName = file.name.match(/\d+_(\w+)-/)[1]; // option to get the singer's name or artist name

    return {
      type: 'ADD_SONG', //In what format the song is added 
      payload: {
        songName: file.name,
        artistName: extractedName,
        trackNumber,
        file,
      },
    };
  };
  export const reverseTrackNumbers = () => {
    return {
      type: 'REVERSE_TRACK_NUMBERS_AND_SEQUENCE',  //reverses the order of the songs
    };
  };
  export const playSong = (trackNumber) => {
    return {
      type: 'PLAY_SONG',  //play all songs
      whichIsPlay: trackNumber
    };
  };
  export const playAllSong = (whichIsPlay) => {
    let currentPusition = whichIsPlay
    if(currentPusition === 'play_all'){
      currentPusition = 'stop_all'
    }else{
      currentPusition = 'play_all'
    }
    return {
      type: 'PLAY_ALL',  //play all songs
      currentPusition: currentPusition
    };
  };