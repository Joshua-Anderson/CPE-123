// By Joshua Anderson and Joshua Boe
var gray = "#616161";
var lightRed = "#EF5350";
var brown ="#5d4037";
var black = "#000000"

// frame of the draw loop
var frame = 1;

function setup() {
  var canvas = createCanvas(660, 430);
  canvas.parent('canvas');
  push();
    translate(260, 30);
    drawSky();
    ground();
    hills();
  pop();
}

function draw() {
  noStroke();
  push();
    translate(260, 30);
    if (frame>150) {
      fill(black);
      rect(-260,-30,660,200);
      rect(-260,170,260,250);
    } else {
      fill("#FFFFFF");
      rect(-260,170,260,250);
    }
    towers();
    castle();
    towerTops();
    castleDetails(frame);
    drawSquiggle();
    if(frame<200) {
      drawPerson(160, 347, 1-frame/200, false);
      drawPerson(240, 347, 1-frame/200, true);
    }
    if (frame < 325) {
      frame++;
    } else {
      // repeat animation
      drawSky();
      frame = 1;
    }
  pop();
  cyclops();
}

function ground() {
  // ground
  var top = 370;
  noStroke();
  fill(gray);
  rect(0, top, 400, 30);

  //road
  fill(brown);
  rect(400/2 - 50, top, 100, 30);
}

function hills() {
  fill("#8BC34A");
  triangle(180, 165, 375, 75, 475, 200);
  triangle(100, 170, 190, 140, 250, 170);
}

function castle() {
  noStroke();
  fill("#DD2C00");
  var top = 170;
  var blockTop = top-15;
  rect(0, top, 400, 400-top-30);
  block(5, blockTop);
  block(30, blockTop);
  pillar(55);
  block(155, blockTop);
  block(180, blockTop);
  block(205, blockTop);
  block(230, blockTop);
  pillar(255);
  block(355, blockTop);
  block(380, blockTop);

  // pillar triangles out
  var triTop = 65;
  var triBottom = 80;
  var triLeftLeft = 48;
  var triRightLeft = 248;
  triangle(55, triTop, 55, triBottom, triLeftLeft, triTop);
  triangle(145, triTop, 152, triTop, 145, triBottom);
  triangle(255, triTop, 255, triBottom, triRightLeft, triTop);
  triangle(345, triTop, 352, triTop, 345, triBottom);

  // top of pillar
  var thickness = 15;
  var pWidth = 104;
  rect(triLeftLeft, triTop-thickness, pWidth, thickness);
  rect(triRightLeft, triTop-thickness, pWidth, thickness);

  // blocks of pillar
  var pillarBlockTop = triTop-thickness-15;
  var halfSpace = 14;

  hblock(triLeftLeft, pillarBlockTop);
  for(var i = 0; i<4; i++) {
    block(triLeftLeft+halfSpace+20*i, pillarBlockTop);
  }
  hblock(triLeftLeft+halfSpace+20*4, pillarBlockTop);

  hblock(triRightLeft, pillarBlockTop);
  for(var i = 0; i<4; i++) {
    block(triRightLeft+halfSpace+20*i, pillarBlockTop);
  }
  hblock(triRightLeft+halfSpace+20*4, pillarBlockTop);
}

function block(x,y) {
  rect(x,y, 15, 15)
}

function hblock(x,y) {
  rect(x,y, 10, 15)
}

function pillar(x) {
  rect(x, 65, 90, 105);
}

