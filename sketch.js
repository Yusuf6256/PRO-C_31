const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var manIMG,man

var rain


function preload(){
    manIMG = loadAnimation('images/Walking Frame/walking_1.png','images/Walking Frame/walking_2.png','images/Walking Frame/walking_3.png','images/Walking Frame/walking_4.png',
    'images/Walking Frame/walking_5.png','images/Walking Frame/walking_6.png','images/Walking Frame/walking_7.png',
    'images/Walking Frame/walking_8.png')
}

function setup(){
    canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    rain = new CreateDrops(0,0,10)
}

function draw(){
    Engine.update(engine)
    background(0)
    console.log(man)
    rain.display()
    drawSprites()
}   

