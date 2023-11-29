// array containing questions and answers
const questions = [
    {
        question: "What Hogwarts House represents courage?",
        options: ["Ravenclaw", "Slytherin", "Gryffindor", "Hufflepuff"],
        correctAnswer: "Gryffindor",
    },
    {
        question: "What is the name of Voldemort's snake?",
        options: ["Nina", "Nagini", "Naomi", "Nieve"],
        correctAnswer: "Nagini",
    },
    {
        question: "Who burned the bottom of Snape's robes?",
        options: ["Ginny", "Hermione", "Luna", "Harry"],
        correctAnswer: "Hermione",
    },
    {
        question: "Who was the Head of Ravenclaw House?",
        options: ["Filius Flitwick", "Minerva McGonagall", "Severus Snape", "Pomona Sprout"],
        correctAnswer: "Filius Flitwick",
    },
    {
        question: "What was petrifying the students in Hogwarts in 1992?",
        options: ["A Basilisk", "A Viper", "A Python", "An Anaconda"],
        correctAnswer: "A Basilisk",
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuizData = questions[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerText = option;
        li.addEventListener("click", () => checkAnswer(index));
        optionsElement.appendChild(li);
    });
}

// calls loadQuestion function initially to display the first question
loadQuestion();

// Checks if the selected answer is correct
function checkAnswer(selectedIndex) {
    const currentQuizData = questions[currentQuestion];
    const selectedOption = currentQuizData.options[selectedIndex];
    const options = optionsElement.children;

    if (selectedOption === currentQuizData.correctAnswer) {
        score++;
        // changes div color to show correct answer
        options[selectedIndex].style.backgroundColor = "#4CAF50"; // Green
    } else {
        // changes div color to show wrong answer
        options[selectedIndex].style.backgroundColor = "#FF5733"; // Red
    }

    // Disables further clicks on choices
    for (let i = 0; i < options.length; i++) {
        options[i].style.pointerEvents = "none";
    }
}

// function to show next question after clicking next
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

nextButton.addEventListener("click", nextQuestion);

// terminates quiz when there are no more questions
function endQuiz() {
    questionElement.innerText = "Quiz Completed!";
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
    scoreElement.innerText = "Final Score: " + score;
}