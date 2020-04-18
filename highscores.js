let highScoreInput = document.querySelector("#highscore-form");
let userInitialsInput = document.querySelector("#initials-text");
let highScoreList = document.querySelector("#highscore-list");
let pastHighScore = document.querySelector("#highsocre-past");
let highScore = [];

function renderHighScore() {
    highScoreList.innerHTML = "";
    pastHighScore.textContent = highScore.length;

    for (let i = 0; i < highScore.length; i++) {
        const highScore = highScore[i];

        let li = document.createElement("li");
        li.textContent = highScore;
        li.setAttribute("data-index", i);

        let button = document.createElement("button");
        button.textContent = "Clear High Scores";

        li.appendChild(button);
        highScoreList.appendChild(li);
    }
}

function init() {
    let storedHighScores = JSON.parse(localStorage.getItem("highscore"));

    if (storedHighScores !== null) {
        highScore = storedHighScores;
    }

    renderHighScore();
}

function storeHighScore() {
    localStorage.setItem("highscore", JSON.stringify(highScore));
}

highScoreInput.addEventListener("submit", function(event) {
    event.preventDefault();

    let highScoreText = userInitialsInput.value.trim();

    if (highScoreText === "") {
        return;
    }
    
    highScore.push(highScoreText);
    userInitialsInput.value = "";

    storeHighScore();
    renderHighScore();
});

highScoreList.addEventListener("click", function(event) {
    let element = event.target;

    if (element.matches("button") === true) {
        let index = element.partentElement.getAttribute("data-index");
        highScore.splice(index, 1);

        storeHighScore();
        renderHighScore();
    }
})