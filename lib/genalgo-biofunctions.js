// genalgo biofunctions

var biofuncs = {};

biofuncs.replicate = function(oldOrganism, replicatedOrganismName){
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


biofuncs.ingest = function(organism, food){
    organism.fuel += food.fuel;
    food.fuel = 0;
  };

biofuncs.act = function(organism, organismAndKey, func, value, cost){
    func(organismAndKey, value);
    organism.fuel -= cost;
};



if (typeof module !== "undefined") {module.exports = new bioFunctions();}
