var Mutate = function(){

this.randMutation = function(){
console.log(this.getOwnPropertyNames());
};


this.point  = function(sequence, symbols, mutPointIndex, mutSymbolIndex){
  var sequence1             = sequence.split("");
  sequence1[mutPointIndex]  = symbols[mutSymbolIndex];

  return sequence1.join("");
};


this.mutPoint = function(sequence, symbols) {
  return this.point(sequence, symbols, helpers.ranAddr(sequence), helpers.ranAddr(symbols));
};


//fragment inside two slices, like a sandwich. 
this.insert = function(sequence, fragment, injectAddr){
  return sequence.slice(0,injectAddr)+fragment+sequence.slice(injectAddr, sequence.length);
};


//copies and injects (double chromosomal break) sequence or reversal
this.mutInsert = function(sequence){
  return  this.insert(sequence, 
          this.fragment(sequence , 
                         $gene.Helpers.randIndex(sequence), 
                         $gene.Helpers.randIndex(sequence)),
          $gene.Helpers.randIndex(sequence));
};


//returns random fragment from sequence
this.fragment = function(sequence, frag1Index, frag2Index){
  var finalFrag;
  if(frag1Index  <  frag2Index){   finalFrag = sequence.slice(frag1Index, frag2Index);}
  if(frag1Index  >  frag2Index){   finalFrag = sequence.slice(frag2Index, frag1Index);}
  if(frag2Index === frag1Index){   finalFrag = sequence[frag1Index];}
  return finalFrag;
};


this.fracture = function(sequence, seqIndex){
  var frag1 = sequence.substring(0,seqIndex);
      frag2 = sequence.substring(seqIndex, sequence.length);
      return [frag1, frag2];
};


this.transpose = function(frag1, frag2, frag3, frag4){
  return [frag1+frag2, frag3+frag4];
};

this.mutTranspose = function(seq1, seq2){
  var comboSeq1       = this.fracture(seq1, $gene.Helpers.randIndex(seq1));
  var comboSeq2       = this.fracture(seq2, $gene.Helpers.randIndex(seq2));
  return this.transpose(comboSeq1[0], comboSeq2[1],
                        comboSeq2[0], comboSeq1[1]);
};

//deletes 0-many bases. use numOfDeletions = 1 for singlepoint mut, and higher for more.
this.deletion = function(sequence, delIndex, numOfDeletions){
  var sequence1             = sequence.split("");
  sequence1 = sequence1.splice(delIndex, numOfDeletions);
  return "".join(sequence1);
};

};


if (typeof module !== "undefined") {module.exports = new Mutate();}

