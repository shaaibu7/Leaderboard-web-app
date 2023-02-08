import './style.css';
import updateUserScore from './modules/formSubmit.js';
import serveUsers from './modules/renderData.js';
import getallUserScore from './modules/refresh.js';

const formSubmit = document.querySelector('.btn');
const refreshBtn = document.querySelector('.refresh');
const nameInput = document.getElementById('username');
const scoreInput = document.getElementById('userscore');

window.addEventListener('load', () => {
  serveUsers();
});

formSubmit.addEventListener('click', (e) => {
  updateUserScore();
  nameInput.value = '';
  scoreInput.value = '';
  e.preventDefault();
});

refreshBtn.addEventListener('click', (e) => {
  window.location.reload();
  getallUserScore();
  e.preventDefault();
});