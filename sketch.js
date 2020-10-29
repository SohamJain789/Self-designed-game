var president,presidentImg,buildings,buildingImg,soldierAmt=0;
var buildingGroup1,buildingGroup2,buildingGroup3,buildingGroup4
var time =1;
var gameState=1;
var soldier,soldierImg,tank,tankImg;
var money = 10000,tankAmt=0;
function preload() {
  // body...
  presidentImg = loadImage("images/presidentImg.png");
  buildingImg = loadImage("images/building.png");
  soldierImg = loadImage("images/soldier.png");
  tankImg = loadImage("images/tank.png");

}

function setup(){
 createCanvas(1500,1000)
 president = createSprite(100,300,20,20);
 president.addImage("president",presidentImg);
 buildingGroup1 = new Group()
 buildingGroup2 = new Group()
 buildingGroup3 = new Group()
 buildingGroup4 = new Group()
}

function draw(){
background(0,0,0);
time=time+1;
fill("white");
textSize(15);
text("Money:"+money,0,100)
textSize(15);
fill("white");
if (gameState==1) {
text("Hello kid! I am making you the temporary president of my country.Take well care of this country",100,450);
text("Press space to continue",100,490)
}

if(keyDown("space")){
  president.visible = false;
  gameState = 2;
}
if (gameState==2) {
 
 row1();
 row2();
 row3();
 row4();
 text("This is the map of your country.Press n to see the latest news in your country",300,100);
 
 }
   
 
 if(keyDown("n")){
  gameState=3;
  buildingGroup1.setVisibleEach(false);
  buildingGroup2.setVisibleEach(false); 
  buildingGroup3.setVisibleEach(false); 
  buildingGroup4.setVisibleEach(false); 
 
 }

 if (gameState==3) {
   //background(0,0,1)
   textSize(18);
   text("Alien spotted on the radar of the national space station.Will they come near earth??",100,300);
   text("Press p to continue",300,200);
   if (keyDown("p")) {
    gameState = 4;
   }
 }
 if (gameState==4) {
  president.visible = true;
  text("I suggest you to plan the defence of your country.Go to the shop by pressing s ",100,450);
  if (keyDown("s")) {
  gameState=5;
 }
 }
 
 if (gameState==5) {
  text("Hello and welcome to the shop There are many items that you might purchase",300,100);
  soldier = createSprite(200,200,30,30);
  soldier.addImage("soldier",soldierImg);
  soldier.scale = 0.3;
  president.visible = false;
  tank = createSprite(400,200,30,30);
  tank.addImage("tank",tankImg);
  tank.scale = 0.3;
  text("This is a tank for 100 coin.Press t to buy it",350,350)

  text("This is a soldier for 1 coin.Press s to buy it",50,350)
  if (keyDown("s")) {
  soldierAmt=soldierAmt + 1;
  money=money-1;
 }
 text("Soldiers:"+soldierAmt,20,200)
 if (keyDown("t")) {
  tankAmt=tankAmt + 1;
  money=money-100;
 }
 text("Tanks:"+tankAmt,20,230)
 }

drawSprites()
}
function row1(){
  for (var i=100;i<900;i=i+100) {
   buildings = createSprite(i,800,20,20)
   buildings.addImage("buildings",buildingImg);
   buildings.scale = 0.5;
   buildingGroup1.add(buildings);
 }
}
function row2(){
  for (var i=100;i<900;i=i+100) {
   buildings = createSprite(i,600,20,20)
   buildings.addImage("buildings",buildingImg);
   buildings.scale = 0.5;
   buildingGroup2.add(buildings);
 }
}
function row3(){
  for (var i=100;i<900;i=i+100) {
   buildings = createSprite(i,400,20,20)
   buildings.addImage("buildings",buildingImg);
   buildings.scale = 0.5;
   buildingGroup3.add(buildings);
 }
}function row4(){
  for (var i=100;i<900;i=i+100) {
   buildings = createSprite(i,200,20,20)
   buildings.addImage("buildings",buildingImg);
   buildings.scale = 0.5;
   buildingGroup4.add(buildings);
 }
}
function mousePressed(){
  
}