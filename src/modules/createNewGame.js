const newGame = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'My first Leaderboard game',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  const responseId = await res.json();
  return responseId;
};
export default newGame;
