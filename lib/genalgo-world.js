

// a world 
  // - has finite times (turns), 
  // - has agents (an agent acts in time (takes its turn))
  // - has locations (a 2d coordinate system)
  // - kills organisms
  // - selects most fit organisms? (not necessary if organisms die...)
  // - respawns organisms

var world = function(xSize, ySize){
  this.xSize        = xSize;
  this.ySize        = ySize;
  this.agentList    = [];
  this.turn         = 0;
  this.turnLimit    = 1000;

  this.addAgent = function(agent){
    this.agentList.push(agent);
  };

  this.agentsActAndEat = function(){ 
    for (agent in this.agentList){
      agentList[agent].act();
      for (eats in this.agentList){
        agentList[agent].eatCheck(eats);
      }
    }
  };



};