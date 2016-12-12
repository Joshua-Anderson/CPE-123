var bullets = [];
var aliens = [];
var alienBullets = [];
var deadAliens = [];
var gameOver;
var alienKills = 0;
var fontC;

var playing = true;

function preload()
{
	space = loadImage('pics/final/space.jpg');
	pressStart = loadFont('fonts/PressStart2P.ttf');
}

function setup()
{
	var canvas = createCanvas(1000, 600);
	fontC = color(255, 255, 0);

	canvas.parent('game');

	drawAliens();

	space.loadPixels();
	for (var x = 0; x < space.width; x++)
	{
		for (var y = 0; y < space.height; y++) {
			var pixel = space.get(x, y);
			var bright = brightness(pixel);
			if (pixel[0] < 60 && pixel[1] < 60 && pixel[2] < 60)
			{
				space.set(x, y, [0, 0, 0, 0]);
				continue;
			}
			bright = Math.round(bright / 20) * 51;
			space.set(x, y, [bright-50, bright-50, bright, 255]);
		}
	}
	space.updatePixels();
}


function draw()
{
	if(playing) {
		background(10, 21, 79);

		fill(fontC);
		textSize(12);
		textFont(pressStart);
		text("Score:", 25, 25);
		text(alienKills*1000, 100, 25);

		rocket();

		//rocket bullets
		for (var i = bullets.length -1; i > -1; i--)
		{
			bullets[i].update();
			bullets[i].render();

			if (bullets[i].locY < 0 || bullets[i].locY > height)
			{
				bullets.splice(i, 1);
				continue;
			}

			for (var ii = aliens.length - 1; ii > -1; ii--)
			{
				if (aliens[ii].collision(bullets[i].locX, bullets[i].locY))
				{
					deadAliens.push(new alienDeath(aliens[ii].locX, aliens[ii].locY))
					aliens.splice(ii, 1);
					bullets.splice(i, 1);
					alienKills++;
					break;
				}
			}
		}

		//aliens
		for (var i = 0; i < aliens.length; i++)
		{
			aliens[i].update();
			aliens[i].render();
			if (aliens[i].locY > height-100)
			{
				playing = false;
			}
		}

		for (var i = deadAliens.length -1; i > -1; i--) {
			deadAliens[i].update();
			deadAliens[i].render();
			if(deadAliens[i].life < 0) {
				deadAliens.splice(i, 1);
			}
		}

		//alien bullets
		for (var i = alienBullets.length -1; i > -1; i--)
		{
			alienBullets[i].update();
			alienBullets[i].render();

			if (alienBullets[i].locY < 0 || alienBullets[i].locY > height)
			{
				alienBullets.splice(i, 1);
				continue;
			}

			if (Math.abs(alienBullets[i].locY - 540) < 30 && Math.abs(alienBullets[i].locX - mouseX) < 20)
			{
				alienBullets.splice(i, 1);
				playing = false;
			}
		}
		if(aliens.length < 1) {
			playing = false;
		}
	} else
	{
		background(0, 0, 0);

		image(space, 0, 0);


		//stroke(255,0,0);
		/// for checking text alingment
		//line(width/2, 0, width/2, height);
		//line(width/2 + 100, 0, width/2 + 100, height);
		//line(width/2 - 100, 0, width/2 - 100, height);
		//line(width/2 - 200, 0, width/2 - 200, height);
		//line(width/2 + 200, 0, width/2 + 200, height);
		//noStroke();

		fill(fontC);
		textSize(72);
		textFont(pressStart);
		if(aliens.length > 0) {
			text("GAME OVER", 175, height/2 + 20);
		} else {
			text("YOU WON", 250, height/2 + 20);
		}
		textSize(24);
		text("Your Score:", width/2 - 185, height/2 + 100);
		text(alienKills*1000, width/2 + 80, height/2 + 100);

		if (mouseX > width/2 - 250 && mouseX < width/2 + 250 && mouseY > height - 60 && mouseY < height)
		{
			fill(255, 0, 0);
		}

		text("Click here to replay", width/2 - 235, height - 30);
	}
}


