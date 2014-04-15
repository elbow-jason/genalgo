var Organism = function(){
  //sequence is a chromosome
  //initialize chromosomes
  this.chromosomes = this.chromosomes || [];

  //for creation event (only at beginning of line, not for inheritance)
  this.createOrganism = function(organismName, seq, seqName, fuel){
      this.fuel = fuel;
      //init organism
      //clobber this.chromosomes.
      this.chromosomes = [];
      var seq1 = new Sequence();
      seq1.init(seq, seqName);
      
      this.organismName = organismName;
      this.addChromosome(seq1);
    };

    //used for inheritance from previous generation as in replication (mitosis)
    this.repInit = function(organismName, seqs, fuel){
      this.fuel = fuel;
      //init organism
      //clobber this.chromosomes.
      this.chromosomes = seqs;
      this.organismName = organismName;


    };


  //pushes given sequence to $gene.Organism.chromosomes array
  this.addChromosome = function(seq){
    this.chromosomes.push(seq);
  };

};


if (typeof module !== "undefined") {module.exports = Organism();}

