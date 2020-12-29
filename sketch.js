//Create variables here
var dog,d1,d2,database,foods,foodStock;

function preload()
{
  //d1 is the HUNGRY DOG.
  d1=loadImage("images/dog.png")
  d2=loadImage("images/dog1.png")
}

function setup() {
  database=firebase.database();
  console.log(database);

  createCanvas(500,500);
  
  dog=createSprite(250,250,50,50);
  dog.addImage(d1);
  dog.scale=0.3;

  var foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(d2);
}
  drawSprites();
  //add styles here
  fill(255);
  textFont("calibri light")
  textSize(25);
text("Press Up Arrow key to feed dog milk",80,40);
}

function readStock(data){
  foods=data.val();
}
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({food:x})
}