function rocket()
{

	 var xloc = mouseX;

	 if(xloc<0)
			xloc = 0;

	 if(xloc>1000)
			xloc = 1000;

	 noStroke();

	 push();
	 translate(xloc, 500);

			fill(255, 120, 0);
			arc(7, 70, 23, 30, 3*PI/2, PI/3);
			arc(-7, 70, 23, 30, 2*PI/3, 3*PI/2);

			fill(255);
			beginShape();
				 vertex(0, 0);
				 bezierVertex(20, 15, 20, 50, 7, 70);
				 vertex(-7, 70);
				 bezierVertex(-20, 50, -20, 15, 0, 0);
			endShape();

			fill(255, 120, 0);
			beginShape();
				 vertex(0, 0);
				 bezierVertex(8, 5, 13, 16, 13, 19);
				 vertex(-13, 19);
				 bezierVertex(-13, 16, -8, 5, 0, 0);
			endShape();

			ellipse(0, 30, 15);
			fill(170, 200, 255);
			ellipse(0, 30, 12);

			stroke(255, 255, 0);
			strokeWeight(2);
			line(-12, 55, 12, 55);
			line(-11, 59, 11, 59);

			push();

				 translate(0, 72);
				 scale(random(.8, 1.2));

				 noStroke();
				 fill(255, random(0, 255), 0);
				 beginShape();
						vertex(-6, 0);
						vertex(-11, 13);
						vertex(-4, 6);
						vertex(-2, 18);
						vertex(1, 7);
						vertex(5, 15);
						vertex(6, 6);
						vertex(12, 13);
						vertex(6, 0);
				 endShape();

			pop();

	 pop();

}

function mouseClicked()
{
	if (playing)
	{
		bullets.push(new bullet (mouseX, 540, -10));
	} else if (mouseX > width/2 - 250 && mouseX < width/2 + 250 && mouseY > height - 60 && mouseY < height)
	{
		bullets = [];
		aliens = [];
		alienBullets = [];
		deadAliens = [];
		alienKills = 0;
		playing = true;
		drawAliens();
	}
}


function alien(x, y, vx, vy, rotUp)
{
		this.origX = x;
		this.locX = x;
		this.locY = y;
		this.velX = vx;
		this.velY = vy;
		this.rotUp = rotUp;
		this.rotTime = 0;


		//a function to update the particle each frame
		this.update = function()
		{
			this.locX += this.velX;
			this.locY += this.velY;
			if(Math.abs(this.origX-this.locX) > 20)
			{
				this.velX *= -1;
			}

			if(random (1000) < 1)
			{
				alienBullets.push(new alienBullet(this.locX, this.locY + 30, 10));
			}

			if (this.rotTime  > 75)
			{
				 this.rotUp = !this.rotUp;
				 this.rotTime = 0
				 ;
			}

			this.rotTime++;
	 }

	 //function to draw a particle
	 this.render = function()
	 {
			noStroke();
			push();
				 fill(90, 255, 0);
				 translate(this.locX, this.locY);
				 scale(.5);
				 beginShape();
						vertex(-35, -40);
						vertex(-25, -40);
						vertex(-25, -30);
						vertex(-15, -30);
						vertex(-15, -20);
						vertex(15, -20);
						vertex(15, -30);
						vertex(25, -30);
						vertex(25, -40);
						vertex(35, -40);
						vertex(35, -30);
						vertex(25, -30);
						vertex(25, -20);
						vertex(35, -20);
						vertex(35, -10);
						vertex(45, -10);
						vertex(45, 10);
						vertex(35, 10);
						vertex(35, 30);
						vertex(25, 30);
						vertex(25, 20);
						vertex(-25, 20);
						vertex(-25, 30);
						vertex(-35, 30);
						vertex(-35, 10);
						vertex(-45, 10);
						vertex(-45, -10);
						vertex(-35, -10);
						vertex(-35, -20);
						vertex(-25, -20);
						vertex(-25, -30);
						vertex(-35, -30);
						vertex(-35, -40);
				 endShape();

				 push();
						translate(50, 0);
						if(this.rotUp) {
							rotate(-PI);
						} else {
							rotate(0);
						}
						rect(-5, 0, 10, 30);
				 pop();
				 push();
						translate(-50, 0);
						if(this.rotUp) {
							rotate(PI);
						} else {
							rotate(0);
						}
						rect(-5, 0, -10, 30);
				 pop();

				 push();
						translate(-25, 35);
						if(this.rotUp) {
							rect(-20, -5, 10, 10);
						} else {
							rect(0, -5, 20, 10);
						}
				 pop();
				 push();
				 	translate(25, 30);
				 	rotate(-this.perRot);
					if(this.rotUp) {
						rect(10, 0, 10, 10);
					} else {
						rect(-20, 0, 20, 10);
					}
				 pop();

				 fill(10, 21, 79);
				 rect(-25, -10, 10, 10);
				 rect(15, -10, 10, 10);
			pop();
	 }

	 this.collision = function(x,y)
	 {
			if(Math.abs(this.locX-x) < 28 && Math.abs(this.locY-y) < 25) {
				return true;
			}
			return false;
	 }
} //end of particle object definition


