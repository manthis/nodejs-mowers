
var Mower = require('./src/Mower');
var Lawn = require('./src/Lawn');
var InstructionsEmitter = require('./src/InstructionsEmitter');
var engine = new InstructionsEmitter();


process.on('exit', function() {
    console.log('End.\n')
});

engine.startMowers();

var mower_id = 0;
var mowers = [];
var lawn = null;

engine.on('start', function () {
   console.log('\nProcessing instructions file...\n');
});

engine.on('end', function () {

    mowers.forEach(function (mower) {
        mower.showOriginatingCoordinates();
        mower.showCoordinates();
    });

    console.log('\nInstructions file fully processed!\n');

});

engine.on('lawn', function(lawn_data) {
    lawn = new Lawn(lawn_data.x, lawn_data.y);
    lawn.showCharacteristics();
});

engine.on('mower', function (mower_data) {

    var mower = new Mower(++mower_id, mower_data, lawn);

    var instructions = mower.instructions.split('');
    instructions.forEach(function (instruction) {
        switch (instruction) {
            case 'F':
                mower.moveForward();
                break;
            case 'L':
                mower.turnLeft();
                break;
            case 'R':
                mower.turnRight();
                break;
            default:
                console.log('Warning - Unkown mower instruction: ' + instruction + '!');
        }
    });

    mowers.push(mower);
});
