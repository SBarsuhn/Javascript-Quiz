// This section conatins all of the elements that will be manipulated when running the application
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
const submitBtnEl = document.getElementById("submitbtn");
const root = document.getElementsByTagName("html")[0]
// This section contains click listeners for starting,restarting, and the scoreboard. It also sets starting points, question index, and time
retryButtonElement.addEventListener("click", restartGame);
var questionIndex = 0;
var points = 0;
var startBtn = document.querySelector(".start-button");
startBtn.addEventListener("click", startGame);
var scoresBtn = document.querySelector(".scores");
scoresBtn.addEventListener("click", scoreBoard);
var timerEl = document.getElementById("timer");
var secondsLeft = 15;
var timerinterval;
// The restart game function just reloads the page
function restartGame() {
  location.reload();
}
// Hides and shows certain elements to build the high score screen
function scoreBoard() {
  headerElement.textContent = "High Scores";
  timerEl.classList.add("hide");
  highScoresElement.classList.add("hide");
  pointsElement.classList.add("hide");
  nameInputElement.classList.remove("hide");
  submitElement.classList.remove("hide");
  submitBtnEl.classList.remove("hide");
}
// The start game function changes a few things visually but the main purpose is to start the timer and to show the next question
function startGame() {
  console.log("the game has started");
  startBtn.classList.add("hide");
  questionBoxElement.classList.remove("hide");
  startTimer();
  nextQuestion();
}
// the timer counts down from the initial time and will start the game over function when/if it reaches 0
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
// shows the next question and creates button elements for the answers
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
// checks to see if the answer given was correct. If it is it will move on to the next question. if not the screen will flash red and time will be removed from the timer
function checkAnswer() {
  if (this.value === theQuestions[questionIndex].correct) {
    console.log("correct");
    points++;
    pointsElement.textContent = points;

  } else {
    console.log("incorrect");
    secondsLeft -= 2;
    timerEl.textContent = secondsLeft + " seconds";
    root.classList.add("incorrect");
    setTimeout(() => {
      root.classList.remove("incorrect")
    }, 250)
  }
  questionIndex++;
  answerButtonsElement.innerHTML = " ";
  if (questionIndex === theQuestions.length) {
    gameOver();
  } else {
    nextQuestion();
  }
}
// creates the game over screen by hiding and showing certain elements
function gameOver() {
  timerEl.textContent = "GAME OVER";
  containerElement.classList.add("hide");
  highScoresElement.classList.remove("hide");
  retryButtonElement.classList.remove("hide");
  clearInterval(timerinterval);
}
// prompts the user with a name input box. from here it will store the name and score in local storage
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

// adds the name/score to the leaderboard and sorts them from highest to lowest
function showScores() {
const highscores = JSON.parse(localStorage.getItem("highscores"))
const scoreSection = document.getElementById("leaderboard");
highscores.sort(function(a, b) {
  return b.points - a.points
})

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
// these are the questions that the next question function pulls from
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