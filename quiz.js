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
let resetBtn = document.querySelector("#resetBtn")

brojac = 0;

function buttonClick() {
  allAnswers.forEach(
    (el) => {
      el.checked = false;
      el.onclick = () => {
        console.log(brojac);
      };
    },
    (yesBtn.onclick = () => {
      allAnswers.forEach((el) => {
        // console.log(+el.id);
        if (el.checked) {
          if (+el.id === questions[brojac].correct_answer) {
            console.log("tacno");
            brojac++;
            ui();
            modal.style.display = "none";
            // console.log(el.id);
            // console.log(questions[i].correct_answer);
            allAnswers.forEach((el) => {
              el.checked = false;
            });
          } else {
            console.log("netacno");
            modal.style.display = "none";
            // alert('Pokusajte ponovo!')
            brojac++;
            ui();
            allAnswers.forEach((el) => {
              el.checked = false;
            });
            // return false
          }
        }
      });
    })
  );
}
noBtn.onclick = () => {
  modal.style.display = "none";
};

function resetBtnFunc() {
    resetBtn.onclick = () => {
        location.reload()
    }
    
}

function ui() {
  console.log(questionText);
  questionText.textContent = questions[brojac].question;
  answer1Label.textContent = questions[brojac].answers[0];
  answer2Label.textContent = questions[brojac].answers[1];
  answer3Label.textContent = questions[brojac].answers[2];
  answer4Label.textContent = questions[brojac].answers[3];

  if (brojac === 4 || brojac === 9 || brojac === 14) {
    questionText.style.color = "yellow";
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
resetBtnFunc()
