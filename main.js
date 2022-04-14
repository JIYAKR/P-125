function setup() {
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550, 500);
    canvas.position(600, 105);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    document.getElementById("size").innerHTML="Width And Height of the Font Will Be = "+difference+"px";
    background('#FFB6C1');
    fill('0000FF');
    textSize(difference);
    text("Jiya!", 50,400);
}

function modelLoaded() {
    console.log('PoseNet Is Installed!');
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);

        console.log("leftWristX = "+ leftWristX +"rightWristX = "+ rightWristX+ "difference = " +difference);


        
    }
}

difference = 0;
rightWristX=0;
leftWristX=0;