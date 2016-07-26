var alienData = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
var shipX = 0;
var shotY = 525;
var shotX;
var shotFired = false;
var alienX;
var alienY;

function setup(){
  createCanvas(700, 700);
}

function draw(){
  background(255);
  for(var i = 0; i < alienData.length; i++){
    for(var j = 0; j < alienData[0].length; j++){
      if(alienData[i][j] == 0){
        ellipse(50 + (i * 100),50 + (j * 100),50,50);
      }
    }
  }
  if (keyIsPressed === true) {
    if(keyCode == LEFT_ARROW){
      shipX -= 5;
    }
    else if(keyCode == RIGHT_ARROW){
      shipX += 5;
    }
    else if(keyCode == UP_ARROW){
      shotFired = true;
      shotX = shipX
      shotY = 525
    }
  }
  if (shotFired == true){
    shotY -= 5;
  }
  rect(shipX,550,100,25);
  ellipse(shotX,shotY,10,10);
  for(var i = 0; i < alienData.length; i++){
    for(var j = 0; j < alienData[0].length; j++){
      console.log(shotX)
      boolX = shotX < (100 * i) + 75 && shotX > (100 * i) + 25;
      boolY = shotY < (100 * j) + 75 && shotY > (100 * j) + 25;
      if(boolX && boolY && alienData[i][j] == 0){
          shotFired = false;
          shotY = 1000;
          alienData[i][j] = 1;
      }
    }
  }
}
