
var Mower = function (id, mower_infos, lawn) {
    this.id = id;
    this.x = mower_infos.x;
    this.y = mower_infos.y;
    this.direction = mower_infos.direction;
    this.instructions = mower_infos.instructions;
    this.lawn = lawn;
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
    
    turnRight: function () {
        
    },
    
    turnLeft: function () {
        
    },
    
    moveForward: function () {
        
    }
};

module.exports = Mower;