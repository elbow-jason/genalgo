// genalgo biofunctions

var BioFunctions = function(){

  this.replicate = function(oldOrganism, replicatedOrganismName){
    //init organism

    var replica = new Organism();
    //get half the fuel for a new child, take a half from parent
    var newFuel = Math.floor(oldOrganism.fuel / 2);
    oldOrganism.fuel = oldOrganism.fuel - newFuel;

    replica.fuel = newFuel;
    replica.organismName = replicatedOrganismName;
      //clobber this.chromosomes.
    replica.chromosomes = [];
    replica.chromosomes = oldOrganism.chromosomes.slice(0);
    return replica;
  };
};


if (typeof module !== "undefined") {module.exports = new bioFunctions();}
