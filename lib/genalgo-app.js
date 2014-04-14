//initialize $gene without clobbering (spelling?) it.
var $gene = $gene          || require(process.cwd() + '/lib/genalgo-helpers.js');

$gene.availableFuncs      = [];   //list functions here
$gene.availableSymbols    = [];   //these will be single characters, likely letters
$gene.bases               = {};   //the codex for decoding sequecnes

$gene.Mutate        = require(process.cwd() + '/lib/genalgo-mutate.js');
$gene.Sequences     = require(process.cwd() + '/lib/genalgo-sequence.js');
$gene.Organism      = require(process.cwd() + '/lib/genalgo-organism.js');

/*
$gene.prototype.availableFuncs      = [];   //list functions here
$gene.prototype.availableSymbols    = [];   //these will be single characters, likely letters
$gene.prototype.bases               = {};   //the codex for decoding sequecnes
*/
debugger;


if (typeof module !== "undefined") {module.exports = new $gene();}