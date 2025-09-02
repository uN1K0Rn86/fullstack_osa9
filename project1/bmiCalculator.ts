import { isNotNumber } from './utils';

interface bmiValues {
  height: number;
  weight: number;
}

export const parseArguments = (args: string[]): bmiValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNotNumber(args[2]) && !isNotNumber(args[3])) {
    return {
      height: Number(args[2]),
      weight: Number(args[3]),
    };
  } else {
    throw new Error('Provided values were not numbers');
  }
};

const calculateBmi = (height: number, weight: number): string => {
  const result = weight / (height / 100) ** 2;

  if (result < 16) {
    return 'Underweight (Severe thinness)';
  } else if (result >= 16 && result < 17) {
    return 'Underweight (Moderate thinness)';
  } else if (result >= 17 && result < 18.5) {
    return 'Underweight (Mild thinness)';
  } else if (result >= 18.5 && result < 25) {
    return 'Normal range';
  } else if (result >= 25 && result < 30) {
    return 'Overweight (Pre-obese)';
  } else if (result >= 30 && result < 35) {
    return 'Obese (Class I)';
  } else if (result >= 35 && result < 40) {
    return 'Obese (Class II)';
  } else if (result >= 40) {
    return 'Obese (Class III)';
  } else {
    return 'This was not a number';
  }
};

try {
  const { height, weight } = parseArguments(process.argv);
  console.log(calculateBmi(height, weight));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
