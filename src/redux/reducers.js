// reducers.js
const initialState = {
    songs: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_SONG':
        return {
          ...state,
          songs: [...state.songs, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  