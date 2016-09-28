function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('canvas');
}

function draw() {
  background("#FF9800");
  drawSunset();
  drawTree();
  translate(65, 375);
  rotate(-1*PI/8);
  drawBody(0, 0);
}

function drawSunset() {
  var steps = [
    "#F44336",
    "#F44733",
    "#F54B30",
    "#F5502D",
    "#F6542A",
    "#F65927",
    "#F75D24",
    "#F86222",
    "#F8661F",
    "#F96B1C",
    "#F96F19",
    "#FA7416",
    "#FA7813",
    "#FB7D11",
    "#FC810E",
    "#FC860B",
    "#FD8A08",
    "#FD8F05",
    "#FE9302",
    "#FF9800"
  ]

  drawGradient(100, 100, 1000, steps);
}

function drawTree() {
  // stump
  fill("#795548");
  rect(300, 375, 50, 50);
  // tree
  fill("#4CAF50");
  var base = 375;
  triangle(250, base, 325, 175, 400, base);
}

function drawBody(x,y) {
  var grey = "#9E9E9E";
  fill(grey);

  //core
  var bodyTop = y-120;
  var bodyRightX = x+200;
  var bodyLeftX = x+40;
  quad(x,y, bodyLeftX, bodyTop, bodyRightX, bodyTop, x+250, y);

  // neck
  var neckTopX = bodyRightX+20;
  var neckTopY = bodyTop-30;
  quad(bodyRightX, bodyTop, neckTopX, neckTopY, bodyRightX+50, bodyTop-10, bodyRightX, bodyTop+50);

  // head
  var headTopY = neckTopY-40;
  quad(neckTopX, neckTopY+10, neckTopX, headTopY, neckTopX+100, neckTopY+20, neckTopX+80, neckTopY+60);

  // eyes
  var eyeTipX = neckTopX+10;
  var eyeTipY = headTopY-10;
  quad(neckTopX, headTopY, eyeTipX, eyeTipY, neckTopX+42, headTopY+7, neckTopX+45, headTopY+30);

  var tailX = bodyLeftX- 40;
  var tailY = bodyTop - 20;

  stroke(grey);
    strokeWeight(3);
    //ears
    var ear1X = eyeTipX+5;
    var ear1Y = eyeTipY-10;
    var ear2X = eyeTipX+15;
    var ear2Y = eyeTipY-6;
    line(ear1X, eyeTipY+3, ear1X, ear1Y);
    line(ear2X, eyeTipY+8, ear2X, ear2Y);
    // tail
    line(bodyLeftX, bodyTop, tailX, tailY);
  noStroke();

  // tail
  ellipse(tailX, tailY, 15, 15);

  // ears
  var earSizeX = 15;
  var earSizeY = 10;
  fill("#EEEEEE")
  ellipse(ear1X, ear1Y, earSizeX, earSizeY);
  ellipse(ear2X, ear2Y, earSizeX, earSizeY);

  // nose
  fill("#424242");
  quad(neckTopX+95, neckTopY+30, neckTopX+99, neckTopY+22, neckTopX+108, neckTopY+28, neckTopX+103, neckTopY+37);

  // bottom
  rect(x,y, 250, -5);

  // glow
  fill("#FF1744");
  var glowTop = headTopY+8;
  var glowBottom = headTopY+25;
  quad(neckTopX+45, glowBottom, neckTopX+42, glowTop, neckTopX+47, glowTop, neckTopX+50, glowBottom);

  // leash
  var blue = "#03A9F4";
  fill(blue);
  quad(bodyRightX+3, bodyTop-5, bodyRightX+8, bodyTop-12, bodyRightX+42, bodyTop, bodyRightX+36, bodyTop+7);
  ellipse(bodyRightX+39, bodyTop+8, 15, 15);
  stroke(blue);
    strokeWeight(4);
    line(bodyRightX+7, bodyTop-11, 0, -300);
  noStroke();
}

// draw gradient draws a circular gradient with the given center, width, and steps
function drawGradient(x, y, width, steps) {
  noStroke();
  var radius = width/2;
  var pixelsPerStep = radius/steps.length;

  for (var r = steps.length-1; r > 0; --r) {
    fill(steps[r]);
    ellipse(x, y, pixelsPerStep*(r+1), pixelsPerStep*(r+1));
  }
}
