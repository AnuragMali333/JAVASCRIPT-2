let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};


updateScoreElement();
/*
  if(!score){ // if score is null !score will flip it to true
    score={
      wins:0,
      losses:0,
      ties:0
    };

  }
*/

function updateScoreElement() {
  document.querySelector('.js-score').
    innerHTML = ` Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;

}


function pickComputerMove() {
  let computerMove = '';
  const randomNumber = Math.random();


  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  }
  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;


}

let isAutoPlaying = false;
let intervalID;

const autoPlayButton = document.querySelector('.js-auto-play-button');
autoPlayButton.addEventListener('click', () => { autoPlay(); })

//const autoPlay=()=>{

//};

function autoPlay() {
  if (!isAutoPlaying) {
    intervalID = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    autoPlayButton.innerText = 'Stop Playing';

  } else {
    clearInterval(intervalID);
    isAutoPlaying = false;
    autoPlayButton.innerText = 'Auto Play'
  }
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  }
  else if (event.key === 'p') {
    playGame('paper');
  }
  else if (event.key === 's') {
    playGame('scissors');
  }
})


function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    }
    else if (computerMove === 'paper') {
      result = 'You win';
    }
    else if (computerMove === 'scissors') {
      result = 'Tie';
    }
  }

  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win';
    }
    else if (computerMove === 'paper') {
      result = 'Tie';
    }
    else if (computerMove === 'scissors') {
      result = 'You lose';
    }
  }

  else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    }
    else if (computerMove === 'paper') {
      result = 'You lose';
    }
    else if (computerMove === 'scissors') {
      result = 'You win';
    }
  }


  if (result === 'You win') {
    score.wins += 1;
  }
  else if (result === 'You lose') {
    score.losses += 1;
  }
  else if (result === 'Tie') {
    score.ties += 1;
  }


  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();
  document.querySelector('.js-result')
    .innerHTML = result
  document.querySelector('.js-moves')
    .innerHTML = `You
      <img src="../images/${playerMove}-emoji.png" alt="${playerMove}" class="move-icon">
      <img src="../images/${computerMove}-emoji.png" alt="${computerMove}" class="move-icon">
      Computer`;
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'a') {
    autoPlay();
  }
});

document.addEventListener('keydown', (event) => { 
  if (event.key === 'Backspace') {
    resetScore();
  }
});

function resetScore() {
  const confirmationMessage = document.querySelector('.js-confirmation');
  if (confirmationMessage) {
    confirmationMessage.innerHTML = `
      <p>Are you sure you want to reset the score?</p>
      <button class="confirm-yes-button">Yes</button>
      <button class="confirm-no-button">No</button>
    `;

    // Add event listeners for the Yes and No buttons
    document.querySelector('.confirm-yes-button').addEventListener('click', () => {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem('score');
      updateScoreElement();
      confirmationMessage.innerHTML = ''; // Clear the confirmation message
    });

    document.querySelector('.confirm-no-button').addEventListener('click', () => {
      confirmationMessage.innerHTML = ''; // Clear the confirmation message
    });
  }
}
