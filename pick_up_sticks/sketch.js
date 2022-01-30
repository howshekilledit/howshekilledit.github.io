let bg1 = '#705E78';
let bg2 = '#A5AAA3';

function setup() {
  createCanvas(windowWidth, windowHeight);
	frameRate(12);
}

function draw() {
	let bg = lerpColor(color(bg1), color(bg2), 0.01 * (frameCount%100)); 
  background(bg);
	
  for(var i = 0; i < 200; i++){
	if(i%2){
		stroke('#FEA443'); 
		} else {
		stroke('#F3FEB0'); 

		}
	line(random(width), random(height), random(width), random(height)); 	
	}
	
}
