var img1, img2, img3, img4;

function preload() {
  img1 = loadImage("lab8.jpg");
  img2 = loadImage("lab8.jpg");
  img3 = loadImage("lab8.jpg");
  img4 = loadImage("lab8.jpg");
}
function setup() {
  var canvas = createCanvas(260*2, 330*2);
  canvas.parent('canvas');
  image(img1,0,0);
  image(img2,260,0);
  image(img3,0,330);
  image(img4,260,330);
}



//  img1.loadPixels();
//    img2.loadPixels();
///* 2D loop to show how to loop in 2D into a 1D array */
//for( var y=0; y < img1.height; y++) {
//for (var x=0; x < img1.width; x++) {
///*map from 2D to 1D */
//loc = img2.width*y + x;
////for every other x, copy in the pixel to make stripes
//if (x%2 ==0) {
//img2.set(x, y, [255, 255, 255, 255]);
//}
//}
//}
//img2.updatePixels();
//}
//function draw() {
//image(img2, 0, 0);
//}
