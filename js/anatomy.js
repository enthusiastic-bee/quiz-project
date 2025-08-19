const questions = [
  {
    question: "Which bone is known as the collarbone?",
    options: ["Scapula", "Clavicle", "Femur", "Humerus"],
    correct: "Clavicle",
    explanation: "The clavicle, or collarbone, connects the arm to the body."
  },
  {
    question: "What is the largest bone in the human body?",
    options: ["Tibia", "Fibula", "Femur", "Humerus"],
    correct: "Femur",
    explanation: "The femur (thigh bone) is the longest and strongest bone in the body."
  },
  {
    question: "Which part of the brain controls balance?",
    options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
    correct: "Cerebellum",
    explanation: "The cerebellum controls coordination and balance."
  },
  {
    question: "How many ribs are in the human body?",
    options: ["12 pairs", "10 pairs", "14 pairs", "11 pairs"],
    correct: "12 pairs",
    explanation: "Humans have 12 pairs of ribs (24 total)."
  },
  {
    question: "What structure protects the brain?",
    options: ["Skull", "Spine", "Cartilage", "Ribs"],
    correct: "Skull",
    explanation: "The skull encases and protects the brain."
  },
  {
    question: "Which type of joint is the knee?",
    options: ["Ball-and-socket", "Hinge", "Pivot", "Gliding"],
    correct: "Hinge",
    explanation: "The knee is a hinge joint, allowing movement in one direction."
  },
  {
    question: "The mandible is the bone of the:",
    options: ["Upper arm", "Lower leg", "Lower jaw", "Pelvis"],
    correct: "Lower jaw",
    explanation: "The mandible is the lower jawbone."
  },
  {
    question: "How many chambers are in the human heart?",
    options: ["2", "3", "4", "5"],
    correct: "4",
    explanation: "The heart has 4 chambers: 2 atria and 2 ventricles."
  },
  {
    question: "What is the smallest bone in the human body?",
    options: ["Ulna", "Stapes", "Radius", "Patella"],
    correct: "Stapes",
    explanation: "The stapes in the middle ear is the smallest bone."
  },
  {
    question: "Which organ is part of both the digestive and endocrine system?",
    options: ["Liver", "Pancreas", "Gallbladder", "Stomach"],
    correct: "Pancreas",
    explanation: "The pancreas aids digestion and regulates blood sugar via hormones."
  }
];

let currentQuestion = 0;
let score = 0;
let timer = 120;
let interval;
const userAnswers = [];

const questionBox = document.getElementById("question-box");
const optionsBox = document.getElementById("options-box");
const timerBox = document.getElementById("timer");

function startQuiz() {
  loadQuestion();
  interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timer--;
  timerBox.textContent = `⏱️ Time Left: ${timer}s`;
  if (timer <= 0) {
    clearInterval(interval);
    endQuiz();
  }
}

function loadQuestion() {
  const q = questions[currentQuestion];
  questionBox.innerHTML = `<i class="fas fa-circle-question"></i> ${q.question}`;
  optionsBox.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<i class="fas fa-hand-pointer"></i> ${option}`;
    btn.onclick = () => checkAnswer(btn, option);
    optionsBox.appendChild(btn);

    setTimeout(() => {
      btn.classList.add("show");
    }, index * 200);
  });
}

function checkAnswer(button, selected) {
  const q = questions[currentQuestion];
  const isCorrect = selected === q.correct;
  if (isCorrect) score++;

  userAnswers.push({
    question: q.question,
    selected: selected,
    correct: q.correct,
    explanation: q.explanation
  });

  button.style.backgroundColor = isCorrect ? "#28a745" : "#dc3545";
  button.style.color = isCorrect ? "white" : "white";
  button.style.border = isCorrect ? "none" : "none"
  button.disabled = true;

  const allButtons = document.querySelectorAll(".option-btn");
  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent.includes(q.correct)) {
      btn.style.backgroundColor = "#28a745";
    }
  });

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      endQuiz();
    }
  }, 800);
}

function endQuiz() {
  clearInterval(interval);
  const total = questions.length;

  localStorage.setItem("anatomyScore", score);
  localStorage.setItem("anatomyTotal", total);
  localStorage.setItem("anatomyDetailed", JSON.stringify(userAnswers));

  const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  history.push({
    course: "Anatomy",
    score: score,
    time: new Date().toLocaleString()
  });
  localStorage.setItem("quizHistory", JSON.stringify(history));

  window.location.href = "result/aresult.html";
}

window.addEventListener("DOMContentLoaded", startQuiz);
