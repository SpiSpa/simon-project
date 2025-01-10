var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameEnd = false;

function nextSequence(){

    userClickedPattern = []; //resets the user input to an empty array.
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log("current random color: " + randomChosenColor);
    console.log("random color array: " + gamePattern);

   for (let i = 0; i < gamePattern.length; i++){
        console.log("iteration " + i);

        setTimeout(function(){
            buttonFlash(gamePattern[i]);
            makeSound(gamePattern[i]);
            }, (1000 + 1000 * i));
            console.log(gamePattern[i] + " flashed");
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

function checkCorrect(gamePattern, userClickedPattern){
    gameCheck = gamePattern.join();  //enhance this part by finding an incorrect match 
    userCheck = userClickedPattern.join();   // as soon as the user makes a mistake.
    
    if (gameCheck == userCheck) {
        console.log("computer and user match");
    }
    else {
        console.log("computer and user DO NOT match");
        $("h1").text("GAME OVER");
        $("h1").addClass(".game-over");
    }
}

function restartGame(){
    gamePattern = [];
    userClickedPattern = [];
    level = 0;
    gameEnd = false;
}

// event for the user to choose their buttons
$(".btn").click(function() {
    var userChosenColor = this.id;
    makeSound(userChosenColor);
    buttonFlash(userChosenColor);
    
    userClickedPattern.push(userChosenColor);

    if (userClickedPattern.length === gamePattern.length) {
        checkCorrect(gamePattern, userClickedPattern);
        if (gameEnd ===  false){
            setTimeout(nextSequence(), 1000);
        }
        else {
            console.log("game reset");;
        }
    }
});

    // event to start the game and have computer choose a random button
$(document).keydown(function(){
    if (level === 0 || gameEnd === true) {
        console.log("key pressed");
        restartGame();
        nextSequence();
    }
    $("h1").text("level " + (level + 1));
    level++;
    });

// game over's not working.
