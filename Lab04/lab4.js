// Name: Sansar Kumar
// Roll No: 2501350055
// Course: B.Tech CSE (Full Stack Development)
// Section: B

// JavaScript Console Quiz Game

const quizQuestions = [
    {
        question: "What is the capital of India?",
        answer: "new delhi"
    },
    {
        question: "What planet do we live on?",
        answer: "earth"
    },
    {
        question: "Which animal is called the king of the jungle?",
        answer: "lion"
    },
    {
        question: "What is 5 multiplied by 6?",
        answer: "30"
    },
    {
        question: "Which planet is known as the Fourth Planet?",
        answer: "mars"
    }
];

function runQuiz() {
    let score = 0; 

    
    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        
        if (userAnswer === null) {
            alert("You cancelled the quiz.");
            return;
        }

        
        userAnswer = userAnswer.toLowerCase().trim();

        
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! 🎉");
        } else {
            alert("Wrong ❌\nCorrect Answer: " + quizQuestions[i].answer);
        }
    }

    alert("Quiz Over! 🎯\nYour Score: " + score + " / " + quizQuestions.length);
}

runQuiz();
