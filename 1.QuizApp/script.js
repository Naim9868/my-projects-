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

    // DOM elements
    const quizBody = document.getElementById('quiz-body');
    const resultContainer = document.getElementById('result-container');
    const questionElement = document.getElementById('question');
    const optionsContainer = document.getElementById('options-container');
    const nextButton = document.getElementById('next-btn');
    const questionCountElement = document.getElementById('question-count');
    const scoreElement = document.getElementById('score');
    const finalScoreElement = document.getElementById('final-score');
    const restartButton = document.getElementById('restart-btn');
    const progressBar = document.getElementById('progress-bar');

    // Quiz state
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOption = null;
    let quizCompleted = false;

    // Initialize the quiz
    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizCompleted = false;
        showQuestion();
        quizBody.style.display = 'block';
        resultContainer.style.display = 'none';
    }

    // Display the current question
    function showQuestion() {
        resetState();
        const currentQuestion = questions[currentQuestionIndex];
        const questionNo = currentQuestionIndex + 1;
        
        questionCountElement.textContent = `Question ${questionNo} of ${questions.length}`;
        scoreElement.textContent = `Score: ${score}`;
        progressBar.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
        
        questionElement.textContent = currentQuestion.question;
        
        currentQuestion.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => selectOption(index));
            optionsContainer.appendChild(optionElement);
        });
    }

    // Reset the question state
    function resetState() {
        selectedOption = null;
        while (optionsContainer.firstChild) {
            optionsContainer.removeChild(optionsContainer.firstChild);
        }
        nextButton.style.display = 'none';
    }

    // Handle option selection
    function selectOption(index) {
        if (selectedOption !== null) return;
        
        selectedOption = index;
        const options = document.querySelectorAll('.option');
        const currentQuestion = questions[currentQuestionIndex];
        
        options.forEach((option, i) => {
            if (i === currentQuestion.answer) {
                option.classList.add('correct');
            }
            if (i === index && i !== currentQuestion.answer) {
                option.classList.add('wrong');
            }
            option.style.cursor = 'default';
        });
        
        if (index === currentQuestion.answer) {
            score++;
            scoreElement.textContent = `Score: ${score}`;
        }
        
        nextButton.style.display = 'block';
    }

    // Show the next question or results
    function showNextQuestion() {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }

    // Display the final results
    function showResults() {
        quizCompleted = true;
        quizBody.style.display = 'none';
        resultContainer.style.display = 'block';
        progressBar.style.width = '100%';
        
        finalScoreElement.textContent = `You scored ${score} out of ${questions.length}`;
    }

    // Event listeners
    nextButton.addEventListener('click', showNextQuestion);
    restartButton.addEventListener('click', startQuiz);

    // Start the quiz when the page loads
    startQuiz();