//quiz questions and options
const questions = [
    {
        question: "Grand Central Terminal, Park Avenue, New York is the world's",
        options: ["largest railway station", "highest railway station", "longest railway station", "None of the above"],
        correct: 2
    },
    {
        question: "Entomology is the science that studies",
        options: ["Behavior of human beings", "Insects", "The origin and history of technical and scientific terms"],
        correct: 1
    },
    {
        question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
        options: ["Asia", "Africa", "Europe", "Australia"],
        correct: 1
    },
    {
        question: "Garampani sanctuary is located at",
        options: ["Junagarh, Gujarat", "Diphu, Assam", "Kohima, Nagaland", "Gangtok, Sikkim"],
        correct: 2
    },
    {
        question: "For which of the following disciplines is Nobel Prize awarded?",
        options: ["Physics and Chemistry", "Physiology or Medicine", "Literature, Peace and Economics", "All of the above"],
        correct: 1
    },
    {
        question: "FFC stands for",
        options: ["Foreign Finance Corporation", "Film Finance Corporation", "Federation of Football Council", "None of the above"],
        correct: 1
    },
    {
        question: "Fastest shorthand writer was",
        options: ["Dr. G. D. Bist", "J.R.D. Tata", "J.M. Tagore", "Khudada Khan"],
        correct: 2
    },
    {
        question: "First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in",
        options: ["1967", "1968", "1958", "1922"],
        correct: 1
    },
    {
        question: "Galileo was an Italian astronomer who",
        options: ["developed the telescope", "discovered four satellites of Jupiter", "discovered that the movement of pendulum produces a regular time measurement", "All of the above"],
        correct: 1
    },
    {
        question: "Golf player Vijay Singh belongs to which country?",
        options: ["USA", "Fiji", "India", "UK"],
        correct: 1
    }

];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    for (let i = 0; i < currentQuestion.options.length; i++) {
        const option = document.createElement("button");
        option.textContent = currentQuestion.options[i];
        option.addEventListener("click", checkAnswer.bind(null, i));
        optionsElement.appendChild(option);
    }
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    nextButton.disabled = true;
    scoreElement.textContent = `Your score: ${score} / ${questions.length}`;

    // Display GIFs based on the score threshold
    const gifContainer = document.createElement("div");
    gifContainer.classList.add("gif-container");

    if (score >= 7) {
        // Display winning gif
        const winningGif = document.createElement("img");
        winningGif.src = "http://localhost:1158/giphy.gif"; // the winning gif
        winningGif.alt = "Winning GIF";
        gifContainer.appendChild(winningGif);
    } else {
        // Display losing gif
        const losingGif = document.createElement("img");
        losingGif.src = " http://localhost:1158/giphy_s.gif"; //the losing gif
        losingGif.alt = "Losing GIF";
        gifContainer.appendChild(losingGif);
    }

    optionsElement.appendChild(gifContainer);
}
nextButton.addEventListener("click", loadQuestion);

// Initialization the quiz
loadQuestion();
