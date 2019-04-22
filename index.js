var Word = require("./Word");
var inquirer = require("inquirer");

var words = ["banana", "apple", "kiwi", "orange"];
var randomWord;
var currentWord;
var numGuesses = 0;

newWord(words);

function guessLetter() {
    var lettersLeft = currentWord.letters.length;
    for (var i = 0; i < currentWord.letters.length; i++) {
        if (currentWord.letters[i].guessed) {
            lettersLeft--;
        };
    };
    if (lettersLeft === 0) {
        console.log("You got it!");
        numGuesses = 0;
        spliceWord();
        newWord(words);
    } else if (numGuesses === 10) {
        console.log("You ran out of guesses!");
        numGuesses = 0;
        newWord(words);
    } else {
        inquirer.prompt([{
            type: 'input',
            name: 'guess',
            message: 'Guess a letter!'
        }]).then(function (answers, err) {
            if (err) throw err;
            var guess = answers.guess;
            console.log("==============================");
            console.log(`You guessed: ${guess}`);
            console.log("==============================");
            numGuesses++;
            currentWord.checkGuess(guess);
            currentWord.toString();
            guessLetter();
        });
    };
};

function newWord(words) {
    if (words.length === 0) {
        console.log("You guessed all the words!")
    } else {
        randomWord = words[Math.floor(Math.random() * words.length)];
        currentWord = new Word(randomWord);
        currentWord.split();
        currentWord.toString();
        guessLetter();
    };
};

function spliceWord() {
    var show = "";
    for (var i = 0; i < currentWord.letters.length; i++) {
        var wordString = show += currentWord.letters[i].string;
    };
    var index = words.indexOf(wordString);
    words.splice(index, 1);
};