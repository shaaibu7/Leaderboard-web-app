const getallUserScore = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/81rl5GIE6FTe2uGL6gCG/scores/');
  const retrieveScore = await res.json();
  return retrieveScore.result;
};

export default getallUserScore;