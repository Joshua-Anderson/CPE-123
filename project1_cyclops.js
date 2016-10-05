function cyclops() {
	var scaleDF = 1;
	var xDF = 0;
	var yDF = 0;

	translate(-100, -160);

	noStroke()

	fill(252, 162, 140);

	//Head
	ellipse(200, 200, 50, 75);

	//Ear
	ellipse(168, 198, 10, 20);

	//Neck
	fill(252, 162, 140);
	triangle(170, 195, 164, 250, 195, 250);
	triangle(170, 195, 164, 250, 220, 250);

	//Beard
	fill(222, 116, 0);
	ellipse(200, 223, 55, 35);
	rect(172, 180, 10, 40);

	//Hair
	ellipse(195, 175, 45, 24);
	ellipse(177, 180, 10, 20);

	//Mouth
	fill(252, 162, 140);
	ellipse(204, 223, 20, 7);

	//Face Shape
	ellipse(187, 195, 20, 30);
	ellipse(192, 195, 35, 30);

	//Sideburn
	fill(222, 116, 0);
	rect(174, 180, 4, 40);

	//Nose
	fill(252, 162, 140);
	ellipse(204, 204, 7, 20);

	//Eye
	fill(255);
	ellipse(204, 196, 22, 10);

	//Pupil
	fill(158, 208, 251);
	ellipse(208, 195, 7);

	//Torso
	fill(252, 162, 140);
	beginShape();
		vertex(164, 245);
		vertex(130, 270);
		vertex(155, 340);
		vertex(235, 345);
		vertex(255, 270);
		vertex(215, 245);
	endShape(CLOSE);
	ellipse(180, 335, 60, 100);
	ellipse(178, 380, 40, 60);
	ellipse(205, 335, 60, 100);
	ellipse(206, 375, 45, 60);
	ellipse(190, 385, 50);

	//Club
		//Transformations
	push();
		translate(xDF, yDF);
		scale(scaleDF);
	fill(90, 145, 13);
	beginShape();
		vertex(252, 450);
		vertex(255, 457);
		vertex(340, 437);
		vertex(329, 405);
	endShape(CLOSE);
	ellipse(329, 423, 34, 34);
	beginShape();
		vertex(302, 422);
		vertex(311, 418);
		vertex(313, 408);
		vertex(305, 413);
	endShape(CLOSE);
	fill(251, 205, 0);
	ellipse(330, 433, 20, 10);
	pop();


	//Shoulder and Arm (Right)
	fill(252, 162, 140);
	ellipse(230, 295, 60, 80);
	ellipse(255, 330, 40, 90);
	ellipse(263, 370, 35, 80);
	ellipse(265, 390, 33, 90);
	ellipse(277, 440, 35, 40);

	//Sash (Remove Below)
	fill(222, 116, 0);
	beginShape();
		vertex(220, 250);
		vertex(197, 400);
		vertex(217, 400);
		vertex(232, 254);
	endShape(CLOSE);

	//Leg (Left)
	fill(252, 162, 140);
	ellipse(180, 485, 45, 110);
	ellipse(177, 530, 30, 70);
	ellipse(175, 560, 25, 50);

	//Leg (Right)
	ellipse(225, 485, 40, 110);
	ellipse(230, 530, 32, 70);
	ellipse(233, 560, 30, 50);
	ellipse(251, 580, 47, 18);

	//Shoe (Left)
	fill(222, 116, 0);
	ellipse(175, 580, 30, 17);
	fill(252, 162, 140);
	ellipse(175, 580, 24, 8);

	//Shoe(Right)
	fill(222, 116, 0);
	rect(230, 585, 43, 3);
	ellipse(264, 580, 24, 15);
	fill(252, 162, 140);
	ellipse(266, 580, 21, 13);

	//Clothing
	fill(222, 116, 0);
	beginShape();
		strokeJoin(ROUND)
		vertex(163, 400);
		vertex(156, 480);
		vertex(250, 480);
		vertex(223, 396);
	endShape(CLOSE);
	ellipse(180, 440, 50, 80);
	ellipse(213, 445, 50, 70);

	//Shoulder and Arm (Left)
	fill(252, 162, 140);
	ellipse(145, 300, 60, 80);
	ellipse(125, 330, 40, 90);
	ellipse(125, 370, 35, 90);
	ellipse(128, 410, 35, 90);
	ellipse(140, 460, 40, 45);
	fill(255);
	ellipse(147, 460, 7, 15);

	//Nipples
	fill(222, 116, 0);
	ellipse(180, 340, 7);
	ellipse(230, 340, 7);
}
