var systems = [];

//define a single particle
function Particle(x , y, c)
{
   //the data associated with a particle
   this.accelY = 0.05; //gravity
   this.velX = random(-1, 1);
   this.velY = random(0.5, 2);
   this.pcolor = c;
   this.locX = x;
   this.locY = y;
   this.r = 8.0;
   this.life = 100;

   //a function to update the particle each frame
   this.updateP = function()
   {
      this.velY += this.accelY;
      this.locX += this.velX;
      this.locY += this.velY;
      this.life -= 1.0;

      // bounce particle on bottom
      if(this.locY >= 400 && this.velY > 0) {
        this.velY *= -1;
        this.velX *= -1;
      }
   };

   //function to draw a particle
   this.renderP = function()
   {
      noStroke();
      push();
         //very simple coloring
         dim = this.locX/5;
         fill(this.pcolor.levels[0]-dim, this.pcolor.levels[1]-dim, this.pcolor.levels[2]-dim, 200-dim);
         translate(this.locX, this.locY);
         ellipse(0, 0, this.r, this.r);
      pop();
   };
} //end of particle object definition


//define a group of particles as a particleSys
function PSys(sX, sY, num)
{
    //the data - lots of particles
   this.particles = [];
   var rc = random(100, 255);
   var gc = random(100, 255);
   var bc = random(100, 255);

   for (var i=0; i < num; i++)
   {
      this.particles.push(new Particle(sX, sY, color(rc+random(-30, 30), gc+random(-30, 30), bc+random(-30, 30))));
   }

    //function defining what to do each frame
   this.run = function()
   {
      for (var i=0; i < this.particles.length; i++)
      {
         //update each particle per frame
         this.particles[i].updateP();
         this.particles[i].renderP();
      }
   }
}

//normal set up
function setup()
{
   var canvas = createCanvas(400, 400);
   canvas.parent('canvas');

   //start a new particle system
   systems.push(new PSys(200, 200, 20));
}

function draw()
{
   background(0);

   for(var i = 0; i<systems.length; i++) {
     systems[i].run()
   }
}

function mouseClicked() {
  systems.push(new PSys(mouseX, mouseY, 20))
}
