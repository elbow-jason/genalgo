

var Helpers = 
  {
  randIndex: "",
  randSeq: "",
  randReverse: "",
  randTorF: "",
  genBasesObj: "",
  reverseSeq: "",
  getEndcap: "",

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
Helpers.prototype.genBasesObj = function(symbols, funcs){
  var codex = {}; 
  if (symbols.length === funcs.length){
    for (var i = 0; i < symbols.length; i++){
      codex[symbols[i]] = funcs[i];  //initialize the codex
    }
  return codex;
  }
  else {return false}
  
};

Helpers.prototype.randReverse = function(sequence){
    var seq;
    seq = torf() ? Helpers.prototype.reverse(sequence) : sequence;
    return seq;
  };

Helpers.prototype.reverseSeq = function(sequence){
    return sequence.split("").reverse().join("");
  };

Helpers.prototype.getEndcap = function(sequence, capLength){
    return sequence.slice(0, capLength);
  };

Helpers.prototype.randSeq = function(seqLength, symbols) {
  // seqLength should be positive integer
    var randSeq = "";
    for (var i = 0; i < seqLength; i++) {
      randSeq += symbols[Math.floor(Math.random() * symbols.length) ];
      }
    return randSeq;
};


if (typeof module !== "undefined") {module.exports = new Helpers();}
else {var helpers = new Helpers;}
