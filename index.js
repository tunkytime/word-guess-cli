var Word = require("./Word");
var inquirer = require("inquirer");

var words = ["banana", "apple", "kiwi", "orange"];
var randomWord;
var currentWord;
var wordGuessed = false;

newWord(words);
guessLetter();

function guessLetter() {
    if (wordGuessed) {
        console.log("You got it!");
    } else {
        inquirer.prompt([{
            type: 'input',
            name: 'guess',
            message: 'Guess a letter!'
        }]).then(function (answers, err) {
            if (err) throw err;
            var guess = answers.guess;
            console.log(`Your guess: ${guess}`);
            currentWord.checkGuess(guess);
            currentWord.toString();
            guessLetter();
        });
    };
};

function newWord(words) {
    randomWord = words[Math.floor(Math.random() * words.length)];
    currentWord = new Word(randomWord);
    currentWord.split();
    currentWord.toString();
};