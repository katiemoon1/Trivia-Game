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
]

// Setting the player's score to 0
var playerScore = 0;

// Setting the player's guess
var playerGuess;

// Creating a function to display the questions and loop through the questions array
var startQuiz = function() {
    for (var i = 0; i < questions.length; i++) {
        if (playerGuess === questions[i].answer) {
            playerScore++
        } else {

        }
    }
}
