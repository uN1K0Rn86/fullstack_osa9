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
  }
};

console.log(calculateBmi(180, 74));
console.log(calculateBmi(200, 70));
console.log(calculateBmi(165, 90));
