$gene.Organism = function(sequence){
  //sequence is a chromosome
  //initialize chromosomes
  this.chromosomes = [];

  //pushes given sequence to $gene.Organism.chromosomes array
  this.addChr = function(seq){
    this.chromosomes.push(seq);
  };

  //pushes param1 (sequence) to $gene.Organism.chromosomes array
  this.addChr(sequence);
};