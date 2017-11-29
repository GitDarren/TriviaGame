

var questionsArray = [
    {
    question: "Who Won the 2016 World Series?",
    answersArray: ["Chicago Cubs", "Chicago White Sox", "Cleveland Indias", "New York Yankess"],
    correctAnswer: 0
    },
    {
    question: "Who Managed the 2016 World Series?",
    answersArray: ["John Madden", "Joe Madden", "Terry Francona", "Joe Girardi"],
    correctAnswer: 1
    },
    {
    question: "Who Should have won the 2011 World Series?",
    answersArray: ["the fucking St. Louis Cardinals", "New York Yankees", "Los Angeles Dodgers", "Of course the Texas Rangers you insenstive asshole"],
    correctAnswer: 3
    }
];

$("document").ready(function () {
    $("#endGameButton").hide();
    makeQuestionsSection();

    //Put Global Variables Here

    //Pseudocode for the World Series Trivia Game//
    //Create a Start button that starts the game.  The demo video shows the whole game is hidden until the start game button is pushed//

    //Start function - Button with an on "click"
    $("#startButton").on("click", function () {
        runGame();
    });

    var seconds = 5;
    var counter;

    var runGame = function () {
        counter = setInterval(timer, 1000);
        //hide startbutton
        //show questions Div
        $("#startButton").hide();
        $("#questionsSection").show();
        $("#endGameButton").show();
    };

    function timer() {
        seconds--;
        $('#countdownClock').text(seconds);
        if (seconds === 0) {
            clearInterval(counter);
            return;
        }
        console.log("There are " + seconds + " seconds left");
    }

    function makeQuestionsSection() {
        questionsArray.forEach(function(val, i) {
            var options = questionsArray[i].answersArray;      
            $("#questionsSection").append (
            `<h2> ${questionsArray[i].question}</h2>`
            
            ) 
            options.forEach(function(v, idx) {
                $("#questionsSection").append (
                    `<form> <input type='radio' name='choice' value=' ${options[idx]}'> ${options[idx]} <br></form>`
                )
            })
        })
        
    };


    $("#endGameButton").on("click", function () {
        clearInterval(counter);
        return;
        //end game with click of the button.

    });

});


    //Create new function to populate questionsSection with questionsArray
    //write for loop that will loop through questionArray at each index
    //append the DOM with the questionsArray[i].question
    //nest inside this for loop with another for loop which will loop through questionsArray[i].answersArray
    //and will append each of the answers to the DOM. 
    //figure out how I want the questionsSection to be displayed 
    //figure out how I want the answersAarry to be display? - Possibly Buttons


//Countdown Clock function - this function would also act as a game end function so that when the time reaches zero, the game stops, the guesses are tallied




//Create a Question function
//Create an Answers function - four choices that can be either radio dials or buttons.  I think I like buttons better//
    //In the answer function - only allow one choice to be made//

//Create a way to replicate the question and answer function to offer more questions. 

//Done function - a Done button that allows the user to stop the game if there is still time remaining.  Not sure I need to factor in time remaining in the Done function, but worth thinking about.

//Correct answer function - fills in how many correct answers were guessed

//Incorrect answer function - fills in how many incorrect answers were guessed

//Unanswered function - tallies how many questions the user did not guess. 