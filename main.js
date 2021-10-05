var imageVar = "";

var noseX = 0;
var noseY = 0;

difference = 0;
rightWristX = 0;
leftWristX = 0;
function preload()
{
    imageVar = loadImage('https://i.ibb.co/ZYgfVvs/cherry-Blossom.png');
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(50, 150)

    canvas = createCanvas(500, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#FFB8A9');
    image(imageVar, 250,0, 360, 360);
    document.getElementById("square_side").innerHTML = "WIDTH AND HEIGHT OF A SQUARE WILL BE = " + difference + "px";
    fill('white')
    square(noseX, noseY, difference);
}

function modelLoaded()
{
    console.log('ZE MODEL HAS BEEN LÖDED');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "difference = " + difference);
    }
}