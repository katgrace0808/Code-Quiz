let highScoreInput = document.querySelector("#score");
let userInitialsInput = document.querySelector("#initials");
let goBackBtn = document.querySelector("#go-back");
let lastScoreSpan = document.querySelector("#last-score");
let lastInitialsSpan = document.querySelector("#last-user");

function renderHighScore() {
    let highScore = localStorage.getItem("highscore");
    let initials = localStorage.getItem("initials");

    if (highScore && initials === null) {
        return;
    }

    lastScoreSpan.textContent = highScore;
    lastInitialsSpan.textContent = initials;
}

goBackBtn.addEventListener("click", function(event) {
    
    
    localStorage.setItem("highscore", highScore);
    localStorage.setItem("initials", initials);
})