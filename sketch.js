var car;
var database;
var carposition;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    car = createSprite(250,250,10,10);
    car.shapeColor = "red";
    var carref = database.ref("car/position");
    carref.on("value",readpositon)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref("car/position").set({
        x:carposition.x+x,
        y:carposition.y+y
        
    })


}
function readpositon(data){
    carposition = data.val();
    car.x = carposition.x;
    car.y = carposition.y;
}