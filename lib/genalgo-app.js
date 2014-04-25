//initialize $gene without clobbering (spelling?) it.
if (typeof require !== "undefined"){
var $gene = $gene || {};



$gene.Mutate        = require(process.cwd() + '/genalgo-mutate.js');
$gene.Sequences     = require(process.cwd() + '/genalgo-sequence.js');
$gene.Organism      = require(process.cwd() + '/genalgo-organism.js');
$gene.Helpers       = require(process.cwd() + '/genalgo-helpers.js');


}
if (typeof module !== "undefined") {module.exports = $gene;}

debugger;
