import { questions } from "./questions.js";


const params = new URLSearchParams(window.location.search);
const userName = params.get("username");
const HeaderName = document.getElementById("GreetName");
const QuestionArea = document.getElementById("questionText");
const OptionArea = document.querySelectorAll(".option"); 
const ProgBar = document.getElementById("progressBar");
const ProgTxt = document.getElementById("progressText");
const ScoreBox = document.getElementsByClassName("fade");



HeaderName.innerText = userName;
let i = 0; // Represents Current questionn index
let score = 0; // Indicates Current score

OptionArea.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        UpdateScore(questions[i].options[index].score);
        i++;
        PutQues();
    });
})

function UpdateProgressBar() {

    let progress = ((i+1) / questions.length) * 100;

    ProgTxt.innerText = `Question ${i + 1} / ${questions.length}`;

    ProgBar.style.width = progress + "%";
}

function UpdateScore(increment) {
    score += increment;
    ScoreBox[0].innerText = "Score : " + score;
}

function PutQues() {
    
    if (i >= questions.length) {
        QuestionArea.innerText = "Completed";
        window.location.href = `results.html?score=${score}&username=${userName}`;
        return;
    }

    let CurrentQuestion =  questions[i];

    let Question = CurrentQuestion.question; // Sequential question
    QuestionArea.innerText = Question;

    OptionArea.forEach((btn, index) => {
        btn.innerText =  CurrentQuestion.options[index].text; 
    });

    UpdateProgressBar();

}

PutQues();