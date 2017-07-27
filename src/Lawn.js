
var colors = require('colors/safe');


var Lawn = function (width, height) {
    this.x = width;
    this.y = height;
};

Lawn.prototype = {

    showCharacteristics: function (prefix) {
        console.log(
            colors.yellow(
                (prefix === undefined ? 'Lawn specs ' : prefix + ' ') + '[ ' +
                'Width: ' + this.x + '; ' +
                'Height: ' + this.y + ' ]\n'
            )
        );
    }

};

module.exports = Lawn;