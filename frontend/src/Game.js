// src/Game.js
import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { connect } from "react-redux";
import { placeBet, rollDice } from "./redux/actions";

function Game({ points, diceRoll, result, placeBet, rollDice }) {
  const [option, setOption] = useState(null);
  const [betAmount, setBetAmount] = useState(100);

  const handlePlaceBet = () => {
    placeBet(betAmount, option);
  };

  const handleRollDice = () => {
    rollDice(betAmount, option);
  };

  return (
    <div>
      <Typography variant="h4">Points: {points}</Typography>
      <Typography variant="h4">Result: {result}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOption("7 Up")}
      >
        7 Up
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOption("7 Down")}
      >
        7 Down
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOption("Lucky 7")}
      >
        Lucky 7
      </Button>
      <Button variant="contained" color="secondary" onClick={handleRollDice}>
        Roll Dice
      </Button>
      <Typography variant="h5">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setBetAmount(100)}
        >
          Bet 100
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setBetAmount(200)}
        >
          Bet 200
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setBetAmount(500)}
        >
          Bet 500
        </Button>
        <Button variant="contained" color="secondary" onClick={handlePlaceBet}>
          Place Bet
        </Button>
      </Typography>

      {diceRoll && (
        <div>
          <Typography variant="h5">
            Dice Roll 1: {diceRoll.diceRoll1}
          </Typography>
          <Typography variant="h5">
            Dice Roll 2: {diceRoll.diceRoll2}
          </Typography>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  points: state.points,
  diceRoll: state.diceRoll,
  result: state.result,
});

const mapDispatchToProps = {
  placeBet,
  rollDice,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
