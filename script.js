const quizData = [
    {
        question: " who is best",
        a:"liverpool",
        b:'utd',
        c:'city',
        d:'chelsea',
        correct: 'b',
    },
    {
        question: " who is king",
        a:"liverpool",
        b:'utd',
        c:'city',
        d:'chelsea',
        correct: 'c',
    }, {
        question: " who is better",
        a:"liverpool",
        b:'utd',
        c:'city',
        d:'chelsea',
        correct: 'd',
    },
    {
        question: " who is champion",
        a:"liverpool",
        b:'utd',
        c:'city',
        d:'chelsea',
        correct: 'b',
    }
]

const questionsA = document.getElementById("a_text")
const questionsB = document.getElementById("b_text")
const questionsC = document.getElementById("c_text")
const questionsD = document.getElementById("d_text")
const question = document.getElementById("question");
const answering = document.querySelectorAll(".answer")
const submitBtn = document.getElementById('submit')
let currentQuiz = 0;
let score = 0
let answer;
getstarted()


function getstarted(){
    deselect();
    const questiondata = quizData[currentQuiz];
    question.innerText = questiondata.question
    questionsA.innerText = questiondata.a
    questionsB.innerText = questiondata.b
    questionsC.innerText = questiondata.c 
    questionsD.innerText = questiondata.d
            
}

function getselected() {
     
    answering.forEach(answers => {
        
        if(answers.checked)
            {
                answer=answers.id
            }
    
    });
    
    
    return answer;
}
function deselect (){
    answering.forEach(answers => answers.checked = false)
}
submitBtn.addEventListener("click", ()=>{
    
    const answer = getselected()
    if(answer){
        console.log('checking')
        if(answer === quizData[currentQuiz].correct){
            score++
            
            console.log(score);
        }
        currentQuiz++
            
    }
    if(currentQuiz< quizData.length){
        getstarted()
    }else{
        console.log(`${score} / ${quizData.length}`)
    }
})