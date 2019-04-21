var Word = require("./Word");
var inquirer = require("inquirer");

var words = ["banana", "apple", "kiwi", "orange"];
var randomWord = words[Math.floor(Math.random() * words.length)];
var currentWord = new Word(randomWord);

currentWord.split();
currentWord.constructWord();

for (var i = 0; i < currentWord.letters.length; i++) {
    currentWord.letters[i].displayChar();
    console.log(currentWord.letters[i].string);
};

// prompt the user to guess a letter using inquirer
// if the guess is equal to any of the letters in the word, display that
// reduce the number of guesses remaining
// choose another word if the user guesses all the letters correctly or runs out of guesses