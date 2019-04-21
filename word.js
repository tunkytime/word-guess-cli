var Letter = require("./Letter");

// Create the Word conststructor
function Word(string) {
    this.letters = [];
    this.split = function () {
        string = string.split("");
        for (var i = 0; i < string.length; i++) {
            var letter = new Letter(string[i]);
            this.letters.push(letter);
        };
    };
    this.toString = function () {
        var show = "";
        for (var i = 0; i < this.letters.length; i++) {
            show += this.letters[i].display;
        };
        console.log(show);
    };
    this.checkGuess = function (char) {
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].updateGuessed(char);
        };
    };
};

module.exports = Word;