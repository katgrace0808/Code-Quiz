let questionsArr = [{
    question: "Who invented JavaScript?",
    answers: [ 
        {text: "Tim Berners-Lee", correct: false},
        {text: "Hakon Wium lie", correct: false},
        {text: "Brendan Eich", correct: true},
        {text: "James Gosling", correct: false}]
}, {
    question: "What HTML tag is used to link to the JavaScript file?",
    answers: [
        {text: "<script>", correct: true},
        {text: "<link>", correct: false},
        {text: "<function>", correct: false},
        {text: "<a src=./script.js>", correct: false}]
}, {
    question: "Which of the following is true about JavaScript variable names?",
    answers: [
        {text:"Are not case sensitive.", correct: false},
        {text: "Can contain letters, digits, underscores, and dollar signs.", correct: true},
        {text: "Can begin with a number.", correct: false},
        {text: "Can be used for a different variable name in the same file.", correct: false}]
}, {
    question: "What is the correct syntax for a JavaScript function?",
    answers: [
        {text: "name(function) {//code to be executed}", correct: false},
        {text: "function name{//code to be executed}", correct: false},
        {text: "function (//code to be executed)", correct: false},
        {text: "function name() {//code to be executed}", correct: true}] 
}]

let score = 0;
let startButton = document.getElementById("start-button")
let nextButton = document.getElementById("next-button")
let questionContainerEl = document.getElementById("question-container");
let answerEl = document.getElementById("answer-buttons");
let questionEl = document.getElementById("question");


startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log("Started");
    currentQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState()
    showQuestion([currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    
    }
    


function resetState() {
    nextButton.classList.add("hide")
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    }
}

function selectAnswer(answers) {
    
}


// function loadQuestion (questionIndex) {
//     let q = questionsArr[questionIndex];
//     questionEl.textContent = (questionIndex +1) + ". " + q.question;
//     answerAEl.textContent = q.answerA;
//     answerBEl.textContent = q.answerB;
//     answerCEl.textContent = q.answerC;
//     answerDEl.textContent = q.answerD;
// };


