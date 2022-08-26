status = "";
img = "";
objects = [];

function preload(){
    img = loadImage('mw.jpg');
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}

function modelLoaded(){
    console.log("Model loaded");
    status = true;
    object.Detector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(img, 0, 0, 640, 420);

    if(status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: object detected";

            fill('#FF0000');
            percent = floor(objects[1].confidence * 100);
            text(objects[i].label = "" + percent + "%", objects[i].x + 15, objects[i].y + 15);

            noFill();
            stroke('#FF0000');
            
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
    }
}

function back(){
    window.location = "index.html";
}