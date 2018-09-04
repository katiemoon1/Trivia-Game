$(document).ready(() => {

// Setting up an array of objects that contains the questions for the quiz
var questions = [
    {
        question: "What trail do you need to hike to get to Precipice Lake?",
        choices: ["John Muir Trail", "High Sierra Trail", "Pacific Crest Trail"],
        answer: 1
    },
    {
        question: "In what park can you find Longs Peak?",
        choices: ["Rocky Mountain National Park", "Badlands National Park", "Glacier National Park"],
        answer: 0
    },
    {
        question: "What river flows through the Grand Canyon?",
        choices: ["Mississippi River", "Youghiogheny River", "Colorado River"],
        answer: 2
    },
    {
        question: "Which National Park gets the most visitors each year?",
        choices: ["Grand Canyon National Park", "Great Smoky Mountains National Park", "Yosemite National Park"],
        answer: 1
    },
    {
        question: "How many National Parks are in the United States?",
        choices: ["34", "59", "78"],
        answer: 1
    }
];

// Setting up the variables for the game
var playerScore = 0;
var questionTotal = 0;
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
        showScore();
    }
};

var stop = function() {
    clearInterval(showTimer);
};

// Display the score
var showScore = function() {
    $("#final-score").text("Your score is: " + playerScore);
}

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
        startQuiz();
    })
};

// Creating a function to display the questions and loop through the questions array
var startQuiz = function() {
    if (questionTotal < questions.length) {
        $("#game-questions").empty();
        $("#game-question").text(questions[questionTotal].question);
        $("#choices").empty();
        for (var i = 0; i < questions[questionTotal].choices.length; i++) {
           $("#choices").append("<input type='radio' name='choice' class='choice-button' number='" + i + "'>" + questions[questionTotal].choices[i] + "</input>");  
        }
    } else {

    }
};

// Click handler to check if the answer selected is correct
$(document).on("click", ".choice-button", function() {
    if ($(this).attr("number") === questions[questionTotal].answer) {
        playerScore++;
    }
    questionTotal++;
    startQuiz();
});

// Calling functions
hideGame();
showGame();

});