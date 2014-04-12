var Sequence = function(seq, seqName) {

  this.sequence     = seq || "";
  this.seqLength    = this.sequence.length;
  this.seqName      = seqName;
  };

module.exports = new Sequence();