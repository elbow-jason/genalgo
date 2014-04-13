

var Helpers = function(){

  this.torf = function(){
    return [true,false][this.ranAddr([true,false])];
    };

  //given an array or string, returns a random index.
  this.ranAddr = function(input){
    if (typeof input === ("string" || "object"))  { return Math.floor(Math.random() * input.length); }
    if (typeof input === "number")                { return Math.floor(Math.random() * input); }
    };

  // each sequence is made of 'bases'
  // bases is an object that is used to decode a sequence
  // each function available to an organism is assigned a single,
  // format = "base: function()"
  this.genBasesObj = function(symbols, funcs){
    var codex = {}; 
    if (symbols.length === funcs.length){
      for (var i = 0; i < symbols.length; i++){
        codex[symbols[i]] = funcs[i];  //initialize the codex
      }
    return codex;
    }
    else {return false}
    
  };

  this.randReverse = function(sequence){
      var seq;
      seq = torf() ? this.reverse(sequence) : sequence;
      return seq;
    };

  this.reverseSeq = function(sequence){
      return sequence.split("").reverse().join("");
    };

  this.getEndcap = function(sequence, capLength){
      return sequence.slice(0, capLength);
    };

  this.randomSeq = function(seqLength, symbols) {
    // seqLength should be positive integer
      var randSeq = "";
      for (var i = 0; i < seqLength; i++) {
        randSeq += symbols[Math.floor(Math.random() * symbols.length) ];
        }
      return randSeq;
  };
};


if (typeof module !== "undefined") {module.exports = new Helpers();}