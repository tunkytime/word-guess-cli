// Create the Letter conststructor

function Letter(string, bool) {
    this.string = string;
    this.guessed = bool;
    this.displayChar = function () {
        if (!this.guessed) {
            this.string = "_";
        }
    };
    this.checkGuess = function (char) {
        if (char === this.string) {
            this.guessed = true;
        }
    };
};

module.exports = Letter;