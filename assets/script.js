const questionBoxElement = document.getElementById("question-box")




function startGame() {
  console.log("the game has started");
  startBtn.classList.add("hide");
  questionBoxElement.classList.remove("hide");
  nextQuestion()
}




var startBtn = document.querySelector(".start-button");
startBtn.addEventListener("click", startGame);





// function nextQuestion() {

// }

// function selectAnswer()


// const questions = [
//     question: "The correct answer is hte third option",
//     answer: [
//         {text: "false", correct: false},
//         {text: "false", correct: false},
//         {text: "true", correct: true},
//         {text: "false", correct: false},

//     ]
// ]