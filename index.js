
var Mower = require('./src/Mower');
var InstructionsEmitter = require('./src/InstructionsEmitter');
var engine = new InstructionsEmitter();

engine.startMowers();

var mower_id = 0;
var lawn = null;

engine.on('start', function () {
   console.log('Processing instructions file...');
});

engine.on('end', function () {
    console.log('Instructions file fully processed!');
});

engine.on('lawn', function(data) {
    lawn = data;
});

engine.on('mower', function (data) {
    var mower = new Mower(++mower_id, data, lawn);
    mower.showCoordinates();
    mower.showInstructions();
});