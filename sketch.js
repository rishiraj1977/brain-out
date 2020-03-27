var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var level1_image;
var brainout_image;
var background_image;

var rain_image;
var bow_image;
var plus_image;
var equal_image;

var score=0;
var congrats_image;
var background2_image;

var tooth_image;
var brush_image;

var background3_image;

var football_image;
var basket_image;

var background4_image;
var background5_image;

var background6_image;

var gameover_image;

var levelScore=0;

 /* var a="rainbow";
var b;
var rainbow;
 */
var impot='rainbow';

function preload(){
  
  ground = loadImage("../images/ground.png");
  level1_image=loadImage("../images/button-level_1.png");
  brainout_image=loadImage("../images/maxresdefault.jpg");
  background_image=loadImage("../images/3TYUXcY.jpg");

  rain_image=loadImage("../images/maxresdefault (1).jpg");
  bow_image=loadImage("../images/bossisin.jpg");
  plus_image=loadImage("../images/1194994263582955302add.svg.hi.png");
  equal_image=loadImage("../images/equal-clipart-20 (1).jpg");

  congrats_image=loadImage("../images/congratulations.jpg");
  background2_image=loadImage("../images/1_37.png");

  tooth_image=loadImage("../images/shutterstock_138391979.jpg");
  brush_image=loadImage("../images/th (1).jpg");

  background3_image=loadImage("../images/firewatch-is-a-beautiful-game-wallpaper.jpg");

  football_image=loadImage("../images/football_PNG28463.png");
  basket_image=loadImage("../images/large-round-wicker-storage-basket-bowl-p255-631_image.jpg");

  background4_image=loadImage("../images/background-2.jpg");
  background5_image=loadImage("../images/Game_Background_190.png");

  background6_image=loadImage("../images/2D-Triangle-Landscape-Wallpaper-2048x1216.jpg");

  gameover_image=loadImage("../images/mmo-game-over.png");


}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
 
  if(gameState === 1){
    clear();
    game.play();
    background("black");
    image(background2_image,0,0,displayWidth, displayHeight);
 
    textSize(20);
   textFont("Georgia");
   stroke("red");
   fill("black");

   text("PLAYER SCORE: "+ score, 10, 20);

  }

  if(gameState === 3){
    clear();
    game.play();

    background("black");
    image(background3_image,0,0,displayWidth, displayHeight);

    textSize(20);
    textFont("Georgia");
    stroke("red");
    fill("black");

    text("PLAYER SCORE: "+ score, 10, 20);

  }

  if(gameState === 5){
    clear();
    game.play();

    background("black");
    image(background4_image,0,0,displayWidth, displayHeight);

    textSize(20);
    textFont("Georgia");
    stroke("red");
    fill("black");

    text("PLAYER SCORE: "+ score, 10, 20);

  }

  if(gameState === 6){
    clear();
    game.play();

    background("black");
    image(background5_image,0,0,displayWidth, displayHeight);

    textSize(20);
    textFont("Georgia");
    stroke("red");
    fill("black");

    text("PLAYER SCORE: "+ score, 10, 20);

  }

  if(gameState === 7){
    clear();
    game.play();

    background("black");
    image(background6_image,0,0,displayWidth, displayHeight);

    textSize(20);
    textFont("Georgia");
    stroke("red");
    fill("black");

    text("PLAYER SCORE: "+ score, 10, 20);

  }

  if(gameState === 8){
    clear();
    game.play();

    background("black");
    image(gameover_image,0,0,displayWidth, displayHeight);

    textSize(60);
    textFont("Georgia");
    stroke("red,blue,green");
    fill("red");

    text("PLAYER SCORE: "+ score,500, 60);


   
  }
 
}
