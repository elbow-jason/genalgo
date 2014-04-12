var $gene = $gene || {};

$gene.availableFuncs = []; //list functions here
$gene.availableSymbols = [];  //these will be single characters, likely letters
$gene.bases = {};  //the codex for decoding sequecnes

var mutFile =       require('./genalgo-mutate.js'),
    seqFile =       require('./genalgo-sequence.js'),
    orgFile =       require('./genalgo-organism.js'),
    helpersFile =   require('./genalgo-helpers.js');







