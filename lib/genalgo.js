
var $gene = $gene || {};

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
    sequence = sequence.split("");
    sequence[$gene.ranAddr(sequence)] = symbols[$gene.ranAddr(symbols)];
    return sequence.join("");
  };

  //copies and injects (double chromosomal break) sequence or reversal
  this.insert = function(sequence){
    //to reverse or not to reverse
    //that is the question...
    var frag;
    frag            = $gene.randReverse(sequence)
    frag            = this.fragment(frag);
    frag            = this.sliceSeq(sequence, frag);
    return frag;
  };

  this.sliceSeq = function(sequence, fragment){
    //get address in seq to perform slice
    //slice the sequence and inject the fragment
    var toBeSliced;
    var injectAddr  = $gene.ranAddr(sequence);
    toBeSliced      = sequence.slice(0,injectAddr) + fragment + sequence.slice(injectAddr, sequence.length);
    return toBeSliced;
  };

  //returns random fragment from sequence
  this.fragment = function(sequence){
    var frag1Addr   = $gene.ranAddr(sequence),
        frag2Addr   = $gene.ranAddr(sequence),
        finalFrag;

    if(frag1Addr < frag2Addr)     finalFrag = sequence.slice(frag1Addr, frag2Addr);
    if(frag1Addr > frag2Addr)     finalFrag = sequence.slice(frag2Addr, frag1Addr);
    if(frag2Addr === frag1Addr)   finalFrag = sequence[frag1Addr];
    return $gene.randReverse(finalFrag);
  };

  this.transpose = function(seqArray, capLength1, capLength2){
    var sequence1 = $gene.randReverse(seqArray[0])
    var frag1 = this.getEndcap(sequence1, capLength1); 
    var frag2 = this.getEndcap(seqArray[1], capLength2);



  };


};



