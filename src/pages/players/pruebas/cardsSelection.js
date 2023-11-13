import { createPlayer } from './createPlayer.js';
import { deletePlayer } from './deletePlayer.js';

function createDiv() {
 const div = document.createElement('div');
 // Add any additional properties to the div here
 return div;
}

function createLi(player) {
 const li = document.createElement('li');
 li.textContent = player.name;
 return li;
}

function renderPlayerList() {
 const nameList = document.getElementById('name-list');
 nameList.innerHTML = '';
 players.forEach((player) => {
  const li = createLi(player);
  nameList.appendChild(li);
 });
}

document.body.onload = () => {
 const div = createDiv();
 document.body.appendChild(div);

 renderPlayerList();

 const addButton = document.getElementById('add-name-button');
 addButton.addEventListener('click', () => {
  const nameInput = document.getElementById('name-input');
  const name = nameInput.value;
  const newPlayer = createPlayer(name);
  players.push(newPlayer);
  nameInput.value = '';
  renderPlayerList();
 });

 const deleteButton = document.getElementById('delete-name-button');
 deleteButton.addEventListener('click', () => {
  const nameInput = document.getElementById('name-input');
  const name = nameInput.value;
  players = deletePlayer(players, name);
  nameInput.value = '';
  renderPlayerList();
 });
};
