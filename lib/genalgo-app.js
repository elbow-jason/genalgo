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
  
  var bugList     = {},
  maxBugs         = 45,
  bugCount        = 0;

  var makeNewBugs = function(bugsObj$){
    for (var i = 0; i < maxBugs; i++){
      var bugName = "bug" + i;
      if (bugsObj[bugName] === true) {
        console.log(bugName + " already exists");
        throw new Error("bug name already exists.");
      } 
      else {
        var seq = helpers.randSeq(12, mlist.actions);
        bugsObj[bugName] = helpers.createOrganism (bugName, seq, chro1, 45);
      }
    }
    return bugsObj;
  };



});