function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
  fill(255, 0, 255);
  stroke('cyan');
   translate(100, 100); //transalte first keeps axis at center
  rotateX(frameCount);
  rotateY(frameCount); 
// translate(100, 100); //transalte after moves axis
  box(50); 
}