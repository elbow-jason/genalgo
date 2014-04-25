var mutate = {};

mutate.randMutation = function(){

};


mutate.point  = function(sequence, symbols, mutPointIndex, mutSymbolIndex){
  sequence[mutPointIndex]  = symbols[mutSymbolIndex];
  return sequence;
};




//fragment inside two slices, like a sandwich. 
mutate.insert = function(sequence, fragment, injectAddr){
  return sequence.slice(0,injectAddr)+fragment+sequence.slice(injectAddr, sequence.length);
};


//copies and injects (double chromosomal break) sequence or reversal
mutate.mutInsert = function(sequence){
  return  mutate.insert(sequence, 
          mutate.fragment(sequence , 
                         helpers.randIndex(sequence), 
                         helpers.randIndex(sequence)),
          helpers.randIndex(sequence));
};


//returns random fragment from sequence
mutate.fragment = function(sequence, frag1Index, frag2Index){
  var finalFrag;
  if(frag1Index  <  frag2Index){   finalFrag = sequence.slice(frag1Index, frag2Index);}
  if(frag1Index  >  frag2Index){   finalFrag = sequence.slice(frag2Index, frag1Index);}
  if(frag2Index === frag1Index){   finalFrag = sequence[frag1Index];}
  return finalFrag;
};


mutate.fracture = function(sequence, seqIndex){
  var frag1 = sequence.slice(0,seqIndex);
      frag2 = sequence.slice(seqIndex, sequence.length);
      return [frag1, frag2];
};

mutate.mutFracture = function(sequence){
  return mutate.fracture(sequence, helpers.randIndex(sequence));
};


mutate.transpose = function(frag1, frag2, frag3, frag4){
  return [frag1+frag2, frag3+frag4];
};

mutate.mutTranspose = function(seq1, seq2){
  var comboSeq1       = mutate.fracture(seq1, helpers.randIndex(seq1));
  var comboSeq2       = mutate.fracture(seq2, helpers.randIndex(seq2));
  return mutate.transpose(comboSeq1[0], comboSeq2[1],
                        comboSeq2[0], comboSeq1[1]);
};



//deletes 0-many bases. use numOfDeletions = 1 for singlepoint mut, and higher for more.
mutate.deletion = function(sequence, delIndex, numOfDeletions){
  sequence1 = sequence1.splice(delIndex, numOfDeletions);
  return 
};

mutate.MutDelPoint = function(sequence){};



mutate.mutPoint = function(sequence, symbols) {
  return mutate.point(sequence, symbols, helpers.ranAddr(sequence), helpers.ranAddr(symbols));
};


if (typeof module !== "undefined") {module.exports = mutate;}

