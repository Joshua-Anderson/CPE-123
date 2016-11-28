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
  bgnd(img1,color(255,0,255));
  shrt(img1,color(0,255,0));
  logo(img1,color(0,0,255));
  hair(img1,75,175,75);
  face(img1,0,50,50);
  img1.updatePixels();
  img2.loadPixels();
  bgnd(img2,color(255,255,0));
  shrt(img2,color(255,0,0));
  logo(img2,color(255,255,0));
  hair(img2, 75,75,175);
  face(img2,50,0,50);
  img2.updatePixels();
  img3.loadPixels();
  bgnd(img3,color(0,0,255));
  shrt(img3,color(255,255,0));
  logo(img3,color(255,0,0));
  hair(img3, 175,75,175);
  face(img3,50,100,50);
  img3.updatePixels();
  img4.loadPixels();
  bgnd(img4,color(0,255,0));
  shrt(img4,color(255,0,255));
  logo(img4,color(0,0,255));
  hair(img4, 175,175,75);
  face(img4,200,0,0);
  img4.updatePixels();
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

function hair(img, r, g, b) {
  for(var x = 40; x < 220; x++){
    for(var y = 0; y < 130; y++) {
      var px = img.get(x,y);
      var bght = 25.5*Math.floor(brightness(px)/10);
      if(y<90 && allls(px,200)) {
        img.set(x,y,color(bght+r,bght+g,bght+b));
      } else if(y>=90 && allls(px,100)) {
        img.set(x,y,color(bght+r,bght+g,bght+b));
      }
    }
  }
}

function face(img, r, g, b) {
  for(var x = 40; x < 200; x++){
    for(var y = 90; y < 250; y++) {
      var px = img.get(x,y);
      if(x<100||x>160) {
        if(px[2]>130) {
          continue;
        }
      }
      var bght = 51*Math.floor(brightness(px)/20);
      var gmin = 10;
      if(y<120) {
        gmin = 70;
      } else if(y>200) {
        gmin = 100;
      }
      if(px[1]>gmin&&px[1]<200) {
        img.set(x,y,color(bght+r,bght+g,bght+b));
      }
    }
  }
}
