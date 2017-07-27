
var Mower = function (id, mower_infos, lawn) {
    this.id = id;
    this.x = mower_infos.x;
    this.y = mower_infos.y;
    this.direction = mower_infos.direction;
    this.instructions = mower_infos.instructions;
    this.lawn = lawn;

    this.poles = ['N', 'E', 'S', 'W'];
    this.poles_index = this.poles.indexOf(this.direction);
};

Mower.prototype = {

    showCharacteristics: function () {
        console.log(
            'Mower ' + this.id + ' [ ' +
            'X: ' + this.x + '; Y: ' + this.y + '; Dir: ' + this.direction + '; Instructions: ' + this.instructions +
            ' ]'
        );
    },

    showInstructions: function () {
        console.log(
            'Mower ' + this.id + ' [ ' +
            'Instructions: ' + this.instructions +
            ' ]'
        );
    },

    showCoordinates: function () {
        console.log(
            'Mower ' + this.id + ' [ ' +
            'X: ' + this.x + '; Y: ' + this.y + '; Dir: ' + this.direction +
            ' ]'
        );
    },

    showAffectedLawn: function () {
        console.log(
            'Mower ' + this.id + ' [ ' +
            'Lawn Width: ' + this.lawn.x + '; ' +
            'Lawn Height: ' + this.lawn.y + ' ]'
        );
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
                if (y > 1) {
                    y -= 1;
                }
                break;
            case 'W':
                if (x > 1) {
                    x -= 1;
                }
                break;
        }

        this.x = x;
        this.y = y;

    }

};

module.exports = Mower;