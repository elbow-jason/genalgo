var bugActions = {};

bugActions.moveLeft   = function(xCoord, distance){return xCoord - distance;};
bugActions.moveRight  = function(xCoord, distance){return xCoord + distance;};
bugActions.moveDown   = function(yCoord, distance){return yCoord - distance;};
bugActions.moveUp     = function(yCoord, distance){return yCoord + distance;};

bugActions.eat        = function(eater, eaten){
  
};