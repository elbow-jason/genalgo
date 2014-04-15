var Sequence = function() {


  this.seq = [];
  this.seqLength = 0;
  this.seqName = "";

  var convert = function(seq){
    return seq.split("");
  };


  this.init = function(seq, seqName){
      this.seq          = convert(seq);
      this.seqLength    = this.seq.length;
      this.seqName      = seqName;

  this.refresh = function(){
    this.seqLength = this.seq.length;
  };


  };
};


if (typeof module !== "undefined") {module.exports = new Sequence();}
