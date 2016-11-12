var spiders = [
  {
    "width": 50,
    "mode": 0,
    "center": {
      "X": 350,
      "Y": 350,
      "S": 5
    },
    "legs": []
  },
  {
    "width": 25,
    "mode": 0,
    "center": {
      "X": 300,
      "Y": 300,
      "S": 3
    },
    "legs": []
  },
  {
    "width": 35,
    "mode": 0,
    "center": {
      "X": 375,
      "Y": 75,
      "S": 4
    },
    "legs": []
  },
  {
    "width": 35,
    "mode": 0,
    "center": {
      "X": 275,
      "Y": 110,
      "S": 4
    },
    "legs": []
  },
  {
    "width": 15,
    "mode": 0,
    "center": {
      "X": 300,
      "Y": 195,
      "S": 2
    },
    "legs": []
  }
]

var leafs = [];

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('canvas');

  for(var i = 0; i < spiders.length; i++) {
    for(var ii = 0; ii < 6; ii++) {
      spiders[i].legs.push(-PI/2);
    }
  }
  for(var i = 0; i < 40; i++) {
    if(i < 10) {
      x = random(150,200);
    } else if (i > 18) {
      x = random(25,75);
    } else {
      x = random(75,150);
    }
    leafs.push({"X": x,
                "Y": random(25, 375),
                "S": 0.6-x/450,
                "R": random(0, 2*PI),
                "LC": color(x/2+random(-10,10),110-(175-x)/3,30),
                "SC": color("#4E342E")
               })
  }
}

function draw() {
  drawSky();
  fill(0,0,0);
  stroke("#4E342E")
  strokeWeight(5);
  line(0,25,375,40);
  line(0,100,275,75);
  line(0,375,350,300);
  line(0,225,300,275);
  line(0,200,300,180);
  for(var i = 0; i < leafs.length; i++) {
    drawLeaf(leafs[i].X, leafs[i].Y, leafs[i].S, leafs[i].R, leafs[i].LC, leafs[i].SC);
  }
  for(var i = 0; i < spiders.length; i++) {
    fill(0,0,0);
    noStroke();
    ellipse(spiders[i].center.X, spiders[i].center.Y, spiders[i].center.S);
    for(var ii = 0; ii < spiders[i].legs.length; ii++) {
      drawSpider(spiders[i], ii);
      if(spiders[i].mode == 0) {
        if(ii% 2 == 0) {
          if(ii == 0 || spiders[i].legs[ii-2]-spiders[i].legs[ii] >= PI/15) {
            if(spiders[i].legs[ii] < 7*PI/12) {
              spiders[i].legs[ii] += PI/240;
            } else {
              spiders[i].mode = 1;
            }
          }
        } else {
          if(ii == 1 || spiders[i].legs[ii-2]-spiders[i].legs[ii] <= -PI/15) {
            if(spiders[i].legs[ii] > -121*PI/80) {
              spiders[i].legs[ii] -= PI/240
            }
          }
        }
      } else if(spiders[i].mode == 1) {
        if(spiders[i].legs[ii] < 3*PI/4) {
          spiders[i].legs[ii] += PI/240
        } else {
          spiders[i].mode = 2;
        }
      } else {
        if(spiders[i].legs[ii] < -PI/2 && spiders[i].legs[ii] > -5*PI/2) {
          spiders[i].legs[ii] -= PI/240;
        }

        if(spiders[i].legs[ii] > -PI/2) {
          spiders[i].legs[ii] -= PI/240;
        }
      }
    }
  }
}

function drawSpider(spider, leg) {
  var x = spider.center.X + cos(spider.legs[leg])*spider.width;
  var y = spider.center.Y +sin(spider.legs[leg])*spider.width;
  stroke(0,0,0);
  strokeWeight(1);
  line(spider.center.X, spider.center.Y,spider.center.X,spider.center.Y-spider.width);
  line(spider.center.X, spider.center.Y,x,y);
  noStroke();
  ellipse(x,y, spider.center.S*0.5);
}

function drawLeaf(x, y, s, r, lc, sc) {
  push()
  fill(lc);
  noStroke();
  translate(x,y);
  rotate(r);
  scale(s,s);
  beginShape()
  curveVertex(0,0);
  curveVertex(30,-15);
  curveVertex(80,-30);
  curveVertex(100, -15);
  curveVertex(110,20);
  curveVertex(100,80);
  curveVertex(70,130);
  curveVertex(0,160);
  curveVertex(-70,130);
  curveVertex(-100,80);
  curveVertex(-110,20);
  curveVertex(-100, -15);
  curveVertex(-80,-30);
  curveVertex(-30,-15);
  endShape(CLOSE);
  stroke(sc);
  strokeWeight(4);
  line(0,158,0,-15)
  pop()
}


// draw gradient draws a linar gradient accross the background
function drawSky() {
  for (var i = 0; i <= 400; i++) {
    percent = i/400;
    stroke(84 + (141-84)*percent, 110, 122-(121-99)*percent);
    strokeWeight(1);
    line(0,i,400,i);
  }
}
