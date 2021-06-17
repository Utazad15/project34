const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var box5,box6,box7,box8;
var box9,box10,box11,box12;
var box13,box14,box15,box16;
var box17,box18,box19,box20;
var box21,box22,box23,box24,box25,box26;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1300, 500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(550, 450, 1100, 20);

  hero = new Hero(300,250,200);
  rope = new Rope(hero.body, { x: 250, y: 50 });
  monster = new Monster(1000,350,300);

  box1 = new Box(510, 350, 50, 50);
  box2 = new Box(590, 350, 50, 50);
  box3 = new Box(670, 350, 50, 50);
  box4 = new Box(750, 350, 50, 50);

  box5 = new Box(510, 325, 50, 50);
  box6 = new Box(590, 325, 50, 50);
  box7 = new Box(670, 325, 50, 50);
  box8 = new Box(750, 325, 50, 50);

  box9 = new Box(510, 300, 50, 50);
  box10 = new Box(590, 300, 50, 50);
  box11 = new Box(670, 300, 50, 50);
  box12 = new Box(750, 300, 50, 50);

  box13 = new Box(510, 275, 50, 50);
  box14 = new Box(590, 275, 50, 50);
  box15 = new Box(670, 275, 50, 50);
  box16 = new Box(750, 275, 50, 50);

  box17 = new Box(510, 250, 50, 50);
  box18 = new Box(590, 250, 50, 50);
  box19 = new Box(670, 250, 50, 50);
  box20 = new Box(750, 250, 50, 50);

  box21 = new Box(510, 225, 50, 50);
  box22 = new Box(590, 225, 50, 50);
  box23 = new Box(670, 225, 50, 50);
  
  box24 = new Box(510, 200, 50, 50);
  box25 = new Box(670, 200, 50, 50);

  box26 = new Box(670, 175, 50, 50);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();

  box5.display();
  box6.display();
  box7.display();
  box8.display();

  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();
  box16.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();

  box21.display();
  box22.display();
  box23.display();

  box24.display();
  box25.display();

  box26.display();

  hero.display();
  rope.display();
  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  rope.fly();
}
