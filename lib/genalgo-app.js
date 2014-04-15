//initialize $gene without clobbering (spelling?) it.
if (typeof require !== "undefined"){
var $gene = $gene || {};

$gene.availableFuncs      = [];   //list functions here
$gene.availableSymbols    = [];   //these will be single characters, likely letters
$gene.bases               = {};   //the codex for decoding sequecnes

$gene.Mutate        = require(process.cwd() + '/lib/genalgo-mutate.js');
$gene.Sequences     = require(process.cwd() + '/lib/genalgo-sequence.js');
$gene.Organism      = require(process.cwd() + '/lib/genalgo-organism.js');
$gene.Helpers       = require(process.cwd() + '/lib/genalgo-helpers.js');


}
if (typeof module !== "undefined") {module.exports = new $gene();}
