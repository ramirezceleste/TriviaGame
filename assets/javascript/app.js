// Create a start button function, game over function, submit button function
// Hide and show each when needed

$("#hide-div").hide();
$("#goneGameOver").hide();
$("#results").hide();
var counter = 30;
var intervalId;

// Create start button function 

$("#start-button").on("click", function () {
    $("#start-button").hide();
    $("#disappear").hide();
    $("#hide-div").show();
    $("#timeLeft").text(counter);
    counter = 30;

// Timer function 

    intervalId = setInterval(function () {
        counter--;
        $("#timeLeft").text(counter);
        
        if (counter === 0) {
            $("#hide-div").hide();
            $("#goneGameOver").show();
            clearInterval(intervalId);
        }

    }, 1000);

});

// Game over button function 

$("#gameOver").on("click", function () {
    $("#results").show();
    $("#goneGameOver").hide();
    results();

});

// Submit button function 

$("#submit-button").on("click", function () {
    if (counter > 0) {
        $("#results").show();
        $("#goneGameOver").hide();
        $("#hide-div").hide();
        results();
    }
});

// Create array of objects for questions and answers 

var questionAnswers = [
    {
        "questionNumber" : "question1",
        "answer": "4"
    },
    {
        "questionNumber" : "question2",
        "answer": "1"
    },
    {
        "questionNumber" : "question3",
        "answer": "2"
    },
    {
        "questionNumber" : "question4",
        "answer": "1"
    },
    {
        "questionNumber" : "question5",
        "answer": "3"
    }
];

// Create an empty array for the user guesses

var userGuess = [];

// Variables to keep score
 
var correct = 0;
var incorrect = 0;
var unanswered = 0;

// Create your loop for the questions and answers

var results = function () {
    clearInterval(intervalId);
    for (var i = 0; i < questionAnswers.length; i++) {
        var userPick = $("input[name=" + questionAnswers[i].questionNumber + "]:checked").val();
        userGuess.push(userPick);
    };

    for (var x = 0; x < questionAnswers.length; x++) {

        if (questionAnswers[x].answer === userGuess[x]) {
            correct++;
            $("#correct").text("Correct: " + correct);
        }

        else if (userGuess[x] === undefined) {
            unanswered++;
            $("#unanswered").text("Unanswered: " + unanswered);
        }

        else {
            incorrect++;
            $("#incorrect").text("Incorrect: " + incorrect);
        }
    };

};



