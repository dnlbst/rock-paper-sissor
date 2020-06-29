// function to return random pc choice of rock paper sissors
const computerPlay = function(){
  let rps = ['rock','paper','sissors']
  let pcChoice = rps[Math.floor(Math.random()*rps.length)];
  return pcChoice;
};

//function for the user choice
const userPlay = function(){
  let userInput = prompt('Please enter: Rock, Paper or Sissors!').toLowerCase().trim();
  return userInput;
};

// overall score
let score = 0;


// console.log('pc: ', computerSelection);
// console.log('user: ', playerSelection);


// code for one round 
function playRound(){
      const computerSelection = computerPlay();
      const playerSelection = userPlay();
      
      if(playerSelection === computerSelection) { 
        alert('uh suspense, draw!'); 
        
    } else if(playerSelection === 'paper' && computerSelection == 'rock'
        || playerSelection === 'sissors' && computerSelection === 'paper'
        || playerSelection === 'rock' && computerSelection === 'sissors'){
        alert('yay, you have beaten the pc. Paper beats Rock!');
        ++score;
    } else if(playerSelection === 'paper' && computerSelection === 'sissors'
        ||  playerSelection === 'sissors' && computerSelection === 'rock'
        ||  playerSelection === 'rock' && computerSelection === 'paper'){
        alert('ah, the pc has beaten you!. Sissors beats Paper!')
        --score;
    } else {
        alert('something went wrong, misstyped?');
    };
    console.log('pc: ', computerSelection);
    console.log('user: ', playerSelection);
    console.log(score);
  };

  // code for the game
  // unready yet
  // memo note: if its tie after 5 rounds play more rounds till we get a winner!!

playRound();
playRound();
playRound();
playRound();
playRound();

