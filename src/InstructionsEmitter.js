
var fs = require('fs');
var util = require('util');
var EventEmitter = require('events').EventEmitter;

var InstructionsEmitter = function () {
    this.INSTRUCTIONS_FILE = './resources/mowers.cfg';
};

InstructionsEmitter.prototype = {

    /**
     * This function allows to parse file specified in INSTRUCTIONS_FILE in order to get the lawn dimensions,
     * the mower originating coordinates on the lawn and the mower's instructions.
     * The following events are emitted:
     * 1. start: only indicates the beginning of the file processing
     * 2. end: only indicates the end of the instructions file processing
     * 3. lawn: the dimensions of the lawn, specified on the first line of the instructions file
     * 4. mower: the originating coordinates of the mower as well as its mowing instructions
     */
    startMowers: function () {

        var that = this;

        fs.readFile(this.INSTRUCTIONS_FILE, function(error, data) {

            if (error) {
                throw error;
            }

            that.emit('start');

            // We split the lines
            var lines = data.toString('ascii').split('\n');

            // We take care of the lawn dimensions
            var lawn_line = lines.splice(0, 1);
            var re = /^(\d) (\d)$/;
            var matches = re.exec(lawn_line);
            var lawn = {
                x: parseInt(matches[1]),
                y: parseInt(matches[2])
            };
            that.emit('lawn', lawn);

            // Now we take care of the mowers
            while (lines.length > 0) {

                // We get our lines two by two
                var buffer = lines.splice(0, 2);
                var coordinates = buffer[0];
                var instructions = buffer[1];

                // Let's take care of the originating coordinates first
                var re_coordinates = /^(\d) (\d) ([A-Z])$/;
                var coord_matches = re_coordinates.exec(coordinates);

                if (coord_matches) {

                    // Now the mower's instructions
                    var re_instructions = /^[LRF]*$/;
                    var instruct_matches = re_instructions.exec(instructions);

                    if (instruct_matches) {
                        that.emit('mower', {
                            x: parseInt(coord_matches[1]),
                            y: parseInt(coord_matches[2]),
                            direction: coord_matches[3],
                            instructions: instructions
                        });
                    }

                }
            }

            that.emit('end');
        });
    }

};

util.inherits(InstructionsEmitter, EventEmitter);
module.exports = InstructionsEmitter;