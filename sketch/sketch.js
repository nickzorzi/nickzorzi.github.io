function setup() {
  createCanvas(600,600);
  strokeJoin(ROUND); //Rounded Ends of the Lines
}
function draw() {
  background(158, 229, 240);
  
  //Neck
  fill(240,208,159);
  strokeWeight(3);
  rect(245,450,110,100);
  
    //Shoulder
    fill(255,255,255);
    strokeWeight(3); 
    ellipse(300,600,450,175);
    
      //Chest
      fill(240,208,159); 
      strokeWeight(3);
      ellipse(300,535,150,60);
      strokeWeight(0); 
      rect(246,450,108,100);
      
        //Head
        fill(240,208,159);
        strokeWeight(3);
        ellipse(300,300,300,350);
        
          //Hair
          fill(63,43,23);
          strokeWeight(3);
          triangle(130,190,180,190,152,330); //left side hair
          triangle(470,190,420,190,448,330); //right side hair
          fill(0,0,0,40); 
          strokeWeight(0);
          ellipse(300,195,340,190); //hair shadow
          fill(63,43,23);
          strokeWeight(3);
          ellipse(300,180,340,190); //top side hair
          
            //Eyes
            fill(255,255,255);
            strokeWeight(0);
            rect(200,300,60,40); //left eye base
            rect(340,300,60,40); //right eye base
            fill(0,0,0,40);
            strokeWeight(0);
            rect(200,300,60,5); //left eye shadow
            rect(340,300,60,5); //right eye shadow
            fill(78,108,78);
            strokeWeight(0);
            rect(215,300,30,40); //left eye outerring 1
            rect(355,300,30,40); //right eye outerring 1
            fill(63,43,23,200);
            strokeWeight(0);
            rect(218,300,24,40); //left eye outerring 2
            rect(358,300,24,40); //right eye outerring 2
            fill(0,0,0);
            strokeWeight(0);
            rect(222,300,16,40); //left pupil
            rect(362,300,16,40); //right pupil
            
              //Eyebrows
              fill(63,43,23);
              strokeWeight(0);
              rect(190,285,80,10); //left eyebrow
              rect(330,285,80,10); //right eyebrow
              
                //Nose
                fill(0,0,0);
                strokeWeight(3);
                line(300,320,280,380);
                line(280,380,300,385);
                
                  //Mouth
                  fill(0,0,0);
                  strokeWeight(3);
                  line(260,420,340,420);
            
            
  
}
