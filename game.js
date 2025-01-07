var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];






function nextSequence(){

    var randomNumber = Math.floor(Math.random() * 4);
    console.log("Curent random number: " + randomNumber);
    var randomChosenColor = buttonColors[randomNumber];
    return randomChosenColor;
}

// play the sound corresponding with each button color
function makeSound(randomChosenColor){
    switch (randomChosenColor){
        case "red":
            var redSound = new Audio("sounds/red.mp3");
            redSound.play();

            case "blue":
            var blueSound = new Audio("sounds/blue.mp3");
            blueSound.play();

            case "green":
            var greenSound = new Audio("sounds/green.mp3");
            greenSound.play();

            case "yellow":
            var yellowSound = new Audio("sounds/yellow.mp3");
            yellowSound.play();

            default: console.log("no sound: " + randomChosenColor + " passed to function.")
    }
}

function letsStart(){

   
    randomChosenColor = nextSequence();
    console.log(randomChosenColor);

    //dim out chosen button
    $("#" + randomChosenColor).addClass("pressed");

    // make the corresponding sound
    makeSound(randomChosenColor);

    // undim the chosen button to make it look like it flashed.
    setTimeout(function(){
        $("#" + randomChosenColor).removeClass("pressed")
        }, 500);
}

$(".btn").click(function() {
    $("h1").css("color", "green");
    letsStart();
});
/*
for (i = 0; i < 5; i++){

    console.log("test " + i + ":");
    randomChosenColor = nextSequence();
    console.log(randomChosenColor);

    gamePattern.push(randomChosenColor);
    console.log(gamePattern);

    $("#" + randomChosenColor).addClass("pressed");

    setTimeout(function(){
        $("#" + randomChosenColor).removeClass("pressed")
    }, 500);



   // for (i = 0; i < length.gamePattern; i++){
    //    $("#" + gamePattern[i]).addClass(".pressed")
   // } 
    //
}*/