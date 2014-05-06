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
  this.actions        = {};
  this.actions.A      = this.moveSmall()
  this.actions.B      = this.moveBig()
  this.actions.C      = this.changeDirection()
  this.actions.D      = this.lookAround()


  this.updateCoords = function(newX, newY){
    this.coords.x     = newX;
    this.coords.y     = newY;
  };

  //used for inheritance from previous generation as in replication (mitosis)
  //pushes given sequence to $gene.Organism.chromosomes array
  this.addChromosome = function(seqObj){
    this.chromosomes.push(seqObj);
  };


  this.replicate = function(replicatedOrganismName){
    //init organism
    //get half the fuel for a new child, take a half from parent
    var replica           = new Organism();
    var newFuel           = Math.floor(this.fuel / 2);
    this.fuel             = this.fuel - newFuel;
    replica.fuel          = newFuel;
    replica.organismName  = replicatedOrganismName;
    replica.chromosomes   = [];
    replica.chromosomes   = this.chromosomes.slice(0);
    return replica;
  };

  this.eatCheck = function(otherOrganism){
    if (this.coords.x = otherOrganism.coords.x && this.coords.y = otherOrganism.coords.y){
      if (this.organismName !== otherOrganism.organismName){
        this.ingest(otherOrganism);
      }
    }
  };

  this.ingest = function(food){
    this.fuel += food.fuel;
  };

  this.act = function(){
    var fuelcost = 0;

    for (chr in this.chromosomes){
      var actionKey = this.chromosomes[chr][currentIndex];
      this.actions[actionKey];
      fuelcost += 1;
    }

    organism.fuel           -= fuelcost;
    organism.currentIndex   += 1;
};




};


if (typeof module !== "undefined") {module.exports = Organism();}

