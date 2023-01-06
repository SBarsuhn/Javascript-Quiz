function displayScores() {
    const highscores = JSON.parse(localStorage.getItem("highscores"))
    const scoreSection = document.getElementById("scorelist");
    for (let i = 0; i < highscores.length; i++) {
        const scoreobj = highscores[i];
        const initEL = document.createElement("h6")
        const scoreEL = document.createElement("h6")
        initEL.textContent= scoreobj.initials
        scoreEL.textContent = scoreobj.score
        scoreSection.appendChild(initEL)
        scoreSection.appendChild(scoreEL)

    }
    console.log(highscores)
}