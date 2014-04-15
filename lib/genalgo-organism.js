var Organism = function(){
  //sequence is a chromosome
  //initialize chromosomes
  this.chromosomes = this.chromosomes || [];

  this.init = function(organismName, seq, seqName){
      //init organism
      //clobber this.chromosomes.
      this.chromosomes = [];
      var seq1 = new Sequence();
      seq1.init(seq, seqName);
      
      this.organismName = organismName;
      this.addChromosome(seq1);

    };

  
  //pushes given sequence to $gene.Organism.chromosomes array
  this.addChromosome = function(seq){
    this.chromosomes.push(seq);
  };

};


if (!($gene)) { var $gene = {};}
if (typeof module !== "undefined") {module.exports = new Organism();}
else {$gene.Organism = new Organism();}
