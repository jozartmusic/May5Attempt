let audioStarted = false;
var mode = 0;
let entergate
var lowC
var lowD
var lowE
var lowG


let lK = 'LEFT_ARROW'
let rK = 'RIGHT_ARROW'
let dK = 'DOWN_ARROW'
let uK = 'UP_ARROW'

var levelValues = []

  function mousePressed() { // needed to get it to work in full screen mode
    // Start audio on user gesture
    if (!audioStarted) {
        userStartAudio();
        audioStarted = true;
    }
}


function preload(){
  lowC = loadSound("Inst1.wav");
  lowD = loadSound("Inst1D.wav");
  lowE = loadSound("Inst1E.wav");
  lowG = loadSound("Inst1G.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  splash = new Splash();
   angleMode(DEGREES);
}

function keyCode(){
let lK = (LEFT_ARROW)
let rK = (RIGHT_ARROW)
let dK = (DOWN_ARROW)
let uK = (UP_ARROW) 
}

function draw() {
  if (mouseIsPressed == true && splash.update() == true) {
    mode = 1;
  }
  if (mode == 1) {
    splash.hide();
    
    // your code here
    background(255);
    fill(100);
    noStroke();
    rect(50, 50, windowWidth - 100, windowHeight - 100);
    fill(0);
    ellipse(mouseX, mouseY, 20, 20);
  }
  
  
  switch (mode) {
    case 0:
      background(255);
      entergate = 1
      break;
    case 1:
      scene1();
      break;
    case 2:
      scene2(lK,rK,dK,uK);
      break;
    case 3:
      scene3();   
      break;
    default:
}
}//end of draw

function keyPressed() { 

      
  if (keyCode === ENTER && entergate == 1) {
  mode++;}
  if (keyCode === ENTER && entergate != 1){mode = mode}
  
  if (keyCode === LEFT_ARROW){lowC.play()}
  if (keyCode === RIGHT_ARROW){lowD.play() }
  if (keyCode === DOWN_ARROW){lowE.play() }
  if (keyCode === UP_ARROW){lowG.play() }
}
//title screen
function scene1() {
  entergate = 1
  background('#FFE5CC');
  textAlign(CENTER);
	textSize(40);
  fill(0,0,0);
	text("Level 1", width / 2, height/2);
  //add play music code here
  textAlign(CENTER);
	textSize(25);
  fill(0,0,0);
	text("Press Enter to Play", width / 2 , height/2 + 40);
}
//playing/executing level 1
function scene2(rK,lK,uK,dK) {
  entergate = 0
  levelValues = [rK,lK,uK,dK]
  
  background(255, 255, 0);
 textAlign(CENTER);
	textSize(40);
  fill(0,0,0);
	text("Level 1", width/2 , height - 750);
  textAlign(CENTER);
	textSize(20);
  fill(0,0,0);
	text("Match This:", width/2 , height - 700);
  
lvl1playsquare();
  lvl1playarrow();
  
  
}


function scene3() {
  background(255, 20, 80);
   textAlign(CENTER);
	textSize(40);
  fill(0,0,0);
	text("Level 2", width/2 , height - 750);
  textAlign(CENTER);
	textSize(20);
  fill(0,0,0);
	text("Now Match This:", width/2 , height - 700);
}

function lvl1playsquare(rK,lK,uK,dK){
  let w
  let e
  let r
  let d
  
  if (keyCode === LEFT_ARROW){w = 102, e = 255, r = 102}
  if (keyCode === RIGHT_ARROW){w = 255, e = 51, r = 51}
  if (keyCode === DOWN_ARROW){w = 51, e = 51, r = 255}
  if (keyCode === UP_ARROW){w = 255, e = 153, r = 51}
fill(w,e,r)
  square(200, 200, 400);
}

function lvl1playarrow(){
  let a
  let b
  let c
  let d
  let e
  let f
  if (keyCode === LEFT_ARROW){a = 530 ,b= 498 , c= 250, d= 380, e= 530, f= 298 }
  if (keyCode === RIGHT_ARROW){a = 260,b= 290, c= 520, d=388 , e=260 , f= 508}
  
  if (keyCode === UP_ARROW){a = 245,b= 500,c= width/2, d=280,e=545,f=500}
  if (keyCode === DOWN_ARROW){a = 245,b= 500,c= 400, d=540,e=245, f=500}
  fill(255)
 triangle(a,b,c,d,e,f); 
  
}
 