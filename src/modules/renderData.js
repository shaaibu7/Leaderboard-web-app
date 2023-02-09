import getallUserScore from './refresh.js';

const tableContainer = document.getElementById('main-container');

const serveUsers = async () => {
  const data = await getallUserScore();
  data.forEach((element) => {
    tableContainer.innerHTML += `<tr>
      <td>${element.user}</td>
      <td>${element.score}</td>
      </tr>`;
  });
};

export default serveUsers;