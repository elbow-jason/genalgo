
var Helpers = function(){
//given an array or string, returns a random index.
this.randIndex = function(input){
  if (typeof input === "number")                { return Math.floor(Math.random() * input); }
  else { return Math.floor(Math.random() * input.length); }
  };


this.torf = function(){
  return [true,false][this.randIndex([true,false])];
  };


// each sequence is made of 'bases'
// bases is an object that is used to decode a sequence
// each function available to an organism is assigned a single,
// format = "base: function()"
this.genBasesObj = function(symbols, funcs){
  var codex = {}; 
  if (symbols.length >= funcs.length){
    for (var i = 0; i < symbols.length; i++){
      codex[symbols[i]] = funcs[i];  //initialize the codex
    }
  return codex;
  }
  else {return false}
  
};

this.randReverse = function(sequence){
    var seq;
    seq = this.torf() ? this.reverseSeq(sequence) : sequence;
    return seq;
  };

this.reverseSeq = function(sequence){
    return sequence.split("").reverse().join("");
  };

this.randSeq = function(seqLength, symbols) {
  // seqLength should be positive integer
    var randSeq = "";
    for (var i = 0; i < seqLength; i++) {
      randSeq += symbols[this.randIndex(symbols)];
      }
    return randSeq;
  };
};

if (typeof module !== "undefined") {module.exports = new Helpers();}
else {var helpers = new Helpers();}

