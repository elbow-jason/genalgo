
$gene.torf = function(){
    var tf = [true,false];
    return tf[$gene.ranAddr(tf)];
  };

//given an array or string, returns a random index.
$gene.ranAddr = function(input){
  if (typeof input === ("string" || "object"))  { return Math.floor(Math.random() * sequence.length); }
  if (typeof input === "number")                { return Math.floor(Math.random() * input); }
  };

// each sequence is made of 'bases'
// bases is an object that is used to decode a sequence
// each function available to an organism is assigned a single,
// format = "base: function()"
$gene.genBasesObj = function(symbols, funcs){
  var codex = {};
  if (symbols.length === funcs.length){
    for (var i = 0; i < symbols.length; i++){
      codex[symbols[i]] = funcs[i];
    }
  }
  return codex;
};

$gene.randReverse = function(sequence){
    var seq;
    seq = $gene.torf() ? this.reverse(sequence) : sequence;
    return seq;
  };

$gene.reverse = function(sequence){
    return sequence.split("").reverse().join("");
  };

$gene.getEndcap = function(sequence, capLength){
    return sequence.slice(0, capLength);
  };




$gene.randomSeq = function(seqLength, symbols) {
  // seqLength should be positive integer
    var randSeq = "";
    for (var i = 0; i < seqLength; i++) {
      randSeq += symbols[Math.floor(Math.random() * symbols.length) ];
      }
    return randSeq;
};
