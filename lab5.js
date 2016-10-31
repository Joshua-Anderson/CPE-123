var theta = 0;
var s = 1;
var posotive = true;
var shapeColor = {"R": 255, "G": 255, "B": 255};
var c = [];
function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('canvas');
  for(var i = 0; i<6; i++)
    c.push([random(255),random(255),random(255)]);
}

function draw() {
  translate(200, 200);
  background(0,0,0);
  noStroke();
  for(var rot = 0; rot < 6; rot++) {
    push();
      rotate((PI/6)*rot);
      for(var num = 6; num > 0; num--) {
        rotate(theta+(((PI)/12)*num));
        fill(c[num-1][0], c[num-1][1], c[num-1][2]);
        for(var i = 0; i < theta; i += PI/(100*num)) {
          var pos = i;
          if(rot%2 == 0) {
            // draw half of shapes backwards.
            var pos = (1.5*PI) - i;
          }
          var x=-(0.046875*Math.pow(2, num-1))*s*Math.pow(cos(pos), 3);
          var y=-(0.046875*Math.pow(2, num-1))*s*Math.pow(sin(pos), 3);
          ellipse(x,y,num/2,num/2);
        }
      }
    pop();
  }

  if(theta < 1.5*PI) {
    theta += PI/200;
    s += 0.4;
  }
}
