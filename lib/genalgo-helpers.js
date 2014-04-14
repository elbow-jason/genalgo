

var Helpers = function(){
  helpers = {
    randIndex: "",
    randSeq: "",
    randReverse: "",
    randTorF: "",
    genBasesObj: "",
    reverseSeq: "",
    getEndcap: "",
  };
  return helpers;
  };

//given an array or string, returns a random index.
Helpers.randIndex = function(input){
  if (typeof input === "number")                { return Math.floor(Math.random() * input); }
  else { return Math.floor(Math.random() * input.length); }
  };


Helpers.torf = function(){
  return [true,false][Helpers.randIndex([true,false])];
  };


// each sequence is made of 'bases'
// bases is an object that is used to decode a sequence
// each function available to an organism is assigned a single,
// format = "base: function()"
Helpers.genBasesObj = function(symbols, funcs){
  var codex = {}; 
  if (symbols.length >= funcs.length){
    for (var i = 0; i < symbols.length; i++){
      codex[symbols[i]] = funcs[i];  //initialize the codex
    }
  return codex;
  }
  else {return false}
  
};

Helpers.randReverse = function(sequence){
    var seq;
    seq = torf() ? Helpers.reverseSeq(sequence) : sequence;
    return seq;
  };

Helpers.reverseSeq = function(sequence){
    return sequence.split("").reverse().join("");
  };

Helpers.getEndcap = function(sequence, capLength){
    return sequence.slice(0, capLength);
  };

Helpers.randSeq = function(seqLength, symbols) {
  // seqLength should be positive integer
    var randSeq = "";
    for (var i = 0; i < seqLength; i++) {
      randSeq += symbols[randIndex(symbols)];
      }
    return randSeq;
};


if (typeof module !== "undefined") {module.exports = new Helpers();}
else {var helpers = Helpers;}

