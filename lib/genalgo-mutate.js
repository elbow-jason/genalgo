
var Mutate = function(){

  this.point  = function(sequence, symbols, mutPointIndex, mutSymbolIndex){
    sequence                  = sequence.split("");
    sequence[mutPoint]        = symbols[mutSymbolIndex];
    return sequence.join("");
    };

  this.mutPoint = function(sequence, symbols) {
    return this.point(sequence, symbols, this.ranAddr(sequence), ranAddr(symbols));
  };

  //fragment inside two slices, like a sandwich. 
  this.insert = function(sequence, fragment, injectAddr){
    return sequence.slice(0,injectAddr)+fragment+sequence.slice(injectAddr, sequence.length);
  };

//copies and injects (double chromosomal break) sequence or reversal
  this.mutInsert = function(sequence){
    return this.insert(sequence,  this.fragment(sequence),  ranAddr(sequence)   );
  };

  //returns random fragment from sequence
  this.fragment = function(sequence, frag1Addr, frag2Addr){
    var   finalFrag;

    if(frag1Addr < frag2Addr)     finalFrag = sequence.slice(frag1Addr, frag2Addr);
    if(frag1Addr > frag2Addr)     finalFrag = sequence.slice(frag2Addr, frag1Addr);
    if(frag2Addr === frag1Addr)   finalFrag = sequence[frag1Addr];
    return finalFrag;
  };


  this.transpose = function(seqArray, capLength1, capLength2){
        var frag1           = $gene.getEndcap(sequence1, capLength1),
            frag2           = $gene.getEndcap(sequence2, capLength2);
            sequence1       = sequence[1].split(""),
            sequence2       = sequence[2].split(""),
            transposedSeqs  = [];
  };
};

module.exports = new Mutate();