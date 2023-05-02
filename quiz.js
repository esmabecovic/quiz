let questionText = document.querySelector("#questionTextP");
let body = document.querySelector("body");
let questionTextDiv = document.querySelector("#questionTextDiv");
let main = document.querySelector("#main");
let cardQuestion = document.querySelector("#cardQuestion");
let allAnswers = document.querySelectorAll(".ans");
let answer1Label = document.querySelector("#answer1Label");
let answer2Label = document.querySelector("#answer2Label");
let answer3Label = document.querySelector("#answer3Label");
let answer4Label = document.querySelector("#answer4Label");
let submitBtn = document.querySelector("#submitBtn");
let btn = document.querySelector(".btn");
let modal = document.querySelector(".myModal");
let yesBtn = document.querySelector("#yes");
let noBtn = document.querySelector("#no");
let resetBtn = document.querySelector("#resetBtn");
let highScore = document.querySelector("#highScore");
let realHighScore = document.querySelector("#realHighScore");
let timer= document.querySelector(".timer");


var vreme=31;
var intervalID=setInterval(odbrojavanje,1000)
function odbrojavanje (){
  if(vreme>0){
    vreme-=1;
    timer.innerHTML=vreme
  }
  else{
        console.log("netacno");
        vreme=31;
        modal.style.display = "none";
       brojac = 15
        quizEnd()
        ui();
        allAnswers.forEach((el) => {
          el.checked = false;
          
        });
  
    console.log(intervalID)

  }
}



let brojac = 0;
let highScoreNumber = 0;
resetBtnFunc();
function buttonClick() {
  allAnswers.forEach(
    (el) => {
      el.checked = false;
      el.onclick = () => {};
    },
    (yesBtn.onclick = () => {
      vreme = 31
      allAnswers.forEach((el) => {
        if (el.checked) {
          if (+el.id === questions[brojac].correct_answer) {
            highScoreNumber++;
            highScore.textContent = `Correct answers: ${highScoreNumber}`;
            console.log("tacno");
            brojac++;
            console.log(brojac);
            if (brojac === 15) {
              quizEnd();
            }
            ui();
            modal.style.display = "none";
            allAnswers.forEach((el) => {
              el.checked = false;
            });
          } else {
            console.log("netacno");
            modal.style.display = "none";
            brojac++;
            if (brojac === 15) {
              quizEnd();
            }
            ui();
            allAnswers.forEach((el) => {
              el.checked = false;
            });
          }
        }
      });
    })
  );
}
function quizEnd() {
  modal.style.display = "none";
  cardQuestion.style.display = "flex";
  cardQuestion.style.justifyContent = "center";
  cardQuestion.style.alignItems = "center";
  cardQuestion.style.color = "white";
  cardQuestion.style.fontSize = "30px";
  cardQuestion.style.textAlign = "center";
  highScore.outerHTML = "";
  realHighScore.outerHTML = "";
  answers.outerHTML = ''
  questionText.style.fontSize = '30px'
  questionText.textContent = `Your score is: ${highScoreNumber}`
  questionText.style.color = 'white'
  btn.outerHTML = '';
  timer.innerHTML = ''
  timer.outerHTML = ''
  resetBtn.onclick = () => {
    location.reload()
  }

}
noBtn.onclick = () => {
  modal.style.display = "none";
};

function resetBtnFunc() {
  resetBtn.onclick = () => {
    console.log(brojac);
    brojac = 0;
    console.log(brojac);
    ui();
    highScoreNumber = 0;
    highScore.textContent = "";
  };
}

function ui() {
  console.log(brojac);
  console.log(questionText);
  questionText.textContent = questions[brojac].question;
  answer1Label.textContent = questions[brojac].answers[0];
  answer2Label.textContent = questions[brojac].answers[1];
  answer3Label.textContent = questions[brojac].answers[2];
  answer4Label.textContent = questions[brojac].answers[3];

  if (brojac === 4 || brojac === 9 || brojac === 14) {
    questionText.style.color = "#CBEF43";
  } else {
    questionText.style.color = "";
  }

}
function modalBtn() {
  submitBtn.onclick = () => {
    modal.style.display = "flex";
  };
}
const shuffledQuestions = questions.sort((a, b) => 0.5 - Math.random());

console.log(questions);
console.log(shuffledQuestions);
buttonClick();
ui();
modalBtn();
