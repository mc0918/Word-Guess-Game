//Create all the arrays to be used in the code
var numGuesses = 0;
var remainingGuesses = 12;
var lettersGuessed = [];
var wins = 0;
var losses = 0;
var wordsToGuess = [
  "cave",
  "speleothem",
  "stalagmite",
  "helictite",
  "dripstone",
  "gypsum"
];

//alert("press any key to begin");

function guessUpdate() {
  document.onkeyup = function(event) {
    userInput = event.key;
    if (lettersGuessed.includes(userInput)) {
      console.log(userInput + " already guessed");
    } else {
      lettersGuessed.push(userInput);
      console.log(lettersGuessed);
    }
  };
}

function gameOver() {
  lettersGuessed.length = 0;
}

function getWord() {
  var random = Math.floor(Math.random() * 6);
  var picker = wordsToGuess[parseInt(random)];
  console.log(picker);
}
getWord();
