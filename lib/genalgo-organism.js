var Organism = function(){
  //sequence is a chromosome
  //initialize chromosomes
  this.chromosomes    = [],
  this.organismName   = "",
  this.fuel           = 45,
  this.coords         = {},
  this.coords.x       = 0,
  this.coords.y       = 0;


  this.updateCoords = function(newX, newY){
    this.coords.x   = newX;
    this.coords.y   = newY;
  };
  
  //used for inheritance from previous generation as in replication (mitosis)
  //pushes given sequence to $gene.Organism.chromosomes array
  this.addChromosome = function(seqObj){
    this.chromosomes.push(seqObj);
  };

};


if (typeof module !== "undefined") {module.exports = Organism();}

