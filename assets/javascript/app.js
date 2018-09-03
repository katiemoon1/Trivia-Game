$(document).ready(() => {

// Setting up an array of objects that contains the questions for the quiz
var questions = [
    {
        question: "What trail do you need to take to get to Precipice Lake?",
        choices: ["John Muir Trail", "High Sierra Trail", "Pacific Crest Trail"],
        answer: 2
    },
    {
        question: "In what park can you find Longs Peak?",
        choices: ["Rocky Mountain National Park", "Badlands National Park", "Glacier National Park"],
        answer: 1
    },
    {
        question: "What river flows through the Grand Canyon?",
        choices: ["Mississippi River", "Youghiogheny River", "Colorado River"],
        answer: 3
    },
    {
        question: "Which National Park gets the most visitors each year?",
        choices: ["Grand Canyon National Park", "Great Smoky Mountains National Park", "Yosemite National Park"],
        answer: 2
    },
    {
        question: "How many National Parks are in the United States?",
        choices: ["34", "59", "78"],
        answer: 2
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
        timer();
    })
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

});