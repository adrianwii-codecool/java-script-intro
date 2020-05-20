const data = {
    "quizcontent": [
        { "question": "Co robi komenda git status?", "correct": 1, "a1": "Pokazuje zmainy na branchy", "a2": "Pokazuje 10 ostatnich commitów", "a3": "answer 3", "a4": "answer 4" },
        { "question": "question text 2", "correct": 3, "a1": "answer 1", "a2": "answer 2", "a3": "answer 3", "a4": "answer 4" },
        { "question": "question text 3", "correct": 4, "a1": "answer 1", "a2": "answer 2", "a3": "answer 3", "a4": "answer 4" },
        { "question": "question text 4", "correct": 4, "a1": "answer 1", "a2": "answer 2", "a3": "answer 3", "a4": "answer 4" }
    ],
};

let question;
const button = document.querySelector("#random");
const answers = document.querySelectorAll(".answers>div");
button.addEventListener("click", loadQuestion);
answers.forEach(answer => answer.addEventListener("click", checkAnswer));

function randomQuestion() {
    const number = data.quizcontent.length;
    let question = data.quizcontent[Math.floor(Math.random() * number)];
    return question;
}

function loadQuestion() {
    question = randomQuestion();

    console.log(question);
    document.getElementById("question").innerText = question.question;
    const predefinedAnswers = [question.a1, question.a2, question.a3, question.a4];

    let i = 0;
    answers.forEach(answer => {
        console.log(answer);
        answer.innerText = predefinedAnswers[i++];
    });
}

function checkAnswer() {
    if (question.correct == this.getAttribute("data-id")) {
        return alert("Correct answer");
    }

    alert("Wrong answer");
}
