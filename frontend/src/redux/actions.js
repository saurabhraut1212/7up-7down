// src/redux/actions.js
import axios from 'axios';
import { PLACE_BET, ROLL_DICE, CHECK_RESULT, UPDATE_POINTS } from './actionTypes';

export const placeBet = (amount, option) => ({
  type: PLACE_BET,
  payload: { amount, option },
});

export const rollDice = (amount,option) => {
  return async (dispatch) => {
    const diceRollResponse = await axios.post('http://localhost:5000/dice-roll');
    const { diceRoll1, diceRoll2 } = diceRollResponse.data; // Destructure diceRoll1 and 
    
    const resultResponse = await axios.post('http://localhost:5000/check-result', { diceRoll1, diceRoll2, option });
    console.log(resultResponse.data.result,"result 1")
    const pointsResponse = await axios.post('http://localhost:5000/update-points', { result: resultResponse.data.result, bet: amount });
    dispatch({ type: ROLL_DICE, payload: { diceRoll: diceRollResponse.data, result: resultResponse.data.result, points: pointsResponse.data.points } });
  };
};