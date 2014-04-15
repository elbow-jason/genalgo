// genalgo biofunctions

var bioFunctions = function(){

  this.replicate = function(organism, organismName, fuel){
    var replica = new organism;
    replica.repInit(organismName, organism.chromosomes, fuel)
    return replica;

  };
};


if (typeof module !== "undefined") {module.exports = new bioFunctions();}
