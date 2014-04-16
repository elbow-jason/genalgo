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

  this.availableFuncs     = [];   //list functions here

  this.availableSymbols   = [];   //these will be single characters, likely letters
  this.basesCodex         = {};   //the codex for decoding sequecnes
};


if (typeof module !== "undefined") {module.exports = Organism();}

