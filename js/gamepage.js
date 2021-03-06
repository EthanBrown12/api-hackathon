const gameCurrentQuestion = document.getElementById('gameCurrentQuestion');
let option1 = document.querySelector('.option1');
let answerNumber1 = document.querySelector('.answer-number1')
let option2 = document.querySelector('.option2');
let answerNumber2 = document.querySelector('.answer-number2')
let option3 = document.querySelector('.option3');
let answerNumber3 = document.querySelector('.answer-number3')
let option4 = document.querySelector('.option4');
let answerNumber4 = document.querySelector('.answer-number4')
let questionCounter = document.getElementById('questionCounter');
let currentQuestion = 1;
let score = document.getElementById('score');
const maxQuestions = 10;
let currentScore = 0;
const points = 50;
const modal = document.getElementById('win-modal');
const modalText = document.getElementById('end-game');



option1.addEventListener('click', option1Click)
answerNumber1.addEventListener('click', answerNumber1Click)
option2.addEventListener('click', option2Click)
answerNumber2.addEventListener('click', answerNumber2Click)
option3.addEventListener('click', option3Click)
answerNumber3.addEventListener('click', answerNumber3Click)
option4.addEventListener('click', option4Click)
answerNumber4.addEventListener('click', answerNumber4Click)

window.onload = sendApiRequest;

async function sendApiRequest() {
  let response = await fetch("https://opentdb.com/api.php?amount=50&difficulty=medium&type=multiple");
  console.log(response);
  let data = await response.json();
  console.log(data);
  createTrivia(data);
}

function createTrivia(data) {
  gameCurrentQuestion.innerHTML = `${data.results[0].question}`
  option1.innerHTML = `${data.results[0].correct_answer}`
  option2.innerHTML = `${data.results[0].incorrect_answers[0]}`
  option3.innerHTML = `${data.results[0].incorrect_answers[1]}`
  option4.innerHTML = `${data.results[0].incorrect_answers[2]}`
}

function option1Click(event) {
    if (currentQuestion >= maxQuestions && currentScore >= 300) {
    youWin();
    } else if(currentQuestion >= maxQuestions && currentScore < 250) {
      youLose();
    } else if(event.target === option1){
    gameCurrentQuestion.innerHTML = `Correct!`;
    currentQuestion++;
    questionCounter.innerHTML = currentQuestion;
    currentScore = currentScore + points;
    score.innerHTML = currentScore;
      setTimeout(function () {
        sendApiRequest();
      }, 1000);

  }

};
function answerNumber1Click(event) {
  if (currentQuestion >= maxQuestions && currentScore >= 300) {
    youWin();
  } else if (currentQuestion >= maxQuestions && currentScore < 250) {
    youLose();
  } else if (event.target === answerNumber1) {
    gameCurrentQuestion.innerHTML = `Correct!`;
    currentQuestion++;
    questionCounter.innerHTML = currentQuestion;
    currentScore = currentScore + points;
    score.innerHTML = currentScore;
    setTimeout(function () {
      sendApiRequest();
    }, 1000);

  }

};

function option2Click(event) {
  if (currentQuestion >= maxQuestions && currentScore >= 300) {
    youWin();
  } else if (currentQuestion >= maxQuestions && currentScore < 250) {
    youLose();
  } else if (event.target === option2) {
    gameCurrentQuestion.innerHTML = `Sorry, incorrect!`;
    currentQuestion++;
    questionCounter.innerHTML = currentQuestion;
    setTimeout(function () {
      sendApiRequest();
    }, 1000);
  }
}

function answerNumber2Click(event) {
  if (currentQuestion >= maxQuestions && currentScore >= 300) {
    youWin();
  } else if (currentQuestion >= maxQuestions && currentScore < 250) {
    youLose();
  } else if (event.target === answerNumber2) {
    gameCurrentQuestion.innerHTML = `Sorry, incorrect!`;
    currentQuestion++;
    questionCounter.innerHTML = currentQuestion;
    score.innerHTML = currentScore;
    setTimeout(function () {
      sendApiRequest();
    }, 1000);

  }

};

function option3Click(event) {
  if (currentQuestion >= maxQuestions && currentScore >= 300) {
    youWin();
  } else if (currentQuestion >= maxQuestions && currentScore < 250) {
    youLose();
  } else if (event.target === option3) {
    gameCurrentQuestion.innerHTML = `Sorry, incorrect!`;
    currentQuestion++;
    questionCounter.innerHTML = currentQuestion;
    setTimeout(function () {
      sendApiRequest();
    }, 1000);
  }
};

function answerNumber3Click(event) {
  if (currentQuestion >= maxQuestions && currentScore >= 300) {
    youWin();
  } else if (currentQuestion >= maxQuestions && currentScore < 250) {
    youLose();
  } else if (event.target === answerNumber3) {
    gameCurrentQuestion.innerHTML = `Sorry, incorrect!`;
    currentQuestion++;
    questionCounter.innerHTML = currentQuestion;
    score.innerHTML = currentScore;
    setTimeout(function () {
      sendApiRequest();
    }, 1000);

  }

};

function option4Click(event) {
  if (currentQuestion >= maxQuestions && currentScore >= 300) {
    youWin();
  } else if (currentQuestion >= maxQuestions && currentScore < 250) {
    youLose();
  } else if (event.target === option4) {
    gameCurrentQuestion.innerHTML = `Sorry, incorrect!`;
    currentQuestion++;
    questionCounter.innerHTML = currentQuestion;
    setTimeout(function () {
      sendApiRequest();
    }, 1000);
  }
}

function answerNumber4Click(event) {
  if (currentQuestion >= maxQuestions && currentScore >= 300) {
    youWin();
  } else if (currentQuestion >= maxQuestions && currentScore < 250) {
    youLose();
  } else if (event.target === answerNumber4) {
    gameCurrentQuestion.innerHTML = `Sorry, incorrect!`;
    currentQuestion++;
    questionCounter.innerHTML = currentQuestion;
    score.innerHTML = currentScore;
    setTimeout(function () {
      sendApiRequest();
    }, 1000);

  }

};



function youWin(){
      modal.classList.remove('hidden');
  modalText.textContent = `Congratulations you have won!!!`;
      gameCurrentQuestion.innerHTML = ` `;

   };

function youLose() {
  modal.classList.remove('hidden');
  modalText.textContent =`Sorry you lost because your score was less than 300 but have a drink!`;
  gameCurrentQuestion.innerHTML = ` `;
};
