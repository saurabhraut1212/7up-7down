// src/redux/reducer.js
import { PLACE_BET, ROLL_DICE } from './actionTypes';

const initialState = {
  points: 5000,
  bet: 0,
  diceRoll: null,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_BET:
      return {
        ...state,
        points: state.points - action.payload.amount,
      };
    case ROLL_DICE:
      return {
        ...state,
        diceRoll: action.payload.diceRoll,
        result: action.payload.result,
        points: state.points + action.payload.points,
      };
    default:
      return state;
  }
};

export default gameReducer;