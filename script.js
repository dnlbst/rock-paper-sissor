// overall score
let scoreUser = 0;
let scorePc = 0;
let scorePcUi = document.querySelector('.scorePc');
let scoreUserUi = document.querySelector('.scoreUser');

// result of each round
let result = document.querySelector('.result');

// code for one round 
function playRound(playerSelection){
  const computerSelection = computerPlay();
    
  if(playerSelection === computerSelection) { 
    result.innerText = 'Uh suspense, draw!'; 
    
} else if(playerSelection === 'paper' && computerSelection == 'rock'
    || playerSelection === 'sissor' && computerSelection === 'paper'
    || playerSelection === 'rock' && computerSelection === 'sissor'){
    result.innerText = 'Yay, you have beaten the pc!';
    ++scoreUser;
    scoreUserUi.innerText = scoreUser;
    endPopUp();
    
} else if(playerSelection === 'paper' && computerSelection === 'sissor'
    ||  playerSelection === 'sissor' && computerSelection === 'rock'
    ||  playerSelection === 'rock' && computerSelection === 'paper'){
    result.innerText = 'Ah, the pc has beaten you!'
    ++scorePc;
    scorePcUi.innerText = scorePc;
    endPopUp();

} else {
    alert('something went wrong!');
};
console.log('pc: ', computerSelection);
console.log('user: ', playerSelection);
console.log(scoreUser, scorePc);
};

// function to return random pc choice of rock paper sissors
const computerPlay = function(){
  let rps = ['rock','paper','sissor']
  let pcChoice = rps[Math.floor(Math.random()*rps.length)];
  return pcChoice;
};

// function to return the Users choice when clicked
const userPlay = document.querySelectorAll('button');

    userPlay.forEach(userPlay => { 
      userPlay.addEventListener('click', e => {      
        playRound(userPlay.value);  
      });           
    });

// END Popup
const popup = document.querySelector('.popup-wrapper');
const popPara = document.querySelector('.popPara');
const close = document.querySelector('.popup-close');
const popA = document.querySelector('.popA');

let endPopUp = function() {
  if(scoreUser === 3 && scorePc < 3){
    popup.style.display = 'block';
    popPara.innerText = 'is YOU! Congrats!';
  } else if(scorePc === 3 && scoreUser < 3){
    popup.style.display = 'block';
    popPara.innerText = 'isn\'t you, maybe next time';
  } else {
    console.log('no popup, something went wrong')
  };
};

close.addEventListener('click', () => {
  popup.style.display = 'none';
  location.reload();
  result.innerText = 'Let\'s go, again!'
});


popA.addEventListener('click', () => {
  popup.style.display = 'none';
  location.reload();
  result.innerText = 'Let\'s go, again!'
});