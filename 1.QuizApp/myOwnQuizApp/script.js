
//question....
    // Quiz questions array
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: 2
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: 1
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: 3
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            answer: 2
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            answer: 2
        },
        {
            question: "Which country is home to the kangaroo?",
            options: ["New Zealand", "Australia", "South Africa", "Brazil"],
            answer: 1
        },
        {
            question: "What is the tallest mountain in the world?",
            options: ["K2", "Mount Everest", "Kilimanjaro", "Denali"],
            answer: 1
        },
        {
            question: "Which language has the most native speakers?",
            options: ["English", "Spanish", "Hindi", "Mandarin Chinese"],
            answer: 3
        },
        {
            question: "What year did World War II end?",
            options: ["1943", "1945", "1947", "1950"],
            answer: 1
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            answer: 1
        }
    ];



//selecting DOM Elements...
const progressBar = document.getElementById("progress");
const questionCount = document.querySelector(".QuestionCount");
const scoreCount = document.querySelector(".scoreCount");
const question = document.querySelector("#question");
const option = document.querySelectorAll(".option ul li");
const nextButton = document.querySelector(".nextBtn");
// const result = ;

//show first question...

let count = 0;
let QuestionCount;
let ScoreCount;

//initialize the quiz state...
function startQuiz(){
    QuestionCount = 0;
    ScoreCount = 0;
    showQuestion(questions[QuestionCount]);
    
    questionCount.innerHTML = `Question ${QuestionCount+1} of ${questions.length}`;
    progressBar.style.width = `${(QuestionCount+1)/questions.length* 100}%`;

}
// Show the next question or results
function showNextQuestion() {
    QuestionCount++;
    // resetOption();
    if (QuestionCount < questions.length) {
        showQuestion(questions[QuestionCount]);
        questionCount.innerHTML = `Question ${QuestionCount+1} of ${questions.length}`;
        progressBar.style.width = `${(QuestionCount+1)/questions.length* 100}%`;
        
        
    } else {
        let a = confirm(`Quiz completed! Your score is ${ScoreCount}/${questions.length}. Do you want to play again?`);
            if(a){
                startQuiz();
            }
        // showResult()
    }
       
    
}

//score counting
function isRightAnswer(ans){
    if(ans){
        ScoreCount++;
    }else{
        ScoreCount = ScoreCount;
    }
    
    scoreCount.innerHTML = `Score: ${ScoreCount}`;
}

//answer analysis...
function findAnswer(x){
    const options = document.querySelectorAll(".option ul li");
    
    let rightAnswer = x;
    let answered = false; //flag for reject multiple click....

    options.forEach((optn,index)=>{
            const handler = (e)=>{
                if(answered) return;

                answered = true;
               
                let Ans = (rightAnswer == index)? true : false;

                isRightAnswer(Ans);
            
                if(Ans){
                    optn.style.backgroundColor = "green";
                }else{
                    optn.style.backgroundColor = "red";
                    options[rightAnswer].style.backgroundColor = "green";
                }
                nextButton.style.display = "inline";
            };
           
            optn.addEventListener("click",handler);
    });
}

//for showing question...
function showQuestion(x){
   
    question.innerHTML = x.question;
    let i=0;
    Array.from(option).forEach((a)=>{
        a.innerHTML = x.options[i];
        a.style.backgroundColor = "#aaa";
        a.style.pointerEvents = "auto";
        i++;
    });
    nextButton.style.display = "none";
    findAnswer(x.answer);
}

nextButton.addEventListener("click", showNextQuestion);


startQuiz();