function bullet(x , y, vel)
{
	 this.velY = vel;
	 this.locX = x;
	 this.locY = y;


	 //a function to update the particle each frame
	 this.update = function()
	 {
			this.locY += this.velY;
	 }

	 //function to draw a particle
	 this.render = function()
	 {
			noStroke();
			push();
				 fill(255,255,255);
				 translate(this.locX, this.locY);
				 rect(0, 0, 3, 10);
			pop();
	 }
} //end of particle object definition


function alienBullet(x , y, vel)
{
	this.velY = vel;
	this.locX = x;
	this.locY = y;


	//a function to update the particle each frame
	this.update = function()
	{
		this.locY += this.velY;
	}

	//function to draw a particle
	this.render = function()
	{
			noStroke();
			push();
				fill(255,150,150);
				translate(this.locX, this.locY);
				rect(0, 0, 4, 15);
			pop();
	 }
}

function alienDeath(x, y)
{
	this.life = 20;
	this.locX = x;
	this.locY = y;
	this.particles = [];

	for(var i = 0; i < 7; i++) {
		var rX = random(-3,3);
		var rY = random(-3,3);
		var vec = createVector(rX, rY).normalize();
		this.particles.push(new alienParticle(this.locX+rX, this.locY+rY, vec.x/2+random(-1/4, 0), vec.y/2+random(-1/4, 0)));
	}


	//a function to update the particle each frame
	this.update = function()
	{
		for(var i = 0; i < this.particles.length; i++) {
			this.particles[i].update();
		}
		this.life--;
	}

	//function to draw a particle
	this.render = function()
	{
		for(var i = 0; i < this.particles.length; i++) {
			this.particles[i].render();
		}
	}
}

function alienParticle(x, y, velX, velY)
{
	this.velX = velX;
	this.velY = velY;
	this.locX = x;
	this.locY = y;
	this.alpha = 175;


	//a function to update the particle each frame
	this.update = function()
	{
		this.locX += this.velX;
		this.locY += this.velY;
		alpha -= 10;
	}

	//function to draw a particle
	this.render = function()
	{
			noStroke();
			push();
				fill(90, 255, 0, this.alpha);
				translate(this.locX, this.locY);
				rect(0, 0, 10, 10);
			pop();
	}
}

function drawAliens()
{
	for(var x = 0; x < 10; x++)
	{
		for(var y = 0; y < 3; y++) {
			var velX = .5;
			if(y%2==0) {
				velX *= -1;
			}
			aliens.push(new alien(50+x*100, 50+y*60, velX, .15, random([true,false])));
		}
	}
}
