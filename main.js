song="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;


function preload(){

song=loadSound("Dollar.mp3");


}

function setup(){

canvas = createCanvas(500,500);
canvas.center();

video = createCapture(VIDEO);

    video.hide();

poseNet= ml5.poseNet(video,modelLoaded);

poseNet.on('pose',gotPoses);


}

function draw(){

image(video,0,0,500,500);


}


function play(){

song.play();
song=setVolume(1);
rate= song.rate(1);

}


function modelLoaded(){

console.log("model is loaded");

}

function gotPoses(results){

if(results.length > 0){

console.log(results);

leftwristX = results[0].pose.leftWrist.x;
lefttwristy= results[0].pose.leftWrist.y;
console.log("leftwristX ="+ leftwristX+"leftwristY ="+leftwrisY);

rightwristX=results[0].pose.rightWrist.x;
rightwristY=results[0],pose.rightWrist.y;
console.log("rightwristX ="+rightwristX+"rightwristY ="+rightwristY );

};


}