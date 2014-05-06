var Organism = function(){
  //sequence is a chromosome
  //initialize chromosomes
  this.actionValue    = 3;
  this.currentIndex   = 0;
  this.chromosomes    = [],
  this.organismName   = "",
  this.fuel           = 45,
  this.coords         = {},
  this.coords.x       = 0,
  this.coords.y       = 0;
  this.lifeStatus     = 'alive';

  this.updateCoords = function(newX, newY){
    this.coords.x   = newX;
    this.coords.y   = newY;
  };

  //used for inheritance from previous generation as in replication (mitosis)
  //pushes given sequence to $gene.Organism.chromosomes array
  this.addChromosome = function(seqObj){
    this.chromosomes.push(seqObj);
  };


  this.replicate = function(oldOrganism, replicatedOrganismName){
    //init organism
    //get half the fuel for a new child, take a half from parent
    var replica = new Organism();
    var newFuel = Math.floor(oldOrganism.fuel / 2);
    oldOrganism.fuel = this.fuel - newFuel;
    replica.fuel = newFuel;
   
    replica.organismName = replicatedOrganismName;
    replica.chromosomes = [];
    replica.chromosomes = oldOrganism.chromosomes.slice(0);
    return replica;
  };


  this.ingest = function(organism, food){
    organism.fuel += food.fuel;
    food.fuel = 0;
  };

  this.act = function(){
    var fuelcost = 0;
    for (chr in this.chromosomes)

    organism.fuel -= cost;
};




};


if (typeof module !== "undefined") {module.exports = Organism();}

