// Create the Letter conststructor
function Letter(string) {
    this.string = string;
    this.display = " _";
    this.guessed = false;
    this.updateGuessed = function (char) {
        if (char == this.string) {
            this.guessed = true;
        }
        if (this.guessed) {
            this.display = ` ${this.string}`;
        };
    };
};

module.exports = Letter;