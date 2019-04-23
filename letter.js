// Create the Letter conststructor
function Letter(string) {
    this.string = string;
    this.display = " _";
    this.guessed = false;
    this.updateGuessed = function (char) {
        if (char == this.string) {
            this.guessed = true;
            this.display = ` ${this.string}`;
            return true
        };
    };
};

module.exports = Letter;