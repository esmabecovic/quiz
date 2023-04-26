let questionText = document.querySelector("#questionTextP")
let questionTextDiv = document.querySelector("#questionTextDiv")

let main = document.querySelector("#main")
let cardQuestion = document.querySelector("#cardQuestion")

let allAnswers = document.querySelectorAll(".ans")
let answer1Label = document.querySelector("#answer1Label")
let answer2Label = document.querySelector("#answer2Label")
let answer3Label = document.querySelector("#answer3Label")
let answer4Label = document.querySelector("#answer4Label")

brojac = 0

function buttonClick() {
    allAnswers.forEach(el => {
      el.checked = false
    el.onclick = () => {
        brojac++
        console.log(brojac);  
    }
    });

    }
    


function ui() {
    console.log(questionText);
    questionText.textContent = questions[brojac].question
    answer1Label.textContent = questions[brojac].answers[0]
    answer2Label.textContent = questions[brojac].answers[1]
    answer3Label.textContent = questions[brojac].answers[2]
    answer4Label.textContent = questions[brojac].answers[3]
    
}

const shuffledQuestions = questions.sort((a, b) => 0.5 - Math.random());

console.log(questions)
console.log(shuffledQuestions);
buttonClick()
ui()