import {createStore} from 'redux';

// Actions
const SET_TEXT = 'SET_TEXT';

export const setText = text => ({
  type: SET_TEXT,
  payload: text,
});

// Reducer
const initialState = {
  text: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT:
      return {...state, text: action.payload};
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

export default store;
