// src/redux/reducers/index.js
import { combineReducers } from "redux";
import { SET_NAME, SET_NIM } from "../actions";

const initialState = {
  name: "Jason Benedictus",
  nim: "A11.2021.13327",
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_NIM:
      return {
        ...state,
        nim: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