function castleDetails(frame) {
  // door
  noStroke();
  fill(gray);
  var offset = 0;
  if (frame > 75) {
    offset = (frame-75)/5;
    if (offset>50) {
      offset = 50;
    }
  }
  arc(200, 295, 100, 100, PI, TWO_PI);
  rect(150, 295, 100, 10+offset);
  fill(lightRed);
  rect(150, 305+offset, 100, 15);
  fill(brown);
  rect(190, 305+offset, 20, 15);
  fill("#FFFFFF");
  rect(150, 320+offset, 100, 50-offset);

  // logo above door
  fill("#FFEB3B");
  ellipse(200, 215, 30, 40);
  rect(185, 195, 30, 20);

  // windows
  fill("#FFFFFF");
  var windowSizeX = 8;
  var windowSizeY = 25;
  rect(290, 95, windowSizeX, windowSizeY);
  rect(75, 250, windowSizeX, windowSizeY);
  rect(325, 250, windowSizeX, windowSizeY);
  rect(90, 120, windowSizeX, 15);
  windowSizeX = 6;
  windowSizeY = 6;
  rect(162, 125, windowSizeX, windowSizeY);
  rect(225, 122, windowSizeX, windowSizeY);
}

function towers() {
  fill(lightRed);
  var top = 115;
  rect(0, 155, 60, 15);
  rect(20, top+10, 20, 30);
  rect(155, 155, 80, 15);
  rect(155, top-10, 30, 50);
  rect(215, top-10, 30, 50);
  rect(345, 120, 10, 50);
  rect(355, 140, 7, 15);
  rect(361, 120, 42, 50);
}

function towerTops() {
  // tops
  fill(gray);
  var top = 115;
  var flagTop = top-45;
  var leftFlagTip = 170;
  var rightFlagTip = 230;
  triangle(215, top-10, rightFlagTip, flagTop, 245, top-10);
  triangle(155, top-10, leftFlagTip, flagTop, 185, top-10);
  triangle(20, top+10, 30, top-15, 40, top+10);
  triangle(375, 120, 380, 110, 385, 120);

  // flags
  triangle(rightFlagTip, flagTop, rightFlagTip, flagTop-6, rightFlagTip+35, flagTop+5);
  triangle(leftFlagTip, flagTop, leftFlagTip, flagTop-6, leftFlagTip+35, flagTop-5);
}

// draw gradient draws a linar gradient accross the background
function drawSky() {
  // Start color #03A9F4, End color #FFFFFF
  var startRed = 12;
  var startGreen = 168;
  var startBlue = 244;

  for (var i = -30; i <= 170; i++) {
    percent = i/height*2.5;
    stroke(calcInterpolation(startRed, percent), calcInterpolation(startGreen, percent), calcInterpolation(startBlue, percent));
    strokeWeight(1);
    line(-260,i,400,i);
  }
}

function calcInterpolation(value, percent) {
  return value + (256-value)*percent;
}

// Draw a person at the given x and y position, scale, and whether or not to mirror the person on the x-axis.
function drawPerson(x, y, s, mirrored) {
  noStroke();
  fill(black)
  var sign = 1;
  if (mirrored) {
    sign = -1;
  }

  push();
  translate(x, y);
  scale(s,s);
  var leftSide = 0;
  var rightSide = 10;
  var leftBottomY = 17;
  var rightBottomY = 14;
  quad(0,0,sign*rightSide,0,sign*rightSide,rightBottomY,0,leftBottomY);
  quad(sign*2,-7,sign*8,-7,sign*8,0,sign*2,0);
  quad(sign*(rightSide+6),rightBottomY-25,sign*(rightSide+12),rightBottomY-26, sign*(rightSide+11),rightBottomY-17, sign*(rightSide+6),rightBottomY-20);
  stroke(black);
  line(sign*(rightSide+3), rightBottomY+8, sign*(rightSide+6), rightBottomY-25);
  strokeWeight(2);
  line(sign*(leftSide+1), leftBottomY, sign*leftSide, leftBottomY+5);
  line(sign*(rightSide-1), rightBottomY, sign*rightSide, rightBottomY+8);
  strokeWeight(3);
  line(sign*(leftSide-1), 3, sign*(leftSide-1), 12);
  line(sign*rightSide, 3, sign*(rightSide+4), 10);
  pop();
}

function drawSquiggle() {
  noStroke();
  fill(black);
  ellipse(200, 370, 20, 20);
  rect(192, 377, 5, 5);
  rect(203, 377, 5, 5);
}
