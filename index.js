var Word = require("./Word");
var inquirer = require("inquirer");

var words = [
  "javascript",
  "function",
  "variable",
  "programming",
  "application",
  "algorithm",
  "array",
  "boolean",
  "constructor"
];
var randomWord;
var currentWord;
var numGuesses = 7;

console.log(
  `• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • \n
  WELCOME TO CODEMAN! GUESS ALL THE CODING/PROGRAMMING RELATED WORDS/TERMS. \n
  BE CAREFUL, YOU ONLY GET 15 GUESSES TOTAL, THEN YOU LOSE.
  \n • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •`
);

newWord(words);

function guessLetter() {
  //   console.log(numGuesses);
  var lettersLeft = currentWord.letters.length;
  for (var i = 0; i < currentWord.letters.length; i++) {
    if (currentWord.letters[i].guessed) {
      lettersLeft--;
    }
  }

  if (lettersLeft === 0) {
    console.log("You got it!");
    spliceWord();
    reset();
  } else if (numGuesses === 0) {
    console.log(`You ran out of guesses!\nLet's try another word...`);
    reset();
  } else {
    inquirer
      .prompt([
        {
          type: "input",
          name: "guess",
          message: "Guess a letter!"
        }
      ])
      .then(function(answers, err) {
        if (err) throw err;
        var guess = answers.guess.toLowerCase();
        console.log(
          `------------------------- \nYou guessed: ${guess}\n-------------------------`
        );
        currentWord.checkGuess(guess);
        currentWord.toString();
        guessLetter();
      });
  }
}

function newWord(words) {
  if (words.length === 0) {
    console.log("You guessed all the words!");
  } else {
    randomWord = words[Math.floor(Math.random() * words.length)];
    currentWord = new Word(randomWord);
    currentWord.split();
    currentWord.toString();
    guessLetter();
  }
}

function spliceWord() {
  var show = "";
  for (var i = 0; i < currentWord.letters.length; i++) {
    var wordString = (show += currentWord.letters[i].string);
  }
  var index = words.indexOf(wordString);
  words.splice(index, 1);
}

function decrementGuesses() {
  numGuesses--;
}

function reset() {
  numGuesses = 7;
  newWord(words);
}
