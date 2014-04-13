var Sequence = function(seq, seqName) {

  this.sequence     = seq || "";
  this.seqLength    = this.sequence.length;
  this.seqName      = seqName;
  };

if (typeof module !== "undefined") {module.exports = new Sequence();}