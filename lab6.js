var tardisBody = [
  [0,0,0,100,-1],
  [0,0,50,0,1],
  [50,0,50,100,1],
  [0,100,50,100,-1]
]

var window1 = [
  [5,10,20,10,1],
  [5,10,5,25,-1],
  [20,10,20,25,1],
  [5,25,20,25,-1]
]

var window2 = [
  [30,10,45,10,1],
  [30,10,30,25,-1],
  [45,10,45,25,1],
  [30,25,45,25,-1]
]

var top1 = [
  [2,3,46,3,-1],
  [2,3,2,-8,1],
  [2,-8,46,-8,1],
  [46,-7, 46,3,1]
]

var lamp = [
  [20,-8,27,-8,-1],
  [20,-8,20,-17,1],
  [20,-17,27,-17,1],
  [27,-17,27,-8,1]
]

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('canvas');
  background(255,255,255);
  translate(220, 170);
  scale(1.25, 1.25);
  noStroke();
  // draw background
  var x = -220;
  var y = -170;
  while(x < 190) {
    var d;
    while(y < 230) {
      rx = x+random(-5,5);
      ry = y+random(-5,5);
      d = dist(rx,ry,-75,-50);
      console.log(d)
      fill(230+random(-d/10, d/10), 250-d/2, 40+random(-20,40), 125);
      ellipse(rx,ry,20+d/8,d/20);
      y += d/20;
    }
    x += 5;
    y = -170;
  }

  for(var x = -50; x < 150; x += 1) {
    for(var y = -50; y < 230; y += 1) {
      rx = x+random(-2,2);
      ry = y+random(-2,2);
      if(chooseFill(rx,ry)) {
        ellipse(rx,ry,3+random(0,2),3+random(0,2));
      }
    }
  }
}

function chooseFill(x,y) {

  // Tardis Door
  var imp = impLine(x,y,25,0,25,100)
  if(y > 0 && y < 100 && Math.abs(imp) < 250) {
    fill(random(20),random(20),random(100,140));
    return true;
  }

  // Tardis Dividers
  var imp = impLine(x,y,0,40,50,40);
  if(x > 0 && x < 50 && Math.abs(imp) < 150) {
    fill(random(20),random(20),random(100,140));
    return true;
  }

  var imp = impLine(x,y,0,70,50,70);
  if(x > 0 && x < 50 && Math.abs(imp) < 150) {
    fill(random(20),random(20),random(100,140));
    return true;
  }

  if(insideArr(x,y,window1, color(255-random(50),255-random(50),255-random(50)))) {
    return true;
  }

  if(insideArr(x,y,window2, color(255-random(50),255-random(50),255-random(50)))) {
    return true;
  }

  if(insideArr(x,y,lamp, color(255-random(50),255-random(50),255-random(50)))) {
    return true;;
  }

  for(var i = 0; i < top1.length; i++) {
    var imp = impLine(x,y,top1[i][0],top1[i][1],top1[i][2],top1[i][3]);
    if(x > 3 && x < 47 && y > -9 && y < 3 && Math.abs(imp) < 75) {
      fill(random(40),random(40),random(40));
      return true;
    }
  }

  if(insideArr(x,y,top1, color(random(50),random(50),245+random(-30,10), 100))) {
    return true;
  }

  if(insideTardis(x,y)) {
    return true;
  }

  return false
}

function insideTardis(x,y) {
  var onLine = false;
  for(var i = 0; i < tardisBody.length; i++) {
    var imp = impLine(x,y,tardisBody[i][0],tardisBody[i][1],tardisBody[i][2],tardisBody[i][3])
    // return if one check fails
    if(Math.abs(imp) < 100) {
      onLine = true;
      continue;
    }
    if((tardisBody[i][4] > 0 && imp < 0) || (tardisBody[i][4] < 0 && imp > 0)) {
      return false;
    }
  }

  if(onLine) {
    fill(random(40),random(40),random(40));
  } else {
    fill(random(50),random(50),245+random(-30,10), 100);
  }
  return true;
}

function insideArr(x,y, arr, c) {
  for(var i = 0; i < arr.length; i++) {
    var imp = impLine(x,y,arr[i][0],arr[i][1],arr[i][2],arr[i][3]);
    if((arr[i][4] > 0 && imp < 0) || (arr[i][4] < 0 && imp > 0)) {
      return false;
    }
  }

  fill(c);
  return true;
}

function impLine(x,y,x0,y0,x1,y1) {
  return (y0-y1)*x + (x1-x0)*y + x0*y1 - x1*y0;
}
