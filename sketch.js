const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gamestate;
var form1;
var riddle1;
var barImage,woodenBackground;
var bottle1,bottle2,bottle2,bottle3;
var slingshot;
var platform;
function preload(){
    barImage = loadImage("images/barImage.jpg");
    woodenBackground = loadImage("images/woodenBackground.jpg");
}
function setup(){
    engine = Engine.create();
    world = engine.world;
createCanvas(displayWidth,displayHeight);
form1 = new Form();

riddle1 = new Riddle();
bottle1 = new Bottle2(200,200,50,100);
bottle2 = new Bottle2(180,200,50,100);
bottle3 = new Bottle2(160,200,50,100);
bottle4 = new Bottle(190,150,50,100);
ball = new Ball(500,200,20,20);
slingshot = new SlingShot(ball.body,{x:600,y:200});
platform = new Platform(150,400,150,500)
gamestate=0;


}
function draw(){
    Engine.update(engine);
background(woodenBackground);
if (gamestate===0){
    
    form1.display();
    
}
else if (gamestate===1){
   // form1 = new Form();
    form1.greeting.hide();
    form1.input.hide();
    form1.button.hide();
    //riddle1 = new Riddle();
    riddle1.show();
 riddle1.display();
 console.log("hello")
// gamestate=2;
}
else if(gamestate ===2)
{
 
riddle1.input.hide();
  riddle1.button.hide();
   
    bottle1.display();
bottle2.display();
bottle3.display();
bottle4.display();
ball.display();
slingshot.display();
platform.display();

}
else if(gamestate === 3)
{
    riddle1.input.hide();
  riddle1.button.hide();
    text("game over",100,200);
}
console.log(gamestate);

}