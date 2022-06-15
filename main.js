Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90,
});

camera=document.getElementById("camera");

Webcam.attach( '#camera' );


function take_snapshot() 
{
    Webcam.snap(function(data_uri) {
        document.getElementById("output").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
    }
    
    


console.log('ml5 version',ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models.json',modelLoaded)


function modelLoaded()
{
    console.log("modelLoaded");
}

function check() 
{
    img=document.getElementById('captured_image');
classfier.classify(img,gotResult);
}


function gotResult(error, results)
{
if (error)
{
console.error(error);
}
else 
{
console.log(results);
document.getElementById("result_hand_name").innerHTML=results[0].label;
document.getElementById("result_Gesture_name").innerHTML=results[1].label;
prediction1=results[0].label;
prediction2=results[1].label;
speak() 
    if(results[0].label=="happy")
    {
document.getElementById("result_Gesture_name").innerHTML="&#128076;";
    }
    if(results[0].label=="sad")
    {
document.getElementById("result_Gesture_name").innerHTML="&#128077;";
    }
    if(results[0].label=="angry")
    {
document.getElementById("result_Gesture_name").innerHTML="&#9996;";
    }
    if(results[1].label=="happy")
    {
document.getElementById("result_Gesture").innerHTML="&#9994;";
    }
    if(results[1].label=="sad")
    {
document.getElementById("result_Gesture").innerHTML="&#128079;";
    }
    if(results[1].label=="angry")
    {
document.getElementById("result_Gesture").innerHTML="&#129304;";
    }
}
}