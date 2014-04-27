//initialize $gena without clobbering (spelling?) it.
if (typeof require !== "undefined"){
var $gena = $gena || {};
$gena.Mutate        = require(process.cwd() + '/lib/genalgo-mutate.js');
$gena.Sequences     = require(process.cwd() + '/lib/genalgo-sequence.js');
$gena.Organism      = require(process.cwd() + '/lib/genalgo-organism.js');
$gena.helpers       = require(process.cwd() + '/lib/genalgo-helpers.js');
}
if (typeof module !== "undefined") {module.exports = $gena;}


$(document).ready(function(){ 
  $gena           = $gena || {};
  $gena.bugList   = {},
  maxBugs         = 45,
  bugCount        = 0;

  var makeNewBug = function(bugsObj){
    var bugName = "bug" + bugCount;
    if (bugsObj[bugName] === true) {
      console.log(bugName + " already exists");
      throw new Error("bug name already exists.");
    } 
    else {
      bugsObj[bugName] = new Organism();
    }
  };




});