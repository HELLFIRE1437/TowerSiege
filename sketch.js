const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ;

var block_dist = 60;
var hexagon_x = 230
var hi = 1 ;

var once_pressed = false ;

function setup() {
	
	createCanvas(2000, 800);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine); 

	ground = new Ground(width/2,height-10,width,20);

	hexagon = new polygon(hexagon_x,height/2,70,70); // actual 2block_dist and 3block_dist

	chain = new Chain(hexagon.body,{x:hexagon_x,y:height/2});

	base1 = new Ground(1590,400,400,10);
	base2 = new Ground(900,600,500,10);

	block1 = new block(1470,370,block_dist,block_dist);
	block2 = new block(1470 + block_dist,370,block_dist,block_dist);
	block3 = new block(1470 + 2*block_dist,370,block_dist,block_dist);
	block4 = new block(1470 + 3*block_dist,370,block_dist,block_dist);
	block5 = new block(1470 + 4*block_dist,370,block_dist,block_dist);

	
	block6 = new block(1470 + 1*block_dist,310,block_dist,block_dist);
	block7 = new block(1470 + 2*block_dist,310 ,block_dist,block_dist);
	block8 = new block(1470 + 3*block_dist,310,block_dist,block_dist);
	block9 = new block(1470 + 2*block_dist,250,block_dist,block_dist);

	b1 = new block(900,570,block_dist,block_dist);
	b2 = new block(900 - 1*block_dist,570,block_dist,block_dist);
	b3 = new block(900 - 2*block_dist,570,block_dist,block_dist);
	b4 = new block(900 - 3*block_dist,570,block_dist,block_dist);
	b5 = new block(900 + 1*block_dist,570,block_dist,block_dist);
	b6 = new block(900 + 2*block_dist,570,block_dist,block_dist);
	b7 = new block(900 + 3*block_dist,570,block_dist,block_dist);
	
	b8 = new block(900,510,block_dist,block_dist);
	b9 = new block(900 - 1*block_dist,510,block_dist,block_dist);
	b10 = new block(900 - 2*block_dist,510,block_dist,block_dist);
	b11 = new block(900 + 1*block_dist,510,block_dist,block_dist);
	b12 = new block(900 + 2*block_dist,510,block_dist,block_dist);
	
	b13 = new block(900,450,block_dist,block_dist);
	b14 = new block(900 - 1*block_dist,450,block_dist,block_dist);
	b15 = new block(900 + 1*block_dist,450,block_dist,block_dist);

	b16 = new block(900,420,block_dist,block_dist);
	
}
function draw(){

	background("lightblue");

	chain.display();
	ground.display();
	hexagon.display();

	base1.display();
	base2.display();

	fill("#00BC22")
	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	fill("#81EDF9");
	block6.display();
	block7.display();
	block8.display();
	fill("#FC94AD")
	block9.display();

	fill("#00BC22");
	b1.display();
	b2.display();
	b3.display();
	b4.display();
	b5.display();
	b6.display();
	b7.display();
	fill("Yellow");
	b8.display();
	b9.display();
	b10.display();
	b11.display();
	b12.display();
	fill("red");
	b13.display();
	b14.display();
	b15.display();
	fill("#FFBEC4");
	b16.display();

	textSize(45);
	fill("black");
	//text("X : " + round(mouseX) + " Y : " + round(mouseY) , mouseX , mouseY);
	text("Drag and throw the polygon towards the pyramids !!",100,80);
	if(once_pressed === true ){
		text("Press 'UP' for another chance",1200,80);
	}
	

} 
function mouseDragged(){
	if(chain.chain.bodyA != null){
		Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY});
	}
}
function mouseReleased(){
	chain.fly();
	once_pressed = true
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.setPosition(hexagon.body,{x:hexagon_x,y:height/2});
		Matter.Body.setVelocity(hexagon.body,{x:0,y:0});
		chain.attach(hexagon.body);
	}
}