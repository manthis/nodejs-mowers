
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

engine.on('lawn', function(lawn_data) {
    lawn = lawn_data;
});

engine.on('mower', function (mower_data) {
    var mower = new Mower(++mower_id, mower_data, lawn);
    mower.showAffectedLawn();
    mower.showCoordinates();
});