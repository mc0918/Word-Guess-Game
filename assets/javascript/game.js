//Create all the arrays to be used in the code
var guessCounter = 0;
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
  //-------------------------------------------------------------------------
  //Picks a random word from the wordsToGuess array
  var random = Math.floor(Math.random() * wordsToGuess.length);
  var word = wordsToGuess[parseInt(random)];
  hiddenWord = [];
  for (i = 0; i < word.length; i++) {
    hiddenWord[i] = "_";
  }
  console.log(word, hiddenWord);

  //-------------------------------------------------------------------------------
  //Prints the hiddenWord on the screen
  var hiddenWordDiv = document.createElement("div");
  hiddenWordDiv.id = "hidden-word";
  hiddenWordDiv.innerHTML = hiddenWord;
  document.getElementById("word-box").appendChild(hiddenWordDiv);
  removeCommas();
  //-----------------------------------------------------------------------------
  //Starts game when first key is pressed
  document.onkeyup = function(event) {
    userInput = event.key;

    //---------------------------------------------------------------------------
    //if-else statement making sure repeated guesses don't count against score
    if (lettersGuessed.includes(userInput)) {
      console.log(userInput + " already guessed");
    } else {
      lettersGuessed.push(userInput);
      console.log(lettersGuessed);
      guessCounter += 1;
      console.log("guessCounter = " + guessCounter);
    }

    //----------------------------------------------------------------------------
    //If user guesses correctly, shows letter on screen instead of "_"
    for (i = 0; i < word.length; i++) {
      if (userInput == word[i]) {
        console.log("word[i] is: " + word[i]);
        replace = i;
        console.log("index of letter is: " + replace);
        hiddenWord.splice(replace, 1, userInput);
        hiddenWordDiv.innerHTML = hiddenWord;
        document.getElementById("word-box").appendChild(hiddenWordDiv);
        removeCommas();
      }
    }

    //-----------------------------------------------------------------------------
    //Checks to see if user has guessed all the letters
    for (i = 0; i < hiddenWord.length; i++) {
      if (hiddenWord.includes("_")) {
        console.log("keep guessing!");
      } else {
        console.log("you win!");
      }
    }

    //-----------------------------------------------------------------------------
    //if-else statement measuring guesses remaining
    if (guessCounter == 14) {
      alert("you are out of guesses!");
      gameOver();
    }
  };
}

//Clears screen and arrays we don't want to keep full
function gameOver() {
  lettersGuessed.length = 0;
  guessCounter = 0;
}

//For aesthetic reasons removes commas between "_" characters after the rest of the code does the heavy lifting
function removeCommas() {
  var prettyDiv = document.getElementById("hidden-word");
  console.log(prettyDiv);
  var prettyDivText = document.getElementById("hidden-word").textContent;
  console.log(prettyDivText);
  //use regular expressions here so we can use the 'g' tag to search for all instances of commas
  var newText = prettyDivText.replace(/,/g, " ");
  console.log(newText);
  document.getElementById("hidden-word").innerHTML = "";
  document.getElementById("hidden-word").textContent = newText;
}

guessUpdate();
