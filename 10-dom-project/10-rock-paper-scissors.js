// dom project JS

function handleKeydown(event){
  if (event.key === 'Enter'){
    calculateTotal();
  }
}

function calculateTotal(){
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  if (cost < 40){
    cost+=10;
  }
  
  document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
}

function subscribe(){
  const btnElement = document.querySelector('.js-subscribe-btn');

  if (btnElement.innerText === 'Subscribe') {
    btnElement.innerHTML = 'Subscribed';
    btnElement.classList.add('is-subscribed');  // create class
  } else {
    btnElement.innerHTML = 'Subscribe';
    btnElement.classList.remove('is-subscribed');  //remove class
  }
}

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};



updateScoreElement();

// Rock paper scissors JS

function playGame(playerMove){
const move = pickComputerMove();

  let result = '';

  if (playerMove === 'Scissors'){
  if (move === 'Rock'){
    result = 'You Lost!';
  }else if (move === 'Paper') {
    result = 'You Win!';
  }else {
    result = 'Tie!';
  }

  }else if (playerMove === 'Paper'){
    if (move === 'Rock'){
      result = 'You Win!';
    }else if (move === 'Paper') {
      result = 'Tie!';
    }else {
      result = 'You Lost!';
    }

  }else if (playerMove === 'Rock') {
  if (move === 'Rock'){
    result = 'Tie!';
  }else if (move === 'Paper') {
    result = 'You Lost!';
  }else {
    result = 'You Win!';
  }
  }

  if (result === 'You Win!'){
  score.wins++;
  }else if (result === 'You Lost!'){
  score.losses++;
  }else if (result === 'Tie!'){
  score.ties++;
  }

  localStorage.setItem('score',JSON.stringify(score));

  updateScoreElement();

  //send values to paragraph

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-move').innerHTML = `You <img src="/10-dom-project/images/${playerMove}-emoji.png" alt="" class="move-icon">
  <img src="/10-dom-project/images/${move}-emoji.png" alt="" class="move-icon"> Computer`;

  }

  function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses ${score.losses}, Ties: ${score.ties}`;
  }

  function pickComputerMove(){
  const randomNum = Math.random();
  let move = '';
  if (randomNum >=0 && randomNum < (1/3)){
  move = 'Rock';
  }else if (randomNum >=(1/3) && randomNum < (2/3)){
  move = 'Paper';
  }else {
  move = 'Scissors';
  }

  return move;
  }