function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  fill(0);
}

function mouseMoved() {
  rect(mouseX, mouseY, 1, 1);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
