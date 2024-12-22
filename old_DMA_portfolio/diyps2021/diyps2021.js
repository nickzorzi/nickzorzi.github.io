var img;
var initials ='nz'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = (145, 233, 255); // sky
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
  img = loadImage('palm.png');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
//  img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(145, 233, 255);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    stroke(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool

    fill(255, 247, 89, 10);
    stroke(0, 0);
    ellipse(mouseX, mouseY, 50, 50);
  } else if (toolChoice == '3') { // third tool

    fill(255, 194, 89, 10);
    stroke(0, 0);
    ellipse(mouseX, mouseY, 50, 50);
  } else if (toolChoice == '4') {

    fill(255, 122, 204,10);
    stroke(0, 0);
    ellipse(mouseX, mouseY, 50, 50);
  } else if (toolChoice == '5') { 
  
    fill(193, 122, 255, 10);
    stroke(0, 0);
    ellipse(mouseX, mouseY, 50, 50);
  } else if (toolChoice == '6') {

    fill(122, 149, 255, 10);
    stroke(0, 0);
    ellipse(mouseX, mouseY, 50, 50);
  } else if (toolChoice == '7') {

    fill(30, 81, 148);
    stroke(0, 0);
    ellipse(mouseX, mouseY, 50, 50);
  } else if (toolChoice == '8') {

    fill(199, 187, 155);
    stroke(0, 0);
    ellipse(mouseX, mouseY, 50, 50)
  } else if (toolChoice == '9') {

    fill(300, 300, 0, 180);
    stroke(0, 0);
    ellipse(mouseX, mouseY, 60, 60);
  } else if (toolChoice == '0') {
    
    fill(145, 233, 259);
    stroke(0, 0);
    ellipse(mouseX, mouseY, 30, 30)
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
     key = "";
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
