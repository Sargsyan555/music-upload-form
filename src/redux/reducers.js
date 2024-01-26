// reducers
import { createStore, combineReducers } from 'redux';

const initialState = {
  songs: [],
};
const songReducer = (state = initialState, action) => {  
  switch (action.type) {
    case 'ADD_SONG': //logic for adding a song
      const newTrackNumber = state.songs.length + 1; // Added song's track number is depends on the number of songs
      return {
        
        songs: [...state.songs, { ...action.payload, trackNumber: newTrackNumber }],
      };
      break
      case 'REVERSE_TRACK_NUMBERS_AND_SEQUENCE': //logic for revers song order
      const reversedSongs = [...state.songs].reverse().map((song, index) => ({
        ...song,
        trackNumber: index + 1, // Update track numbers
      }));
      return {
        songs: reversedSongs,
      };
    default:
      return state;
  }
};

const playReducer = (state = false, action) => {
  console.log(state)
  switch (action.type) {
    case 'PLAY_ALL': 
      return  action.currentPusition
    case 'PLAY_SONG':
      if(state === action.whichIsPlay){
        return 'stop_all'
      }else{
        return action.whichIsPlay
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  songs: songReducer,
  whichIsPlay: playReducer

});

export default rootReducer;
  