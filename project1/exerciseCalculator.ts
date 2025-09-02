import { isNotNumber } from './utils';

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export interface exerciseValues {
  hoursPerDay: number[];
  target: number;
}

const parseArguments = (args: string[]): exerciseValues => {
  if (args.length < 4) throw new Error('Not enough arguments');

  const [, , targetHours, ...hours] = process.argv;

  if (isNotNumber(targetHours)) {
    throw new Error('Target hours was not a number');
  }

  const hoursPerDay = hours.map((h) => Number(h));
  if (hoursPerDay.some((h) => isNotNumber(h))) {
    throw new Error('Hours per day -list contained an unnumerical value');
  }

  const result = {
    hoursPerDay: hoursPerDay,
    target: Number(targetHours),
  };

  return result;
};

type numericalRating = 3 | 2 | 1;

export const calculateExercises = (hoursPerDay: number[], targetHours: number): Result => {
  const averageHours = hoursPerDay.reduce((sum, d) => sum + d, 0) / hoursPerDay.length;
  const numericalRating = (averageHours: number, targetHours: number): numericalRating => {
    if (averageHours >= targetHours) {
      return 3;
    } else if (averageHours / targetHours >= 0.7) {
      return 2;
    } else return 1;
  };

  const ratingDescriptions = (rating: numericalRating): string => {
    switch (rating) {
      case 3:
        return 'Goal achieved, excellent job!';
      case 2:
        return 'You were close, but still have room to improve';
      case 1:
        return 'Did you even really try?';
    }
  };

  const rating = numericalRating(averageHours, targetHours);

  const result = {
    periodLength: hoursPerDay.length,
    trainingDays: hoursPerDay.filter((d) => d !== 0).length,
    success: averageHours >= targetHours,
    rating: rating,
    ratingDescription: ratingDescriptions(rating),
    target: targetHours,
    average: averageHours,
  };

  return result;
};

if (require.main === module)
  try {
    const { hoursPerDay, target } = parseArguments(process.argv);
    console.log(calculateExercises(hoursPerDay, target));
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
  }
