
noseX = 0
noseY = 0
difference = 0
lwx = 0
rwx = 0

function setup()
{
    video = createCapture(VIDEO);
    video.size(800, 800);
    video.position(300,150)

    canvas = createCanvas(900, 700);
    canvas.position(1500, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function modelLoaded(){
    console.log('PoseNet Is Working')
}

function gotPose(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX +"noseY = " + noseY);

        lwx = results[0].pose.leftWrist.x;
        rwx = results[0].pose.rightWrist.x;
        difference = floor(lwx - rwx);

        console.log("leftWristX = " + lwx + "rightWristX = " + rwx + "difference = " + difference);
    }
}

function draw(){
    background('#808080');

    document.getElementById("stats").innerHTML = "Width and Height of a Square will be = " + difference +"px"
        fill('#0000FF');
       text("Richie", noseX, noseY)
        textSize(difference)
    
}