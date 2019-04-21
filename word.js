var Letter = require("./Letter");

// Create the Word conststructor

function Word(string) {
    this.letters = [];
    this.split = function () {
        var word = string.split("");
        for (var i = 0; i < word.length; i++) {
            var letter = new Letter(word[i], false);
            this.letters.push(letter);
        };
    };
    this.constructWord = function () {
        var newWord = [];
        for (var i = 0; i < this.letters.length; i++) {
            this.letters[i].displayChar();
            newWord.push(this.letters[i].string);
        };
        newWord = newWord.join(" ");
        console.log(`Current Word: ${newWord}`);
    };
};

module.exports = Word;