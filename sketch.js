var backgroungImg;
var jet,jetImg;
var gun,gunImg;
var city,cityImg;
var bombmb,bombImg;
var bombShoot,shootImg;
var score=0;

function preload(){
backgroungImg=loadImage("images/background.jpg");
jetImg=loadImage("images/jet.png")
gunImg=loadImage("images/tope.png")
cityImg=loadImage("images/city.webp")
bombImg=loadImage("images/bomb.png")
shootImg=loadImage("images/shoot.png")
blastImg=loadImage("images/blast.png")
shootSound=loadSound("sound.mp3")
}

function setup(){
createCanvas(1580,850)

city=createSprite(1820,420)
city.addImage(cityImg)
city.scale=1.19
city.debug=true;

gun=createSprite(500,770)
gun.addImage(gunImg);
gun.scale=0.70

jetGroup=new Group();
bombGroup=new Group();

}


function draw(){
background(backgroungImg)
fill("black")
textSize(30)
text("score:"+score,90,105)

drawSprites();
}