var points = [];
var tris = [];
var centerPoints = [];
var maxDist = 150;

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('canvas');
  frameRate(40);
  for(var i=0; i<100; i++) {
    points.push({"X": random(width), "Y": random(height), "SPX": random(-1,1), "SPY": random(-1,1)})
  }

  for(var i=0; i<10; i++) {
    points[i].R = random(255);
    points[i].G = random(255);
    points[i].B = random(255);
    centerPoints.push(points[i]);
  }
}

function draw() {
  noStroke();
  background("#000000");
  fill("#FFFFFF")

  for(var i=0; i<points.length; i++) {
    ellipse(points[i].X, points[i].Y, 4, 4)
    points[i].X += points[i].SPX;
    if(points[i].X > width || points[i].X < 0) {
      points[i].SPX  *= -1;
    }

    points[i].Y += points[i].SPY;
    if(points[i].Y > width || points[i].Y < 0) {
      points[i].SPY *= -1;
    }
  }

  while (tris.length < 15) {
    var p1, p2,p3;
    var ok = false;

    // make sure all points are unique
    while (!ok) {
      p1 = random(centerPoints);
      p2 = random(points);
      p3 = random(points);

      if (p1 != p2 && p2 != p3 && p3 != p1 &&
          dist(p1.X, p1.Y, p2.X, p2.Y) < maxDist-50 &&
          dist(p2.X, p2.Y, p3.X, p3.Y) < maxDist-50 &&
          dist(p3.X, p3.Y, p1.X, p1.Y) < maxDist-50) {
        ok = true;
      }
    }
                           // opacity is the final value
    tris.push([p1, p2, p3, 75])
  }

  for(var i = tris.length-1; i >= 0; i--) {
    if (dist(tris[i][0].X, tris[i][0].Y, tris[i][1].X, tris[i][1].Y) > maxDist ||
        dist(tris[i][1].X, tris[i][1].Y, tris[i][2].X, tris[i][2].Y) > maxDist ||
        dist(tris[i][2].X, tris[i][2].Y, tris[i][0].X, tris[i][0].Y) > maxDist) {
          // lower opacity of triangle
          tris[i][3] -= 2;
    } else if (tris[i][3] < 100) {
      tris[i][3]++;
    }

    if (tris[i][3] < 50) {
      tris.splice(i, 1)
    }  else {
        fill(tris[i][0].R, tris[i][0].G, tris[i][0].B, tris[i][3]);
        stroke(tris[i][0].R, tris[i][0].G, tris[i][0].B);
        triangle(tris[i][0].X, tris[i][0].Y,
                 tris[i][1].X, tris[i][1].Y,
                 tris[i][2].X, tris[i][2].Y);
    }
  }
}
