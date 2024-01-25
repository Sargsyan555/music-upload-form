// src/store.js
import { createStore } from 'redux';

const initialState = {
  songs: [],
};

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_SONG':
        console.log(state)
      return {
        ...state,
        songs: [...state.songs, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
