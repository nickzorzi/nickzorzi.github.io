var ballx = 300;
var bally = 300;
var ballSize = 100;
var score =0;
var gameState= "START";
var img;
var img2;
var img3;
var img4;
var img5;



function preload() {
// preload() runs once, it may make you wait
  img = loadImage('sofa.png');
  img2 = loadImage('table.png');
  img3 = loadImage('chair.png');
  img4 = loadImage('lava.png');
  img5 = loadImage('lava2.png');
// you can link to an image on your github account
//  img = loadImage('https://dma-git.github.io/images/74.png');
}


function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  fill(255,255,255);
} // end setup


function draw() {
  background(200);
  if (gameState=="START"){
  gameStart();
  }
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="L3"){
   levelThree(); 
  }
  if (gameState=="L4"){
   levelFour(); 
  }
  if (gameState=="WIN"){
    youWIN();
  }
  
 text(("Score: " + score), width/2, 40); //show score
  

} // end draw


function gameStart(){
  background(img4);
  textSize(80);
   text("Floor is Lava", width/2, height/2);
   textSize(20);
      text("Press Any Key To Start", width/2, height/1.8);
}
   function keyPressed(){
     gameState= "L1";
   }




function levelOne(){
  background(img5);
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
  image(img,ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  //ellipse(ballx, bally, ballSize, ballSize);
  
} // end level one

function levelTwo(){
  background(img5);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>15){
// lvel 3
   gameState = "L3";

  }
  
//  line(ballx, bally, mouseX, mouseY);
image(img2,ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  //ellipse(ballx, bally, ballSize, ballSize);
} // end level two

function levelThree(){
    background(img5);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -3;
    score= score +1;
  }
  if(score>30){
// level 4
   gameState = "L4";
   

  }
  
//  line(ballx, bally, mouseX, mouseY);
image(img3,ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  //ellipse(ballx, bally, ballSize, ballSize);
} // end level three


function levelFour(){
    background(img5);
  text("Level 4", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -10;
    score= score +1;
  }
  if(score>34){
// level 4
   gameState = "WIN";
   

  }
  
//  line(ballx, bally, mouseX, mouseY);
image(img3,ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  //ellipse(ballx, bally, ballSize, ballSize);
} // end level four


function youWIN(){
  background(img4);
  textSize(80);
   text("You Win", width/2, height/2);
  textSize(20);
   }
