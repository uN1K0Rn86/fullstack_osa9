import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { isNotNumber } from './utils';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

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

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    return res.status(400).json({ error: 'parameters missing' });
  }

  if (
    isNotNumber(target) ||
    !Array.isArray(daily_exercises) ||
    daily_exercises.some(d => isNotNumber(d))
  ) {
    return res.status(400).json({ error: 'malformatted parameters' });
  }

  const hoursPerDay = daily_exercises.map(d => Number(d));

  return res.json(calculateExercises(hoursPerDay, Number(target)));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
