// https://en.wikipedia.org/wiki/Elo_rating_system#Mathematical_details
const K = 32;

const calculateExpectedScores = (winnerScore: number, loserScore: number) => {
  const qWinner = Math.pow(10, winnerScore / 400);
  const qLoser = Math.pow(10, loserScore / 400);

  const denominator = qWinner + qLoser;

  const eWinner = qWinner / denominator;
  const eLoser = qLoser / denominator;

  return [eWinner, eLoser];
};

export const calculateNewScores: CalculateNewScoresFn = (winnerScore, loserScore) => {
  const [eWinner, eLoser] = calculateExpectedScores(winnerScore, loserScore);

  const newWinnerScore = Math.round(winnerScore + K * (1 - eWinner));
  const newLoserScore = Math.round(loserScore + K * (0 - eLoser));

  return [newWinnerScore, newLoserScore];
};
