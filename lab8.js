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
  img1.loadPixels();
  bgnd(img1,color(255,0,0));
  shrt(img1,color(0,255,0));
  logo(img1,color(0,0,255));
  img1.updatePixels();
  image(img1,0,0);
  image(img2,260,0);
  image(img3,0,330);
  image(img4,260,330);
}

function bgnd(img, c) {
  for(var x = 0; x < 260; x++){
    for(var y = 0; y<250; y++) {
      if(x>100&&x<160&&y>50)
        continue;
      var px = img.get(x,y);
      if(allgtr(px,130)) {
        img.set(x,y,c);
      }
    }
  }
}

function allgtr(px,n){
  if(px[0]>n && px[1]>n && px[2]>n)
    return true
  return false
}

function allls(px,n){
  if(px[0]<n && px[1]<n && px[2]<n)
    return true
  return false
}

function shrt(img, c) {
  for(var x = 0; x < 260; x++){
    for(var y = 200; y<330; y++) {
      var px = img.get(x,y);
      if(allls(px,120)) {
        img.set(x,y,c);
      }
    }
  }
}

function logo(img, c) {
  for(var x = 180; x < 220; x++){
    for(var y = 310; y<330; y++) {
      var px = img.get(x,y);
      if(px[2]>150) {
        img.set(x,y,c);
      }
    }
  }
}
