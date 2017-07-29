
var colors = require('colors/safe');


var Mower = function (id, mower_infos, lawn) {
    this.id = id;
    this.x = mower_infos.x;
    this.x_origin = mower_infos.x;
    this.y = mower_infos.y;
    this.y_origin = mower_infos.y;
    this.direction = mower_infos.direction;
    this.dir_origin = mower_infos.direction;
    this.instructions = mower_infos.instructions;
    this.lawn = lawn;

    this.poles = ['N', 'E', 'S', 'W'];
    this.poles_index = this.poles.indexOf(this.direction);
};

Mower.prototype = {

    showCharacteristics: function () {
        console.log(
            colors.blue(
                'Mower ' + this.id + ' [ ' +
                'X: ' + this.x + '; Y: ' + this.y + '; Dir: ' + this.direction + '; Instructions: ' + this.instructions +
                ' ]'
            )
        );
    },

    showInstructions: function () {
        console.log(
            console.white(
                'Mower ' + this.id + ' [ ' +
                'Instructions: ' + this.instructions +
                ' ]'
            )
        );
    },

    showOriginatingCoordinates: function () {
        console.log(
            colors.green(
                'Mower ' + this.id + ' originating coordinates [ ' +
                'X: ' + this.x_origin + '; Y: ' + this.y_origin + '; Dir: ' + this.dir_origin +
                ' ]'
            )
        );
    },

    showCoordinates: function () {
        console.log(
            colors.red(
                'Mower ' + this.id + ' current coordinates     [ ' +
                'X: ' + this.x + '; Y: ' + this.y + '; Dir: ' + this.direction +
                ' ]'
            )
        );
    },

    showAffectedLawn: function () {
        this.lawn.showCharacteristics(colors.green('Mower ' + this.id ));
    },
    
    turnRight: function () {
        var new_index = this.poles_index + 1;

        if (new_index > (this.poles.length - 1)) {
            new_index = 0;
        }

        this.poles_index = new_index;
        this.direction = this.poles[this.poles_index];
    },
    
    turnLeft: function () {
        var new_index = this.poles_index - 1;

        if (new_index < 0) {
            new_index = (this.poles.length - 1)
        }

        this.poles_index = new_index;
        this.direction = this.poles[this.poles_index];
    },
    
    moveForward: function () {

        var x = this.x;
        var y = this.y;

        switch (this.direction) {
            case 'N':
                if (y < this.lawn.y) {
                    y += 1;
                }
                break;
            case 'E':
                if (x < this.lawn.x) {
                    x += 1;
                }
                break;
            case 'S':
                if (y > 0) {
                    y -= 1;
                }
                break;
            case 'W':
                if (x > 0) {
                    x -= 1;
                }
                break;
        }

        this.x = x;
        this.y = y;

    }

};

module.exports = Mower;