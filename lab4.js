var white = "#FFFFFF";

var colorCombos = [
  {"Top": "#3F51B5", "Left": "#2196F3", "Right": "#03A9F4"},
  {"Top": "#4CAF50", "Left": "#8BC34A", "Right": "#CDDC39"},
  {"Top": "#FF5722", "Left": "#FF9800", "Right": "#FFC107"},
  {"Top": "#000000", "Left": "#607D8B", "Right": "#BDBDBD"},
  {"Top": "#673AB7", "Left": "#9C27B0", "Right": "#E91E63"}
]

function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('canvas');
  background(white);
  for(var i=0; i<Math.round(random(2,4)); i++) {
   var previous = {"X": Math.round(random(100,300)), "Y": Math.round(random(100,300))};
   var colorCombo = random(colorCombos);
   var s = random(0.25, 4);
   for(var ii=0; ii<10; ii++) {
     // valid spacing options:
     // -2, -1 OK
     // +2, -1 BAD OVERLAP
     //  0, +2 BAD OVERLAP
     //  0, -2 OK
     // -2, +1 OK
     // +2, +1 OK

     var x = random([-2,0,2]);
     var y = 0;

     if(x==0) {
       y = -2;
     } else if(x==2) {
       y = 1;
     } else {
       y = random([-1,1])
     }

     previous.X += 10*s*x;
     previous.Y += 10*s*y;
     cube(previous.X, previous.Y, s, colorCombo);
   }
  }
}

function cube(x,y, s, colorCombo) {
  push();
  translate(x,y);
  scale(s,s);
  noStroke()
  var topLeft = {"X": 0, "Y": 0};
  var bottomLeft = {"X": 0, "Y": 20};
  var topMiddle = {"X": 20, "Y": -10};
  var middleMiddle = {"X": 20, "Y": 10};
  var bottomMiddle = {"X": 20, "Y": 30};
  var topRight = {"X": 40, "Y": 0};
  var bottomRight = {"X": 40, "Y": 20};
  fill(colorCombo.Top);
  quad(topLeft.X, topLeft.Y,
       topMiddle.X,topMiddle.Y,
       topRight.X, topRight.Y,
       middleMiddle.X, middleMiddle.Y);
  fill(colorCombo.Left);
  quad(topLeft.X, topLeft.Y,
       middleMiddle.X, middleMiddle.Y,
       bottomMiddle.X, bottomMiddle.Y,
       bottomLeft.X, bottomLeft.Y);
  fill(colorCombo.Right);
  quad(middleMiddle.X, middleMiddle.Y,
       topRight.X, topRight.Y,
       bottomRight.X, bottomRight.Y,
       bottomMiddle.X, bottomMiddle.Y);
  pop();
}
