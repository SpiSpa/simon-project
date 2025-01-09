var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
level = 0;

function nextSequence(){

    userClickedPattern = []; //resets the user input to an empty array.
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    makeSound(randomChosenColor);
    buttonFlash(randomChosenColor);
    console.log("current random color: " + randomChosenColor);
    console.log("random color array: " + gamePattern);

    // ******************this part's not working ********************
    //**********instead of only playing the most recent color, I want it to play all of them.

   /* for (let i = 0; i < gamePattern.length; i++){
        console.log("iteration " + i);
        buttonFlash(gamePattern[i]);
        setTimeout(function(){
            buttonFlash(gamePattern[i+1])
        }, 500);
        
    }*/

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

function checkCorrect(gamePattern, userClickedPattern){
    gameCheck = gamePattern.join();  //enhance this part by finding an incorrect match 
    userCheck = userClickedPattern.join();   // as soon as the user makes a mistake.
    
    if (gameCheck == userCheck) {
        console.log("computer and user match");
    }
    else {
        console.log("computer and user DO NOT match");
        $("h1").text("GAME OVER");
        $("h1").css("color", "red");
    }
}


$(".btn").click(function() {
    var userChosenColor = this.id
    makeSound(userChosenColor);
    buttonFlash(userChosenColor);
    
    userClickedPattern.push(userChosenColor);

    if (userClickedPattern.length == gamePattern.length) {
        checkCorrect(gamePattern, userClickedPattern);
    }

    });

$(document).keydown(function(){
    console.log("key pressed")
    nextSequence();
    $("h1").text("level " + (level + 1));
    level++;
    });
