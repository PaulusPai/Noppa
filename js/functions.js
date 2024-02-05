
function rollDice() {
    
    var randomNumber = Math.floor(Math.random() * 6) + 1;
  
    
    var diceImage = document.querySelector('#dice img');
    diceImage.src = 'img/inverted-dice-' + randomNumber + '.png';
  }
  
  