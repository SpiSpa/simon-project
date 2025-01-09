var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
level = 0;

function nextSequence(){

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    makeSound(randomChosenColor);
    buttonFlash(randomChosenColor);
    console.log("current random color: " + randomChosenColor);
    console.log("random color array: " + gamePattern);

    // ******************this part's not working ********************
    for (i = 0; i++; i < gamePattern.length){
        buttonFlash(gamePattern[i]);
        setTimeout(function(){

        }, 500);
    }

}

// play the sound corresponding with each button color
function makeSound(randomChosenColor){
    switch (randomChosenColor){
        case "red":
            var redSound = new Audio("sounds/red.mp3");
            redSound.play();
            break;

        case "blue":
            var blueSound = new Audio("sounds/blue.mp3");
            blueSound.play();
            break;

        case "green":
            var greenSound = new Audio("sounds/green.mp3");
            greenSound.play();
            break;

        case "yellow":
            var yellowSound = new Audio("sounds/yellow.mp3");
            yellowSound.play();
            break;

        default: console.log("no sound: " + randomChosenColor + " passed to function.")
    }
}

function buttonFlash(color){
   
    //dim out chosen button
    $("#" + color).addClass("pressed");

    // make the corresponding sound
    makeSound(color);

    // undim the chosen button to make it look like it flashed.
    setTimeout(function(){
        $("#" + color).removeClass("pressed")
        }, 200);
}

$(".btn").click(function() {
    var userChosenColor = this.id
    makeSound(userChosenColor);
    buttonFlash(userChosenColor);
    
    console.log("Chosen button: " + userChosenColor);   
    userClickedPattern.push(userChosenColor);
    console.log("Chosen color array:" + userClickedPattern);
    });

$(document).keydown(function(){
    console.log("key pressed")
    nextSequence();
    $("h1").text("level " + level);
    level++;
    });


/*
for (i = 0; i < 5; i++){

    console.log("test " + i + ":");
    randomChosenColor = nextSequence();
    console.log(randomChosenColor);

    gamePattern.push(randomChosenColor);
    console.log(gamePattern);



   // for (i = 0; i < length.gamePattern; i++){
    //    $("#" + gamePattern[i]).addClass(".pressed")
   // } 
    //
}*/