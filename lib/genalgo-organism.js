var Organism = function(){
  //sequence is a chromosome
  //initialize chromosomes
  this.chromosomes = this.chromosomes || [];

  this.init = function(sequence, organismName){
      this.organismName = organismName;
      this.addChromosome(sequence);
    };

  
  //pushes given sequence to $gene.Organism.chromosomes array
  this.addChromosome = function(sequence){
    this.chromosomes.push(sequence);
  };


  //pushes param1 (sequence) to $gene.Organism.chromosomes array
};


if (!($gene)) { var $gene = {};}
if (typeof module !== "undefined") {module.exports = new Organism();}
else {$gene.Organism = new Organism();}
