const questionBoxElement = document.getElementById("question-box");
const containerElement = document.getElementById("container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-button");
const highScoresElement = document.getElementById("scores");
const retryButtonElement = document.getElementById("retry");
const headerElement = document.getElementById("h1");
const nameInputElement = document.getElementById("nameinput");
const submitElement = document.getElementById("submit");
const pointsElement = document.getElementById("points");
const leaderboardElement = document.getElementById("leaderboard");
const submitBtnEl = document.getElementById("submitbtn")
// const championElement = document.getElementById("champion");
// const finalPointsElement = document.getElementById("finalpoints");

retryButtonElement.addEventListener("click", restartGame);
var questionIndex = 0;
var points = 0;
var startBtn = document.querySelector(".start-button");
startBtn.addEventListener("click", startGame);
var scoresBtn = document.querySelector(".scores");
scoresBtn.addEventListener("click", scoreBoard);
var timerEl = document.getElementById("timer");
var secondsLeft = 2;
var timerinterval;

function restartGame() {
  location.reload();
}

function scoreBoard() {
  headerElement.textContent = "High Scores";
  timerEl.classList.add("hide");
  highScoresElement.classList.add("hide");
  pointsElement.classList.add("hide");
  nameInputElement.classList.remove("hide");
  submitElement.classList.remove("hide");
  submitBtnEl.classList.remove("hide");
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
    answerButton.onclick = checkAnswer;
    answerButtonsElement.append(answerButton);
  });
}

function checkAnswer() {
  if (this.value === theQuestions[questionIndex].correct) {
    console.log("correct");
    points++;
    pointsElement.textContent = points;
    // show if the answer was correct
  } else {
    console.log("incorrect");
  }
  questionIndex++;
  answerButtonsElement.innerHTML = " ";
  if (questionIndex === theQuestions.length) {
    gameOver();
  } else {
    nextQuestion();
  }
}

function gameOver() {
  timerEl.textContent = "GAME OVER";
  containerElement.classList.add("hide");
  highScoresElement.classList.remove("hide");
  retryButtonElement.classList.remove("hide");
  clearInterval(timerinterval);
}
// !!! keeps overwriting the list every time. needs to go to the next li
submitElement.addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.querySelector("#nameinput").value;

  if (name === "") {
    alert("name cannot be left blank");
  } else {
  let existingScores = localStorage.getItem("highscores");
  var newScore = {
    initials: event.target[0].value,
    points
  }
  if (JSON.parse(existingScores)) {
    console.info("existing high scores found")
    existingScores = JSON.parse(existingScores)
    console.log(existingScores)
    existingScores.push(newScore)
    localStorage.setItem("highscores", JSON.stringify(existingScores))
    showScores()
    return;
  }
  var newScores = []
  newScores.push(newScore)
  console.log(newScores)
  localStorage.setItem("highscores", JSON.stringify(newScores))
    showScores();
  return;}
});

// !!!
function showScores() {
const highscores = JSON.parse(localStorage.getItem("highscores"))
const scoreSection = document.getElementById("leaderboard");
// need to limit the number of names that show up to 5 and replace ones that have a lower score with new high scores
for (let i = 0; i < highscores.length; i++) {
    const scoreobj = highscores[i];
    const initEL = document.createElement("span")
    const scoreEL = document.createElement("span")
    initEL.textContent= scoreobj.initials
    scoreEL.textContent = scoreobj.points
    scoreSection.appendChild(initEL)
    scoreSection.appendChild(scoreEL)
}

  nameInputElement.classList.add("hide");
  submitElement.classList.add("hide");
  leaderboardElement.classList.remove("hide");
}

const theQuestions = [
  {
    question: "The correct answer is the third option",
    answer: ["false", "false", "true", "false"],
    correct: "true",
  },
  {
    question: "The correct answer is the second option",
    answer: ["false", "true", "false", "false"],
    correct: "true",
  },
  {
    question: "The correct answer is the first option",
    answer: ["true", "false", "false", "false"],
    correct: "true",
  },
  {
    question: "The correct answer is the fourth option",
    answer: ["false", "false", "false", "true"],
    correct: "true",
  },
  {
    question: "The correct answer is the second option",
    answer: ["false", "true", "false", "false"],
    correct: "true",
  },
  {
    question: "The correct answer is the fourth option",
    answer: ["false", "false", "false", "true"],
    correct: "true",
  },
  {
    question: "The correct answer is the third option",
    answer: ["false", "false", "true", "false"],
    correct: "true",
  },
  {
    question: "The correct answer is the second option",
    answer: ["false", "true", "false", "false"],
    correct: "true",
  },
  {
    question: "The correct answer is the first option",
    answer: ["true", "false", "false", "false"],
    correct: "true",
  },
  {
    question: "The correct answer is the fourth option",
    answer: ["false", "false", "false", "true"],
    correct: "true",
  },
  {
    question: "The correct answer is the second option",
    answer: ["false", "true", "false", "false"],
    correct: "true",
  },
  {
    question: "The correct answer is the fourth option",
    answer: ["false", "false", "false", "true"],
    correct: "true",
  },
  {
    question: "The correct answer is the third option",
    answer: ["false", "false", "true", "false"],
    correct: "true",
  },
  {
    question: "The correct answer is the second option",
    answer: ["false", "true", "false", "false"],
    correct: "true",
  },
  {
    question: "The correct answer is the first option",
    answer: ["true", "false", "false", "false"],
    correct: "true",
  },
  {
    question: "The correct answer is the fourth option",
    answer: ["false", "false", "false", "true"],
    correct: "true",
  },
  {
    question: "The correct answer is the second option",
    answer: ["false", "true", "false", "false"],
    correct: "true",
  },
  {
    question: "The correct answer is the fourth option",
    answer: ["false", "false", "false", "true"],
    correct: "true",
  },
];
