
var Mutate = {
  point         : "",
  mutPoint      : "",
  insert        : "",
  mutInsert     : "",
  fragment      : "",
  transpose     : "",
};



Mutate.point  = function(sequence, symbols, mutPointIndex, mutSymbolIndex){
  var sequence1             = sequence.split("");
  sequence1[mutPointIndex]  = symbols[mutSymbolIndex];

  return sequence1.join("");
};


Mutate.mutPoint = function(sequence, symbols) {
  return Mutate.point(sequence, symbols, Helpers.ranAddr(sequence), Helpers.ranAddr(symbols));
};


//fragment inside two slices, like a sandwich. 
Mutate.insert = function(sequence, fragment, injectAddr){
  return sequence.slice(0,injectAddr)+fragment+sequence.slice(injectAddr, sequence.length);
};


//copies and injects (double chromosomal break) sequence or reversal
Mutate.mutInsert = function(sequence){
  return Mutate.insert(sequence,  Mutate.fragment(sequence),  Helpers.ranAddr(sequence)   );
};


//returns random fragment from sequence
Mutate.fragment = function(sequence, frag1Addr, frag2Addr){
  var   finalFrag;
  if(frag1Addr < frag2Addr)     finalFrag = sequence.slice(frag1Addr, frag2Addr);
  if(frag1Addr > frag2Addr)     finalFrag = sequence.slice(frag2Addr, frag1Addr);
  if(frag2Addr === frag1Addr)   finalFrag = sequence[frag1Addr];
  return finalFrag;
};


Mutate.transpose = function(seqArray, capLength1, capLength2){
      var frag1           = Helpers.getEndcap(sequence1, capLength1),
          frag2           = Helpers.getEndcap(sequence2, capLength2);
          sequence1       = sequence[1].split(""),
          sequence2       = sequence[2].split(""),
          transposedSeqs  = [];
};

if (typeof module !== "undefined") {module.exports = new Mutate();}