var Organism = function(sequence){
  //sequence is a chromosome
  //initialize chromosomes
  this.chromosomes = [];

  //pushes given sequence to $gene.Organism.chromosomes array
  this.addChromosome = function(seq){
    this.chromosomes.push(seq);
  };

  //pushes param1 (sequence) to $gene.Organism.chromosomes array
  this.addChromosome(sequence);
};

if (typeof module !== "undefined") {module.exports = new Organism();}