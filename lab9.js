//To start the animation click anywhere in the window
var Dlocx;
var Dlocy;
var dirX, dirY;
var neckR, wingR, time, FlegR;

var neckDown = true;
var wingDown = false;
var animate = false;
var legDown = false;

var leg1rot = -3.1415/12;
var leg1up = true;
var leg2rot = 3.1415/8;
var leg2up = false;
var beakRot = 0;
var beakOpen = true;
var starPos = [];


//normal set up
function setup()
{
   var canvas = createCanvas(400, 400);
   canvas.parent('canvas');

   neckR = 0;
   wingR =-.2;
   Dlocx = width*.9;
   Dlocy = height/2;
   dirX = -1;
   dirY = 0;
   time = 0.5;
   FlegR = 0;
}

//normal draw
function draw()
{
   for(var i = 0; i<250;i++){
     stroke(255,i,0);
     line(0,i,400,i);
   }

   noStroke();

   for(var i = starPos.length; i < 50; i++) {
     var pos = {};
     pos.X = random(width);
     pos.Y = random(200);
     starPos.push(pos);
   }

   for(var i = 0; i < starPos.length; i++) {
     fill(255,255,0);
     starPos[i].X++;
     starPos[i].Y++;
     if (starPos[i].X > width) {
       starPos[i].X = random(width);
     }
     if (starPos[i].Y > 200) {
       starPos[i].Y = random(200);
     }

     ellipse(starPos[i].X, starPos[i].Y, 4, 4);
   }

   //foreground
   fill("#00E676");
   rect(0, 250, 400, 150);

   drawDuck();

   if (animate)
   {
     moveDuck();
   }
}

//method to control starting the duck over again and control animation on and off
function mousePressed()
{
   Dlocx = width*.9;
   animate = !animate;
}

//code to draw the duck with animation parameters neckR and wingR - other transforms align
//the peices to the correct pivot points
//Be very careful modifying this code - the structure of the push and pops are what builds
//the hierarchical relationships
function drawDuck()
{
   noStroke();

   push();

      //move the entire duck
      translate(Dlocx, Dlocy);
      scale(2); //scale the entire duck

      // draw legs
      drawLeg(leg1rot);
      drawLeg(leg2rot);


      // draw body
      fill(245, 226, 12);
      ellipse(0, 0, 40, 30);

      //draw neck and head with possible animation transforms
      push();
         translate(-16, 0); //move into pivot position
         rotate(neckR);  //rotate by neckR parameter
         ellipse(0, -10, 10, 18); //neck
         ellipse(0, -17, 14, 14); //head
         fill(0);
         ellipse(0, -19, 4, 4);  //eye
         fill(155, 111, 16);
         push();
          translate(-4,-18)
          //rotate(beakRot);
          triangle(-6,0,0,-3,0,0); //top beak
         pop();
         push();
          translate(-4,-18);
          rotate(-beakRot);
          triangle(-6,0,0,3,0,0); //bottom beak
         pop();
      pop();

      //draw wing with possible animation transforms
      fill(227, 208, 66);
      push();
         translate(-8, -5); //move into pivot position
         rotate(wingR); //animtion parameter to control wing flap
         ellipse(14, 0, 34, 20); //wing
      pop();


   pop();
}

//function to update all animation parameters - very simple scripted animation
function moveDuck()
{
   //update the ducks global location
   Dlocx = Dlocx + dirX*time;
   Dlocy = Dlocy + dirY*time;

   if (FlegR > radians(45))
   {
      legDown = false;
   }
   if (FlegR < radians(-45))
   {
     legDown = true;
   }

   if (legDown)
   {
      FlegR += 0.05;
   }
   else
   {
      FlegR -= 0.05;
   }


  //find out how much the neck is rotated to decide which way to rotate
  //these constrain how much the neck moves up and down
   if (neckR < -1)
   {
      neckDown = false;
   }
   if (neckR > 0.3)
   {
      neckDown = true;
   }

   // depending on which way we need to rotate, do so
   if (neckDown == true)
   {
      neckR -= .03;
   }
   else
   {
      neckR += .03;
   }

   //find out how much the wing is rotated to decide which way to rotate
   //these constrain how much the wing moves up and down
   if (wingR < -1.1)
   {
      wingDown = true;
   }
   if (wingR > 0.3)
   {
      wingDown = false;
   }

   // depending on which way we need to rotate, do so
   if (wingDown == false)
   {
      wingR -= .03;
   }
   else
   {
      wingR += .03;
   }

   if(leg1rot > PI/6 || leg1rot < -PI/10) {
     leg1up = !leg1up;
   }

   if(leg2rot > PI/6 || leg2rot < -PI/10) {
     leg2up = !leg2up;
   }

   if(leg1up) {
     leg1rot += PI/160;
   } else {
     leg1rot -= PI/160;
   }

   if(leg2up) {
     leg2rot += PI/160;
   } else {
     leg2rot -= PI/160;
   }

   if(beakRot < 0 || beakRot > PI/8) {
     beakOpen = !beakOpen;
   }

   if(beakOpen) {
     beakRot += PI/120;
   } else {
     beakRot -= PI/120;
   }
}

function drawLeg(rot) {
  push();
    rotate(rot);
    fill("#FF9800");
    quad(0,14,8,12,-7,26,-10,26)
    quad(-7,23,-19,25,-18,24,-5,20)
    quad(-3,20,-2,18,2,23,1,25);
  pop();
}
