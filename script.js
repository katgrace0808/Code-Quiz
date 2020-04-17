let questionsArr = [
    {
    question: "Who invented JavaScript?",
    choices: ["Tim Berners-Lee", "Hakon Wium lie", "Brendan Eich", "James Gosling"],
    answer: "Brendan Eich",
    },
    {
    question: "What HTML tag is used to link to the JavaScript file?",
    choices: ["<script>", "<link>", "<function>", "<a src=./script.js>"],
    answer: "<script>",
    },
    {
    question: "Which of the following is true about JavaScript variable names?",
    choices: ["Are not case sensitive.", "Can contain letters, digits, underscores, and dollar signs.", "Can begin with a number.", "Can be used for a different variable name in the same file."],
    answer: "Can contain letters, digits, underscores, and dollar signs.",
    },
    {
    question: "What is the correct syntax for a JavaScript function?",
    choices: ["name(function) {//code to be executed}", "function name{//code to be executed}", "function (//code to be executed)", "function name() {//code to be executed}"],
    answer: "function name() {//code to be executed}", 
    },
];

let currentQuestion = 0;
let startButton = document.getElementById("start-button");
let questionEl = document.getElementById("question");
let choicesEl = document.getElementById("choices");
let startContainer = document.getElementById("start-container");
let choicePopUp = document.getElementById("choice-popup");
let submitEl = document.getElementById("submit");

//function to start the quiz; used for clicking start button
function startQuiz() {
    choicesEl.style.visibility="hidden";
    
startButton.addEventListener("click", function(event) {
    event.preventDefault();
        
// to loop through question and choices in object array
    startContainer.style.visibility="hidden";
    choicesEl.style.visibility="visible";
    let questionData = questionsArr[currentQuestion];
    questionEl.textContent=questionData.question;
    choicesEl.innerHTML = "";

    for (let choice of questionData.choices) {
        let choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("type", "button");
        choiceBtn.setAttribute("class", "choice-btn");
        choiceBtn.setAttribute("value", choice)
        choiceBtn.textContent = choice;
        choicesEl.appendChild(choiceBtn);

    choiceBtn.addEventListener("click", function() {
        let userChoice = choiceBtn.value;
        let choicePopUp = document.getElementById("choice-popup");
        if(userChoice === questionsArr[0].answer) {
            choicePopUp.textContent="Correct!";
            console.log(choicePopUp);
        } else {
            choicePopUp.textContent="Wrong";
        }
        currentQuestion += 1;
        console.log(currentQuestion);
        let questionData = questionsArr[currentQuestion];
        questionEl.textContent=questionData.question;
        if (currentQuestion == questionData.length) {
            console.log(questionData.length);
            currentQuestion = 0;
    };
    });
};

});
}
startQuiz();