var inquirer = require("inquirer");

var word = "apple";
word = word.split("");

var letters = [];

for (var i = 0; i < word.length; i++) {
  var letter = new Letter(word[i], false);
  letter.displayChar();
  var char = letter.string;
  letters.push(char);
}

letters = letters.join(" ");
console.log(letters);

var count = 0;

function guessLetter() {
  if (count < 2) {
    inquirer
      .prompt([
        {
          name: "guess",
          message: "Guess a Letter!"
        }
      ])
      .then(function(answers) {
        var guess = answers.guess;
        console.log("----------------------------------");
        console.log(`Current Word: \n${letters}`);
        count++;
        guessLetter();
      });
  } else {
    console.log("You're out of guesses!");
  }
}

guessLetter();

function Letter(string, bool) {
  this.string = string;
  this.guessed = bool;
  this.displayChar = function() {
    if (!this.guessed) {
      this.string = "_";
    }
  };
  this.checkGuess = function(char) {
    if (char === this.string) {
      this.guessed = true;
    }
  };
}

module.exports = Letter;
