//namespace or giving a nick name
//Rhys Fernandes can be namespaced as Raja
//const Raza = "Rhys Fernandes"
//Mazin Marzouk can be namespaced as Razi
//const Razi = "Mazin Marzouk"

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box;
var ground;

function setup(){
    createCanvas(400,400);

    //create an engine
    myEngine = Engine.create();

    //creating your own world
    myWorld = myEngine.world;

    //create a body = rectangle/circle
    var box_options = {
        restitution: 1.5
    }
    box = Bodies.rectangle(200,200,50,50,box_options);
    World.add(myWorld,box);

    //create a ground body = rectangle
    var ground_options = {
        isStatic: true,
    }
    ground = Bodies.rectangle(200,380,400,20,ground_options);
    World.add(myWorld,ground);

    //create a ball = circle
    var ball_options = {
        restitution: 1.0
    }
    ball = Bodies.circle(100,200,20,ball_options)
    World.add(myWorld,ball)
    console.log(box.position.x);

    //Engine.run(myEngine);
    
}

function draw(){
    background(0);

    //to keep updating the engine
    Engine.update(myEngine);

    //to display your bodies, display it in function draw
    rectMode(CENTER);
    rect(box.position.x,box.position.y,50,50);

    rect(ground.position.x,ground.position.y,400,20)
    
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20)
}
