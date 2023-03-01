const scoreDisplay = document.getElementById('score-display')
const questionDisplay = document.querySelector('.questions')
let score = 0

const questions = [
    {
        quiz: ['value', 'estimate', 'evaluate'],
        options: ['jury', 'assess'],
        correct: 1
    },
    {
        quiz: ['close', 'near', 'next'],
        options: ['trace', 'adjacent'],
        correct: 1
    },
    {
        quiz: ['foreign', 'national', 'ethnic'],
        options: ['mad', 'exotic'],
        correct: 1
    },
    {
        quiz: ['assume', 'insight', 'weather'],
        options: ['forecast', 'sustainable'],
        correct: 0
    },
    {
        quiz: ['galaxy', 'moon', 'orbit'],
        options: ['star', 'project'],
        correct: 0
    },
    {
        quiz: ['game', 'team', 'position'],
        options: ['balance', 'player'],
        correct: 1
    },
    {
        quiz: ['loan', 'cash', 'savings'],
        options: ['truck', 'bank'],
        correct: 1
    },
    {
        quiz: ['fast', 'quick', 'prompt'],
        options: ['charity', 'rapid'],
        correct: 1
    },
    {
        quiz: ['teller', 'fairytale', 'line'],
        options: ['story', 'cover'],
        correct: 0
    },
    {
        quiz: ['night', 'eat', 'food'],
        options: ['dinner', 'dialect'],
        correct: 0
    },
    {
        quiz: ['white', 'drink', 'cow'],
        options: ['milk', 'computer'],
        correct: 0
    },
    {
        quiz: ['water', 'swim', 'sea'],
        options: ['soccer', 'fish'],
        correct: 1
    },
]


function populateQuestions(){
    questions.forEach(question =>{
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')
        const logoDisplay = document.createElement('h1')
        logoDisplay.innerHTML = '✎'
        questionBox.appendChild(logoDisplay)
        question.quiz.forEach(tip =>{
             const tipText = document.createElement('p')
             tipText.classList.add('card-p')
             tipText.innerHTML = tip
             questionBox.appendChild(tipText)
        })

        const questionButtons = document.createElement('div')
        questionButtons.classList.add('questions-buttons')
        questionBox.appendChild(questionButtons)


        question.options.forEach((option, optionIndex) =>{
            const questionButton = document.createElement('button')
            questionButton.classList.add('question-button')
            questionButton.innerHTML = option
            
            questionButton.addEventListener('click', ()=> checkAnswer(question, questionButtons, answerDisplay, optionIndex, question.correct))
            questionButtons.appendChild(questionButton)
        })

        const answerDisplay = document.createElement('div')
        answerDisplay.classList.add('answer-display')

        questionBox.appendChild(answerDisplay)
        questionDisplay.appendChild(questionBox)
    })
}


populateQuestions()


function checkAnswer(question, questionButtons, answerDisplay, optionIndex, correctAnswer){
    const optionButtons = question.options
    if(optionIndex == correctAnswer){
        score += 10
        scoreDisplay.innerHTML = score
        addResult(answerDisplay, 'Correct!')
    }else{
        if(score < 5){
            scoreDisplay.innerHTML = 0
            addResult(answerDisplay, 'Wrong :c')
        }else{
            score -= 5
            scoreDisplay.innerHTML = score
            addResult(answerDisplay, 'Wrong :c')
        }
    }
    questionButtons.firstChild.setAttribute('Disabled', "")
    questionButtons.lastChild.setAttribute('Disabled', "")
}


function addResult(answerDisplay, answer){
    if(answer == 'Correct!'){
        answerDisplay.classList.remove('wrong')
        answerDisplay.classList.add('correct')
    } else{
        answerDisplay.classList.remove('correct')
        answerDisplay.classList.add('wrong')
    }
    answerDisplay.innerHTML = ''
    answerDisplay.innerHTML = answer
}








