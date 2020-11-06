var president,presidentImg,buildings,buildingImg,soldierAmt=10;
var buildingGroup1,buildingGroup2,buildingGroup3,buildingGroup4
var time =1;
var gameState=1;
var soldier,soldierImg,tank,tankImg,helicopter,helicopterImg;
var money = 10000,tankAmt=0,helicopterAmt=0;
var shield,shieldImg,shieldAmt=0;
var bigShieldAmt=0,aliens=25000;
function preload() {
  // body...
  presidentImg = loadImage("images/presidentImg.png");
  buildingImg = loadImage("images/building.png");
  soldierImg = loadImage("images/soldier.png");
  tankImg = loadImage("images/tank.png");
  helicopterImg = loadImage("images/helicopter.png");
  shieldImg = loadImage("images/shield.png");
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
  text("Hello and welcome to the shop There are many items that you might purchase.Spend your money wisely",300,100);
  fill("red")
  text("Press z when you are done",300,140);
  fill("white")
  soldier = createSprite(200,200,30,30);
  soldier.addImage("soldier",soldierImg);
  soldier.scale = 0.3;
  president.visible = false;
  tank = createSprite(450,200,30,30);
  tank.addImage("tank",tankImg);
  tank.scale = 0.5;
  helicopter = createSprite(750,200,30,30);
  helicopter.addImage("helicopter",helicopterImg);
  helicopter.scale = 0.5;
  shield = createSprite(1150,200,30,30);
  shield.addImage("shield",shieldImg);
  shield.scale = 0.3;
  text("This is a tank for 100 coin.Press t to buy it",350,350)
  text("This is a soldier for 1 coin.Press s to buy it",50,350)
  text("This is a helicopter for 200 coin.Press h to buy it",650,350)
  text("This is a shield for 50 coin(Only buyable 5 times).Press d to buy it",1050,350)
  //text("A scientist in your country offered you a big shield this is a one time offer and you can only buy 1 big shield by pressing b for 250 coins",350,450);
  text("helicopter damage : 10000",50,550);
  text("soldier damage : 10",50,570);
  text("tank damage : 5000",50,590);
  text("shield protection : damage reduced by 35%",50,610);
  //text("Big shield damage reduction : 60%",50,630);
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

  text("Soldiers:"+soldierAmt,20,200)
 if (keyDown("h")) {
  helicopterAmt=helicopterAmt + 1;
  money=money-200;
 }
 text("Helicopter:"+helicopterAmt,20,250);
 if (keyDown("d") && shieldAmt!==5) {
  shieldAmt=shieldAmt + 1;
  money=money-50;
 }
 text("Shield:"+shieldAmt,20,270);
  /*if (keyDown("b") && bigShieldAmt==0) {
   bigShieldAmt=bigShieldAmt + 1;
   money=money-250;
 }
 text("BigShield:"+bigShieldAmt,20,290);*/
 if (keyDown("z")) {
  gameState = 6;
 }
  helicopter.visible = false;
  soldier.visible = false;
  tank.visible = false;
  shield.visible = false;
 }
 if (gameState==6) {
  text("The aliens are now attacking.The soldiers are placed on the border of your country",150,100);
  //text("Click the mouse to place the soldiers.The helicopters and shield are placed by default",150,130);
  time=time+1;
  
    if(time>520){
      soldierAmt=soldierAmt-[5/shieldAmt+5];
      helicopterAmt=helicopterAmt-[5/shieldAmt+5];
      tankAmt=tankAmt-[5/shieldAmt+5];
      aliens=aliens-(soldierAmt/100);
      aliens=aliens-(tankAmt/50);
      aliens=aliens-(helicopterAmt/25);
      if (aliens===0) {
          gameState=7;
        }   else if (soldierAmt==0 && tankAmt==0 && helicopterAmt==0) {
          gameState=8;
        }
    }  
  row1();
  row2();
  row3();
  row4();


 }
 if (gameState=7) {
  text("YOU LOSE TRY AGAIN BY PRESSING CTRL+R",100,300);
 }
 if (gameState=8) {
  text("YOU WIN PLAY AGAIN BY PRESSING CTRL+R",100,300);

 }
 console.log(gameState);
 console.log(soldierAmt);

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