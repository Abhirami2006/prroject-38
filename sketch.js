var canvas;
var gameState = 0;
var database;
var distance = 0;
var playerCount;
var alPlayers;
var form;
var player;
var game;
var track_Img;
var tank_blue,tank_red;
var tanks;
var tankBlue,tankRed;

function preload(){
  tank_blue = loadImage("blue_tank.png");
  tank_red = loadImage("red_tank.png");
  track_Img = loadImage("track.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20,displayHeight - 30);
  databse = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){ 
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  } 
}
