const questionEl = document.querySelector('.question');
const choiceEl = document.querySelector('.choice');
const resultEl = document.querySelector('.result');
const nextBtn = document.querySelector('.next');
let quiz = [
    {
        question: "Number of frames I animate on",
        choice: ['24frames', '30frames', '60frames', '120frames'],
        correct: '60frames'
    },
    {
        question: "Which choice is NOT one of the 12 principles of animation",
        choice: ['squash&stretch', 'In&out', 'anticipation', 'sculpting'],
        correct: 'sculpting'
    },
    {
        question: "Who's the writer of the book The Illusion of Life: Disney Animation",
        choice: ['Johnston', 'Johnston Jand Frank Thomas', 'Frank Thomas', 'Walt Disney'],
        correct: 'Johnston Jand Frank Thomas'
    }
];
let now = 0;
let score = 0;

function display() {
    if (now < quiz.length){
        questionEl.innerText = quiz[now].question;
        quiz[now].choice.forEach(function(data) {
            let btn = document.createElement('button');
            btn.innerText = data;
            choiceEl.appendChild(btn);
            btn.addEventListener('click', function() { checkAnswer(data); });
        });
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "none";
    }
}
function checkAnswer(data) {
    if (data === quiz[now].correct){
        resultEl.innerText = "Correct!";
        score++;
    } else {
        resultEl.innerText = "Wrong!";
    }
    nextBtn.style.display = "block";
}
nextBtn.addEventListener('click', function(){
    now++;
    questionEl.innerText = "Quiz finished! Your score is " + score + "/" + quiz.length;
        choiceEl.innerHTML = "";
        resultEl.innerText = "";
    display();
});

display();
