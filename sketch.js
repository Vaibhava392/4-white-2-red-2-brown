const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(700,160,70,70);
    box6 = new Box(920,160,70,70);
    pig1 = new Pig(810,350,50,50);
    pig2 = new Pig(810,220,50,50);
    pig3 = new Pig(810,130,50,50);
    log1 = new log(810,260,300,PI/2);
    log2 = new log(810,180,300,PI/2);
    log3 = new log(810,100,300,PI/2);

    ground = new Ground (600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
   ground.display();
   pig1.display();
   pig2.display();
   pig3.display();
   log1.display();
   log2.display();
   log3.display();
}