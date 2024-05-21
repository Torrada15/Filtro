noseX=0;
noseY=0;
function preload() {
bigode = loadImage('bigode.png');
}
    function setup() {
        canvas = createCanvas(500, 500)
        canvas.center();
        video = createCapture(VIDEO);
        video.size(500, 500);
        video.hide();
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses);
    }
    function modelLoaded() {
        console.log('PoseNet is Initialized');
    }
    function draw() {
image(video, 0, 0, 500, 500);
image(bigode, noseX -25, noseY +5, 60, 40);
    }
    function takeSnapshot() {
        save('filtro.png');
    }
    function gotPoses(results)
    {
        if(results.length > 0)
        {
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
    console.log(results);
    console.log("nose x =" + results[0].pose.nose.x);
    console.log("nose y =" + results[0].pose.nose.y);
        }

    }