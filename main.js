var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();
var camera; 

function start() {
    recognition.start();
}

Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});

recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript.toLowerCase();
    console.log('Speech recognized:', transcript);
    
 
    if (transcript.includes("selfie")) {
        speak(); 
    }
};

function speak() {
    var synth = window.speechSynthesis;
    camera = document.getElementById("camera"); 
    Webcam.attach(camera);
    
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout(function () {
        takeSnapshot("selfie1"); 
        speak_data = "Taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }, 5000)

    
    setTimeout(function () {
        takeSnapshot("selfie2"); 
        speak_data = "taking your next selfie in 15 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    }, 10000);

    
    setTimeout(function () {
        takeSnapshot("selfie3");
    }, 15000)
    


}

function takeSnapshot(img_id) { 
    console.log(img_id);

    Webcam.snap(function (data_uri) {
        if (img_id == "selfie1") {
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="' + data_uri + '"/>';
        }
        if (img_id == "selfie2") {
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="' + data_uri + '"/>';
        }
        if (img_id == "selfie3") {
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="' + data_uri + '"/>';
        }
    });
}

