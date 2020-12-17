var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
//var bottombox1;
var bottomboxsprite, bottomboxbody;
var leftbox,bottombox,rightbox;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	engine = Engine.create();
	world = engine.world;


	createCanvas(800, 700);
	rectMode(CENTER);
	
	leftbox=createSprite(300,620,20,100);
	leftbox.shapeColor = color("red");
	//Matter.Body.setStatic(leftbox, true);

	bottomboxsprite=createSprite(width/2,650,200,20);
	bottomboxsprite.shapeColor = color("red");
	bottomboxbody = Bodies.rectangle(width/2,650,200,20, {isStatic:true} );
	World.add(world, bottomboxbody);
	bottomboxbody.x = bottomboxsprite.x;
	bottomboxbody.y = bottomboxsprite.y;

	rightbox=createSprite(500,620,20,100);
	rightbox.shapeColor = color("red");

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//bottombox1Sprite=createSprite(width/2, 650, width,10);
	//bottombox1Sprite.shapeColor=color(255)

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	packageBody.x = packageSprite.x;
	packageBody.y = packageSprite.y;



	//Create a Ground
	ground = Bodies.rectangle(width/2, 640, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	// bottombox1 = Bodies.rectangle(width/2, 640, width, 10 , {isStatic:true} );
	 //World.add(world, bottombox1);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  bottomboxsprite.x = bottomboxbody.x;
  bottomboxsprite.y = bottomboxbody.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
  }
}



