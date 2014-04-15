var Sequence = function() {
  this.sequence;
  this.seqLength;
  this.seqName;
  
  this.init = function(seq, seqName){
      this.sequence     = seq;
      this.seqLength    = this.sequence.length;
      this.seqName      = seqName;
  };
  };


if (!($gene)) {var $gene = {};}
if (typeof module !== "undefined") {module.exports = new Sequence();}
else {$gene.Sequence = new Sequence();}