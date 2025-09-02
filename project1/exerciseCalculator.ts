interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (hoursPerDay: number[], targetHours: number): Result => {
  const averageHours = hoursPerDay.reduce((sum, d) => sum + d, 0) / hoursPerDay.length;
  const numericalRating = (averageHours: number, targetHours: number): number => {
    if (averageHours >= targetHours) {
      return 3;
    } else if (averageHours / targetHours >= 0.7) {
      return 2;
    } else return 1;
  };

  const ratingDescriptions = (rating: number): string => {
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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
