const updateUserScore = async () => {
  const nameInput = document.getElementById('username').value;
  const scoreInput = document.getElementById('userscore').value;
  const displayContainer = document.querySelector('.alert');

  if (!nameInput && !scoreInput) {
    displayContainer.innerHTML += 'All input fields are required';
  }
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/81rl5GIE6FTe2uGL6gCG/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user: document.getElementById('username').value,
        score: document.getElementById('userscore').value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  const userScore = await res.json();
  return userScore;
};

export default updateUserScore;