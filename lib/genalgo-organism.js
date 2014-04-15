var Organism = function(){
  //sequence is a chromosome
  //initialize chromosomes
  this.chromosomes = [];
  this.organismName;
  this.fuel;

  //used for inheritance from previous generation as in replication (mitosis)
  //pushes given sequence to $gene.Organism.chromosomes array
  this.addChromosome = function(seqObj){
    this.chromosomes.push(seqObj);
  };


};


if (typeof module !== "undefined") {module.exports = Organism();}

