
$gene = {};
$gene.availableFuncs = []; //list functions here
$gene.availableSymbols = [];  //these will be single characters, likely letters
$gene.bases = {};

$gene.torf = function(){
    var tf = [true,false];
    return tf[$gene.ranAddr(tf)];
  };

//given an array or string, returns a random index.
$gene.ranAddr = function(sequence){
    return Math.floor(Math.random() * sequence.length);
  };

// each sequence is made of 'bases'
// bases is an object that is used to decode a sequence
// each function available to an organism is assigned a single,
// format = "base: function()"
$gene.genBasesObj = function(symbols, funcs){
  codex = {};
  if (symbols.length === funcs.length){
    for (var i = 0; i < symbols.length; i++){
      codex[symbols[i]] = funcs[i];
    }
  }
  return codex;
};

$gene.randomSeq = function(seqLength, symbols) {
  // seqLength should be positive integer
    var randSequence; 
    for (var i = 0; i < seqLength; i++) {
      randSequence += symbols[Math.floor(Math.random() * symbols.length) ];
      }
    return randSequence;
};

$gene.Organism = function(sequence){
  //sequence is a chromosome
  //initialize chromosomes
  this.chromosomes = [];

  //pushes given sequence to $gene.Organism.chromosomes array
  this.addChr = function(seq){
    this.chromosomes.push(seq);
  };

  //pushes param1 (sequence) to $gene.Organism.chromosomes array
  this.addChr(sequence);
};

$gene.Mutate = function(){

  this.point  = function(sequence, symbols){
    sequence[$gene.ranAddr(sequence)] = symbols[$gene.ranAddr(symbols)];
    return sequence;
  };

  //copies and injects (double chromosomal break) sequence or reversal
  this.inject = function(sequence){
    //to reverse or not to reverse
    //that is the question...
    var fragment = this.fragment(this.randReverse(sequence));
    return sliceSeq(sequence, fragment);
  };

  this.sliceSeq = function(sequence, fragment){
    //get address in seq to perform slice
    //slice the sequence and inject the fragment
    injectAddr = $gene.ranAddr(sequence);
    fragment = sequence.slice(0,injectAddr) + fragment + sequence.slice(injectAddr, sequence.length-1);
  }

  //returns random fragment from sequence
  this.fragment = function(sequence){
    return sequence.substring($gene.ranAddr(sequence),$gene.ranAddr(sequence));
  };

  this.transpose = function(sequence1, sequence2){
    var frag1 = this.getEndcap(this.randReverse(sequence1)); 
    var frag2 = this.getEndcap(this.randReverse(sequence2));
  };

  this.randReverse = function(sequence){
    return this.torf() ? this.reverse(sequence) : sequence;
  };

  this.reverse = function(sequence){
    return sequence.split("").reverse().join("");
  };

  this.getEndcap = function(sequence){
    return slice(0, $gene.ranAddr(sequence));
  };
};



