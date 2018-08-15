var playerPoints = 0;
var comPoints = 0;
var eachRound = 0;
var output = document.getElementById('output');
var outputResult = document.getElementById('result');
var newGame;

//Stage 1
document.getElementById('paper').addEventListener('click', function(){ playerMove('paper'); });
document.getElementById('rock').addEventListener('click', function(){ playerMove('rock'); });
document.getElementById('scissors').addEventListener('click', function(){ playerMove('scissors'); });
document.getElementById('new-game').addEventListener('click', function(){ newGames('new-game'); });

var enableButtons = function(){
  var arrayBtns = ['paper', 'rock', 'scissors'];
  for(var i = 0; i < arrayBtns.length; i++){
    document.getElementById(arrayBtns[i]).disabled = false;
  }
}

var disableButtons = function(){
  var arrayBtns = ['paper', 'rock', 'scissors'];
  for(var i = 0; i < arrayBtns.length; i++){
    document.getElementById(arrayBtns[i]).disabled = true;
  }
}

disableButtons();
// Create function to add empty string that reset text each time
function clear(){
  output.innerHTML = '';
}


 
//Choose paper, rock, scissor game logic
var playerMove = function(playerPick){
  // var comChoice = Math.floor(Math.random() * 3 + 1);
  
  if(playerPick == 'paper'){
    playerChoice = 1;
  }
  else if(playerPick == 'rock'){
    playerChoice = 2;
  }
  else if(playerPick == 'scissors'){
    playerChoice = 3;
  }
  var comChoice = Math.floor(Math.random() * 3 + 1);
  //Check if winner or computer won the math 
  var winner = 'player';
  
  if(playerChoice == comChoice){
    winner = null;
  }
  else if((playerChoice == 2 && comChoice == 1) || (playerChoice == 3 && comChoice == 2) || (playerChoice == 1 && comChoice == 3)){ 
   winner = 'computer';
  }
var playerMoveClass = document.getElementsByClassName("player-move");

  for(i = 0; i < playerMoveClass.length; i++) {

  }
  
  //Stage 2
  //Check who's score the points!
  if(winner == null){
    eachRound++;
    output.insertAdjacentHTML('afterBegin', 'It\'s Draw!'+'<br>'+'Try again.<br>');
  }
  else if(winner == 'player'){
    playerPoints++;
    eachRound++;
    output.insertAdjacentHTML('afterBegin', 'Congratulations! You have won!<br>'+'You picked '+playerChoice+'<br>'+'Computer picked '+comChoice+'<br>');
  }
  else if(winner == 'computer'){
    comPoints++;
    eachRound++;
    output.insertAdjacentHTML('afterBegin', 'Computer Won!<br>You picked '+playerChoice+'<br>'+'Computer picked '+comChoice+'<br>');
  }
  
  // Output score result
  outputResult.innerHTML = 'Round: '+eachRound+' Player '+playerPoints+' : '+comPoints+' Com<br>';
  
  //Check if game rounds has ended
   if(eachRound >= 0){
      // output.querySelector.add('#paper #rock #scissors');
      outputResult.innerHTML = 'Round: '+eachRound+' Player '+playerPoints+' : '+comPoints+' Com<br>';
    }
    if((eachRound == newGame) && (winner == 'computer')){
      outputResult.innerHTML = 'Sorry pal! You LOSE... :poop';
      disableButtons();
    }
    if((eachRound === newGame) && (winner == 'player')){
      outputResult.innerHTML = 'Congratulations! You have WON with Computer!';
      disableButtons();
    }
    if((eachRound === newGame) && (winner == null)){
      outputResult.innerHTML = 'It\'s draw! Try again.';
      disableButtons();
    }
};  
 
//Stage 3
  //Output window prompt for a new game
  var newGames = function(){
     newGame = parseInt(window.prompt('How many rounds do you wanna play? Type the number.'));
    clear();
    // console.log(newGame);
    if(eachRound >= 0){
      eachRound = 0;
      playerPoints = 0;
      comPoints = 0;
      outputResult.innerHTML = 'Round: '+eachRound+' Player '+playerPoints+' : '+comPoints+' Com<br>';
      if(isNaN(newGame)){
        outputResult.innerHTML = 'Type any number of rounds first.'; 
        disableButtons();
      }else{
        enableButtons();
      }
    }
  };