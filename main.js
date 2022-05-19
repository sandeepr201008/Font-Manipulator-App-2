function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
  
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  
  function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw()
{
    background('#6495ed');

    document.getElementById("font_size").innerHTML = "Font Size of the text will be = " + difference +"px";
    textSize(difference);
    fill('#87CEEB');
    text('Code', 50, 400);
}