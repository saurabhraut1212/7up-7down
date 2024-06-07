// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.post('/dice-roll', (req, res) => {
    const diceRoll1 = Math.floor(Math.random() * 6) + 1;
    const diceRoll2 = Math.floor(Math.random() * 6) + 1;
    res.json({ diceRoll1, diceRoll2 });
  });

  app.post('/check-result', (req, res) => {
    const { diceRoll1, diceRoll2, option } = req.body;
    const total = Number(diceRoll1 + diceRoll2);
    let result;
  
    if (option === '7 Up' && total > 7) {
      result = 'Win';
    } else if (option === '7 Down' && total < 7) {
      result = 'Win';
    } else if (option === 'Lucky 7' && total === 7) {
      result = 'Win';
    } else {
      result = 'Lose';
    }
  
    res.json({ result });
  });

  // server.js
app.post('/update-points', (req, res) => {
    const { result, bet } = req.body;
    let points;
  
    if (result === 'Win') {
      points = bet * 2;
    } else {
      points = -bet;
    }
  
    res.json({ points });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});