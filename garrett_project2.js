var xGun = 130;
var yGun = 25;
var scaleGun = 0.6;
var count = 0;
var xPen = 195;
var yPen = 50;
var scalePen = 0.6;
var rotGun = 0;
var rotPen = 0;

function gun() {

	var red = 61;
	var green = 236;
	var blue = 255;

	noStroke();

	drawGun(xGun, yGun, scaleGun, rotGun, xPen, yPen, scalePen, rotPen);

}

function drawGun(x, y, sc, rot, px, py, psc, prot) {

	push();

		translate(x, y);
		scale(sc);
		noStroke();
		rotate(rot);

		fill(110, 147, 232, 200);
		beginShape();
			vertex(458.7,415.3);
			vertex(462.3,407.7);
			vertex(472,398.3);
			vertex(479.3,395.4);
			vertex(483.3,399);
			vertex(484.7,405.4);
			vertex(501,423);
			vertex(508,429.3);
			vertex(551.3,478.7);
			vertex(549.7,487.7);
			vertex(553,490.7);
			vertex(558,492);
			vertex(561.7,494.3);
			vertex(561.7,496.7);
			vertex(556.7,494.3);
			vertex(549,493.7);
			vertex(546.3,494.3);
			vertex(546,498.7);
			vertex(548,503);
			vertex(549.7,508.7);
			vertex(555.7,519);
			vertex(558.3,524);
			vertex(558,526.7);
			vertex(561.7,530.3);
			vertex(556.3,540);
			vertex(552,551.3);
			vertex(549.3,564);
			vertex(545,575.3);
			vertex(537.7,585.3);
			vertex(528.3,592.7);
			vertex(522,595.7);
			vertex(516.3,593.7);
			vertex(510.2,586.7);
			vertex(502.3,578);
			vertex(495.7,569.3);
			vertex(494.7,565.3);
			vertex(501,559);
			vertex(503,553.7);
			vertex(502.7,548.3);
			vertex(508.7,543.3);
			vertex(510.2,537.3);
			vertex(510.2,532);
			vertex(505.3,527.7);
			vertex(499.4,523.7);
			vertex(497.3,523);
			vertex(496.3,521.3);
			vertex(491.7,520.7);
			vertex(483.7,515.3);
			vertex(476.7,506.7);
			vertex(470.3,493.7);
			vertex(468.3,483.7);
			vertex(472.7,474.7);
			vertex(475,469);
			vertex(473,464.3);
			vertex(468,458.7);
			vertex(477.3,448.3);
			vertex(480.3,440.7);
		endShape();

		fill(0);
		beginShape();
			vertex(498.2,490.5);
			vertex(491.8,483.5);
			vertex(485.8,478.3);
			vertex(481.5,476.5);
			vertex(477.7,476.5);
			vertex(474.5,478.3);
			vertex(472.5,480.5);
			vertex(471.2,483.5);
			vertex(471.2,487.2);
			vertex(472.5,492.5);
			vertex(476.2,499.5);
			vertex(483.5,510.5);
			vertex(488.7,516);
			vertex(493.3,518);
			vertex(498.2,518);
			vertex(502.5,516.3);
			vertex(504.7,513.5);
			vertex(506.5,509.3);
			vertex(507.3,505.7);
			vertex(506.2,504.3);
			vertex(504.5,504);
			vertex(498.3,500.5);
			vertex(495.8,502.8);
			vertex(492.3,504.8);
			vertex(488.5,505.3);
			vertex(484.7,504.8);
			vertex(481.8,503.5);
			vertex(479,501.3);
			vertex(477.5,499);
			vertex(479.7,499.3);
			vertex(482.7,501);
			vertex(486.3,502.2);
			vertex(490,501.5);
			vertex(493.8,498.7);
		endShape();

	pop();

	if (count == 1) {

	push();

		translate(px, py);
		scale(psc);
		noStroke();
		rotate(prot);

		fill(20, 20, 20);
		beginShape();
			vertex(269.4,276.4);
			vertex(274.5,271.1);
			vertex(280.1,268.8);
			vertex(288.1,267);
			vertex(295.3,267.6);
			vertex(302.6,269.5);
			vertex(311.6,274.6);
			vertex(319.1,279.4);
			vertex(327.4,285.8);
			vertex(330.5,285.1);
			vertex(338.1,291.5);
			vertex(339.5,296.4);
			vertex(339.5,299.5);
			vertex(341.1,303);
			vertex(341.9,310);
			vertex(341,315.4);
			vertex(338.5,320);
			vertex(341,323.8);
			vertex(341.1,326.1);
			vertex(340.3,328);
			vertex(337.6,328);
			vertex(334.6,326);
			vertex(328.8,332.9);
			vertex(324.3,337);
			vertex(318.6,341.9);
			vertex(319.6,344.9);
			vertex(319.1,347.4);
			vertex(316.4,347.4);
			vertex(312.4,345);
			vertex(305.6,346.5);
			vertex(299.3,347.4);
			vertex(293.6,345.8);
			vertex(290.3,342.9);
			vertex(286.6,343.1);
			vertex(281,339.6);
			vertex(278.4,336.1);
			vertex(277,328.8);
			vertex(271.1,320.8);
			vertex(266.9,309.8);
			vertex(264.1,298.6);
			vertex(264.1,289.8);
			vertex(266,282.4);
		endShape();

		fill(255);
		beginShape();
			vertex(305.5,345);
			vertex(301,341.6);
			vertex(297.1,337.4);
			vertex(292.9,330.5);
			vertex(290.4,323.9);
			vertex(289.1,317.8);
			vertex(289.1,311.1);
			vertex(291.4,305.6);
			vertex(295.1,301.4);
			vertex(300,297.4);
			vertex(305.5,295.6);
			vertex(311.5,295.6);
			vertex(317,296.3);
			vertex(321.4,297.9);
			vertex(326.4,300);
			vertex(331.1,303.8);
			vertex(336.5,309);
			vertex(339.1,312.4);
			vertex(339.1,315.8);
			vertex(335.8,322.5);
			vertex(328.3,331.8);
			vertex(320.5,338.6);
			vertex(314.1,342.9);
			vertex(306.6,345.6);
		endShape();

		fill(251, 180, 1);
		beginShape();
			vertex(287.3,297.1);
			vertex(293.3,291.6);
			vertex(296.1,299.5);
			vertex(293.4,300);
			vertex(290,299.5);
			vertex(287.3,297.9);
		endShape();

		fill(255);
		beginShape();
			vertex(277.1,295.6);
			vertex(279.1,295.6);
			vertex(280.3,297.1);
			vertex(280.3,299.5);
			vertex(279.3,300.8);
			vertex(277.1,300.8);
			vertex(276.3,300.8);
			vertex(275.5,299.5);
			vertex(275.5,298.2);
			vertex(275.5,296.6);
		endShape();

		beginShape();
			vertex(293.9,281);
			vertex(296.1,281);
			vertex(297.3,282.8);
			vertex(297.3,284.6);
			vertex(296.1,286.1);
			vertex(293.9,286.5);
			vertex(291.7,285.6);
			vertex(291.7,283.8);
			vertex(291.7,281.6);
		endShape();

		xPen -= 10;
		yPen -= 1;

		rotPen -= PI/300;

		if (xPen < -250) {
			count = 0;
		}
}

}

function mouseClicked() {

	count = 0;

	if (mouseX > 400 && mouseX < 500 && mouseY > 275 && mouseY < 400) {
		xPen = 195;
		yPen = 50;
		rotPen = 0;
		scalePen = 0.6;
		count = 1;
	}
}
