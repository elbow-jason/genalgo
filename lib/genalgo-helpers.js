var Helpers = function(){

  this.torf = function(){
      var tf = [true,false];
      return tf[this.ranAddr(tf)];
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
        codex[symbols[i]] = funcs[i];
      }
    }
    return codex;
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


module.exports = new Helpers();