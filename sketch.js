var garden,rabbit,apple,leaves;
var gardenImg,rabbitImg,appleImg,leavesImg;

var select_sprite = math.round(random(1,2));

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 leavesImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);

  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.x = mouseX;
}

function createApples()
{
apple = createSprite(Math.round(random(50,350),40,10,10)
apple.addImage(appleImg)
}

function createLeaves()
{
leaves = createSprite(Math.round(random(50,350),40,10,10)
leaves.addImage(leavesImg)
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

if(frameCount%80==0)
{
 if(select_sprite==1)
{
  createApples();
}
else{
  createLeaves();
}
}

  drawSprites();
}



