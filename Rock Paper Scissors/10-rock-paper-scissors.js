
// Rock paper scissors JS
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};



updateScoreElement();

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying){
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  }else{
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
  }

// event listners for buttons

document.querySelector('.js-rock-btn').addEventListener('click', () => {
  playGame('Rock');
});

document.querySelector('.js-paper-btn').addEventListener('click', () => {
  playGame('Paper');
});

document.querySelector('.js-scissors-btn').addEventListener('click', () => {
  playGame('Scissors');
});

document.querySelector('.js-reset-btn').addEventListener('click', () => {
  score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    updateScoreElement();
})

document.querySelector('.js-auto-play').addEventListener('click', () => {
  autoPlay();
})


//add keydown for play game

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('Rock');
  } else if (event.key === 'p') {
    playGame('Paper');
  } else if (event.key === 's') {
    playGame('Scissors');
  }
});
  

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

  document.querySelector('.js-move').innerHTML = `You <img src="/Rock Paper Scissors/images/${playerMove}-emoji.png" alt="" class="move-icon">
  <img src="/Rock Paper Scissors/images/${move}-emoji.png" alt="" class="move-icon"> Computer`;

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