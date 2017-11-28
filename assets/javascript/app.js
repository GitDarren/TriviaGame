console.log("Hello World");

//Write Document.ready function to load the game

var questionsArray = [{
    question: "Does this damn thing worK?",
    answersArray: ["Yes", "No", "WTF", "Go learn something else"],
    correctAnswer: 1
}];

$("document").ready(function () {
    $("#endGameButton").hide();



    //Put Global Variables Here

    //Pseudocode for the What the Hell We've learned so Far Trivia Game//
    //Create a Start button that starts the game.  The demo video shows the whole game is hidden until the start game button is pushed//

    //Start function - Button with an on "click"
    $("#startButton").on("click", function () {

        runGame();
    });

    var runGame = function () {
        //hide startbutton
        //show questions Div
        $("#startButton").hide();
        // countdownClock();
        $("#questionsSection").show();
        $("#endGameButton").show();
    };

    //Create new function to populate questionsSection with questionsArray
    //write for loop that will loop through questionArray at each index
    //append the DOM with the questionsArray[i].question
    //nest inside this for loop with another for loop which will loop through questionsArray[i].answersArray
    //and will append each of the answers to the DOM. 
    //figure out how I want the questionsSection to be displayed 
    //figure out how I want the answersAarry to be display? - Possibly Buttons



    $("#endGameButton").on("click", function () {
        //end game with click of the button.

    });

});

//Countdown Clock function - this function would also act as a game end function so that when the time reaches zero, the game stops, the guesses are tallied




//Create a Question function
//Create an Answers function - four choices that can be either radio dials or buttons.  I think I like buttons better//
    //In the answer function - only allow one choice to be made//

//Create a way to replicate the question and answer function to offer more questions. 

//Done function - a Done button that allows the user to stop the game if there is still time remaining.  Not sure I need to factor in time remaining in the Done function, but worth thinking about.

//Correct answer function - fills in how many correct answers were guessed

//Incorrect answer function - fills in how many incorrect answers were guessed

//Unanswered function - tallies how many questions the user did not guess. 