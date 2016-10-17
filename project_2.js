var gray = "#616161";
var white = "#FFFFFF";

var starPos = [];
var subPos = [];
var invasion = false;
var mainSub = {"X": 160, "Y": 200, "S": 1, "SPD": 2};

function setup() {
  var canvas = createCanvas(500, 400);
  canvas.parent('canvas');

  subPos = [mainSub];
}

function draw() {
  background("#000000");
  stars();
  planet();
  for (var i=0; i<subPos.length; i++) {
    if (invasion) {
      subPos[i].X -= subPos[i].SPD;
      subPos[i].Y += subPos[i].SPD;
      subPos[i].S += 0.001;
    }
    sub(subPos[i].X, subPos[i].Y, subPos[i].S);
  }
  gun();
}

function planet() {
  noStroke();
  fill(white);
  ellipse(-750, 200, 2000, 2000);

  // gradient
  var maxRadius = 2000;
  var minRadius = 1200;

  for(var i = maxRadius; i>minRadius; i--) {
    var percent = (i-minRadius)/(maxRadius-minRadius);
    var color = (256*percent)-1;
    fill(color,color,255);
    ellipse(-750, 200,i,i);
  }
}

function stars() {
  for(var i = starPos.length; i < 50; i++) {
    var pos = {};
    pos.X = random(200, width);
    pos.Y = random(height);
    starPos.push(pos);
  }

  for(var i = 0; i < starPos.length; i++) {
    fill(white);
    starPos[i].X++;
    starPos[i].Y++;
    if (starPos[i].X > width) {
      starPos[i].X = random(200, width);
    }
    if (starPos[i].Y > height) {
      starPos[i].Y = random(height);
    }

    ellipse(starPos[i].X, starPos[i].Y, 2, 2);
  }
}

// draw a sub at the given x,y, and scale
function sub(x,y, s) {
  noStroke();
  fill(gray);
  push();
    translate(x,y);
    scale(s,s);
    ellipse(0,0,130,130);
    ellipse(180,-10,20,20);
    // body
    quad(10, -64, 180, -20, 180, 0, 10, 65);
    // tower
    quad(115, -34, 130, -43, 150, -37, 165, -20);
    quad(130, -41, 130, -65, 150, -57, 150, -35);
    stroke(gray);
      // fins
      strokeWeight(5);
      line(180,-20,180,-32);
      strokeWeight(3);
      line(190,-10,195,-10);
      // antena
      line(140,-60,140,-80);
      line(144,-55,144,-75);
    noStroke();
  pop();
}

function mousePressed() {
  if (mouseX > mainSub.X-50 && mouseX < mainSub.X+200  && mouseY > mainSub.Y-50 && mouseY < mainSub.Y + 50) {
    invasion = !invasion;
    if(invasion) {
      subPos = [mainSub];

      for (var i=0; i < 10; i++) {
        var newSub = {"X": random(250), "Y": random(400), "S": 0.25, "SPD": random(1,3)};
        subPos.push(newSub)
      }
    } else {
      mainSub = {"X": 160, "Y": 200, "S": 1, "SPD": 2};
      subPos = [mainSub];
    }
  }
}
