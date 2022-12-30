const questionBoxElement = document.getElementById("question-box");
const containerElement = document.getElementById("container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-button");
const highScoresElement = document.getElementById("scores");
const retryButtonElement = document.getElementById("retry");
retryButtonElement.addEventListener("click", restartGame)
const pointsElement = document.getElementById("points");
var questionIndex = 0;
var points = 0;
var startBtn = document.querySelector(".start-button");
startBtn.addEventListener("click", startGame);
var timerEl = document.getElementById("timer");
var secondsLeft = 10;
var timerinterval;

function restartGame() {
  location.reload()
}

function startGame() {
  console.log("the game has started");
  startBtn.classList.add("hide");
  questionBoxElement.classList.remove("hide");
  startTimer();
  nextQuestion();
}

function startTimer() {
   timerinterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " Seconds";
    if (secondsLeft <= 0) {
      clearInterval(timerinterval);
      gameOver();
    }
  }, 1000);
}
function nextQuestion() {
  var currentQuestion = theQuestions[questionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.answer.forEach(function (answerChoice) {
    var answerButton = document.createElement("button");
    answerButton.textContent = answerChoice;
    answerButton.setAttribute("class", "btn");
    answerButton.setAttribute("value", answerChoice);
    answerButton.onclick = checkAnswer
    answerButtonsElement.append(answerButton);
  });
}

function checkAnswer() {
  if (this.value === theQuestions[questionIndex].correct){
    console.log("correct")
    points ++ 
    pointsElement.textContent = points
    // show if the answer was correct
  } else {
    console.log("incorrect")

  }
  questionIndex ++
  answerButtonsElement.innerHTML = " ";
  if (questionIndex === theQuestions.length) {
    gameOver()
  } else{
  nextQuestion()}
}

function gameOver() {
  timerEl.textContent = "GAME OVER";
  containerElement.classList.add("hide");
  highScoresElement.classList.remove("hide");
  retryButtonElement.classList.remove("hide");
  clearInterval(timerinterval);
}


const theQuestions = [
  {
    question: "The correct answer is the third option",
    answer: [
      "false", "false", "true", "false"
    ],
    correct: "true"
  },
  {
    question: "The correct answer is the second option",
    answer: [
      "false", "true", "false", "false"
    
    ],
    correct: "true"
  },
  {
    question: "The correct answer is the first option",
    answer: [
      "true", "false", "false", "false"
    
    ],
    correct: "true"
  },
  {
    question: "The correct answer is the fourth option",
    answer: [
      "false", "false", "false", "true"
    
    ],
    correct: "true"
  },
  {
    question: "The correct answer is the second option",
    answer: [
      "false", "true", "false", "false"
    
    ],
    correct: "true"
  },
  {
    question: "The correct answer is the fourth option",
    answer: [
      "false", "false", "false", "true"
    
    ],
    correct: "true"
  },
  {
    question: "The correct answer is the third option",
    answer: [
      "false", "false", "true", "false"
    ],
    correct: "true"
  },
  {
    question: "The correct answer is the second option",
    answer: [
      "false", "true", "false", "false"
    
    ],
    correct: "true"
  },
  {
    question: "The correct answer is the first option",
    answer: [
      "true", "false", "false", "false"
    
    ],
    correct: "true"
  },
  {
    question: "The correct answer is the fourth option",
    answer: [
      "false", "false", "false", "true"
    
    ],
    correct: "true"
  },
  {
    question: "The correct answer is the second option",
    answer: [
      "false", "true", "false", "false"
    
    ],
    correct: "true"
  },
  {
    question: "The correct answer is the fourth option",
    answer: [
      "false", "false", "false", "true"
    
    ],
    correct: "true"
  },
  {
    question: "The correct answer is the third option",
    answer: [
      "false", "false", "true", "false"
    ],
    correct: "true"
  },
  {
    question: "The correct answer is the second option",
    answer: [
      "false", "true", "false", "false"
    
    ],
    correct: "true"
  },
  {
    question: "The correct answer is the first option",
    answer: [
      "true", "false", "false", "false"
    
    ],
    correct: "true"
  },
  {
    question: "The correct answer is the fourth option",
    answer: [
      "false", "false", "false", "true"
    
    ],
    correct: "true"
  },
  {
    question: "The correct answer is the second option",
    answer: [
      "false", "true", "false", "false"
    
    ],
    correct: "true"
  },
  {
    question: "The correct answer is the fourth option",
    answer: [
      "false", "false", "false", "true"
    
    ],
    correct: "true"
  },
];

