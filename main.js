nose_x = 0;
nose_y = 0;

function preload(){
    clown_nose = loadImage("https://i.postimg.cc/QtWz182v/clown-nose.jpg");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("Posenet is Initialized");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("The X value of your nose is : " + nose_x);
        console.log("The Y value of your nose is : " + nose_y);
    }
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nose_x - 15,nose_y - 15,30,30);
}

function save(){
    save("myFilterImage.png");

}