
function preload(){
  BTank1IMG=loadImage("images/BTank1.png");
  BTank2IMG=loadImage("images/BTank2.png");
  BTank3IMG=loadImage("images/BTank3.png");
  BTank4IMG=loadImage("images/BTank4.png");
  RTank1IMG=loadImage("images/RTank1.png");
  RTank2IMG=loadImage("images/RTank2.png");
  RTank3IMG=loadImage("images/RTank3.png");
  RTank4IMG=loadImage("images/RTank4.png");

  BG1IMG=loadImage("images/Hit-the-Beach.jpg");

  SB1IMG=loadImage("images/StartButton");
}
function setup() {
  createCanvas(900,600);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  
  drawSprites();
}