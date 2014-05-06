

// a world has times (turns), iterates through agents (an agent acts in time (takes its turn)), and has locations (a 2d coordinate system)

var world = function(xSize, ySize){
  this.xSize        = xSize;
  this.ySize        = ySize;
  this.agentList    = [];
  this.turn         = 0;

  this.addAgent = function(agent){
    this.agentList.push(agent);
  };
};