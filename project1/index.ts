import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { isNotNumber } from './utils';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const h = req.query.height;
  const w = req.query.weight;

  const height = Number(h);
  const weight = Number(w);

  if (!height || !weight || isNotNumber(height) || isNotNumber(weight)) {
    return res.status(400).json({ error: 'Invalid height or weight' });
  }

  const bmi = calculateBmi(height, weight);
  const response = {
    weight: weight,
    height: height,
    bmi: bmi,
  };

  return res.json(response);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
