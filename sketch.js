var jungle, jungleImg
var monk, monkImg
var platform, platformImg

var baseGroup, baseImage

function preload(){
jungleImg= loadImage("jungle.jpg");
monkImg= loadImage("monkey.jpg");
platformImg= loadImage("base.jpg");
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    jungle = createSprite(windowWidth/2,windowHeight/2,1400,800);
   jungle.addImage("jung", jungleImg);
   jungle.scale= 2.2;
    jungle.velocityX=-2
}

function draw() {
//background color
background("white")
//infinite background
if (jungle.x < 0){
    jungle.x = jungle.width/4;
  }
drawSprites();
}