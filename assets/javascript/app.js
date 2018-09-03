$(document).ready(() => {

// Setting up an array of objects that contains the questions for the quiz
var questions = [
    {
        question: "What trail do you need to take to get to Precipice Lake?\n(a) John Muir Trail\n(b) High Sierra Trail\n(c) Pacific Crest Trail",
        answer: "b"
    },
    {
        question: "In what park can you find Longs Peak?\n(a) Rocky Mountain National Park\n(b) Badlands National Park\n(c) Glacier National Park",
        answer: "a"
    },
    {
        question: "What river flows through the Grand Canyon?\n(a) Mississippi River\n(b) Youghiogheny River\n(c) Colorado River",
        answer: "c"
    },
    {
        question: "Which National Park gets the most visitors each year?\n(a) Grand Canyon National Park\n(b) Great Smoky Mountain National Park\n(c) Yosemite National Park",
        answer: "b"
    },
    {
        question: "How many National Parks are in the United States?\n(a) 34\n(b) 59\n(c) 78",
        answer: "b"
    }
];

// Setting up the variables for the game
var playerScore = 0;
var playerGuess;
var correctAnswers = [];
var questionTotal = 5;
var showQuestions;
var showTimer;
var totalTime = 20;

// Creating a function to run the game timer
var timer = function() {
    showTimer = setInterval(decrement, 1000);
};

var decrement = function() {
    totalTime--;
    $("#timer").text("Time left: " + totalTime + " seconds");
    if (totalTime === 0) {
        stop();
        alert("Your time is up!");
        $("#final-score").text("Your score is: " + playerScore / questionTotal);
    }
};

var stop = function() {
    clearInterval(showTimer);
};

// Creating a function to hide the questions and timer when the page loads
var hideGame = function() {
    $(".question").hide();
    $("#timer").hide();
};

// Creating a function that will show the questions and timer when the "let's go!" button is clicked
var showGame = function() {
    $(".btn").on("click", function() {
        $(".btn").hide();
        $(".question").show();
        $("#timer").show();
    })
};

// Creating a function that will load the questions
var loadQuestions = function() {

};


// Creating a function to display the questions and loop through the questions array
var startQuiz = function() {
    for (var i = 0; i < questions.length; i++) {
        if (playerGuess === questions[i].answer) {
            playerScore++
        } else {

        }
    }
};

// Calling functions
hideGame();
showGame();
timer();

});