
var helpers = {};
//given an array or string, returns a random index.
helpers.randIndex = function(input){
  if (typeof input === "number")                { return Math.floor(Math.random() * input); }
  else { return Math.floor(Math.random() * input.length); }
  };


helpers.torf = function(){
  return [true,false][helpers.randIndex([true,false])];
  };


// each sequence is made of 'bases'
// bases is an object that is used to decode a sequence
// each function available to an organism is assigned a single,
// format = "base: function()"
helpers.genBasesObj = function(symbols, funcs){
  var codex = {}; 
  if (symbols.length >= funcs.length){
    for (var i = 0; i < symbols.length; i++){
      codex[symbols[i]] = funcs[i];  //initialize the codex
    }
  return codex;
  }
  else {return false}
  
};

helpers.randReverse = function(sequence){
    return helpers.torf() ? helpers.reverseSeq(sequence) : sequence;
  };

helpers.reverseSeq = function(sequence){
    var seq1 = sequence.reverse();
    return seq1;
  };

helpers.randSeq = function(seqLength, symbols) {
  // seqLength should be positive integer
    var randSeq = "";
    for (var i = 0; i < seqLength; i++) {
      randSeq += symbols[helpers.randIndex(symbols)];
      }
    return randSeq;
  };

  

//for creation event (only at beginning of line, not for inheritance)
helpers.createOrganism = function(organismName, seq, seqName, fuel){

    //init organism
    var createdOrganism                 = new Organism;
        createdOrganism.fuel            = fuel;
        createdOrganism.organismName    = organismName;
        createdOrganism.chromosomes     = [];
    var seq1                            = new Sequence();

    //add sequence to new organism's chromosomes
    seq1.init(seq, seqName);
    createdOrganism.addChromosome(seq1);

    return createdOrganism;
};


helpers.takeTurn = function(){};

if (typeof module !== "undefined") {module.exports = helpers;}
