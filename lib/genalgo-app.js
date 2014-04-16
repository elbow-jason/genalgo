//initialize $gene without clobbering (spelling?) it.
if (typeof require !== "undefined"){
var $gene = $gene || {};



$gene.Mutate        = require(process.cwd() + '/lib/genalgo-mutate.js');
$gene.Sequences     = require(process.cwd() + '/lib/genalgo-sequence.js');
$gene.Organism      = require(process.cwd() + '/lib/genalgo-organism.js');
$gene.Helpers       = require(process.cwd() + '/lib/genalgo-helpers.js');


}
if (typeof module !== "undefined") {module.exports = new $gene();}
