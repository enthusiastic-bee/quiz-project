const questions = [
  {
    question: "Which organ regulates blood pH through respiration?",
    options: ["Liver", "Heart", "Lungs", "Kidney"],
    correct: "Lungs",
    explanation: "The lungs regulate blood pH by controlling CO2 levels, which influence blood acidity."
  },
  {
    question: "What is the normal resting heart rate for adults?",
    options: ["40–60 bpm", "60–100 bpm", "100–120 bpm", "120–140 bpm"],
    correct: "60–100 bpm",
    explanation: "Normal adult resting heart rate ranges from 60–100 beats per minute."
  },
  {
    question: "Which structure is known as the pacemaker of the heart?",
    options: ["AV node", "SA node", "Bundle of His", "Purkinje fibers"],
    correct: "SA node",
    explanation: "The sinoatrial (SA) node initiates the heartbeat and sets the heart rate."
  },
  {
    question: "Which hormone reduces blood glucose levels?",
    options: ["Glucagon", "Insulin", "Adrenaline", "Cortisol"],
    correct: "Insulin",
    explanation: "Insulin helps reduce blood glucose by promoting its uptake into cells."
  },
  {
    question: "Where does gas exchange occur in the lungs?",
    options: ["Trachea", "Bronchi", "Alveoli", "Pleura"],
    correct: "Alveoli",
    explanation: "Alveoli are tiny air sacs where oxygen and carbon dioxide are exchanged."
  },
  {
    question: "What is the function of hemoglobin?",
    options: ["Fight infections", "Transport oxygen", "Clot blood", "Digest fats"],
    correct: "Transport oxygen",
    explanation: "Hemoglobin binds to oxygen in the lungs and delivers it to tissues throughout the body."
  },
  {
    question: "Which part of the brain controls breathing?",
    options: ["Cerebellum", "Cerebrum", "Medulla oblongata", "Thalamus"],
    correct: "Medulla oblongata",
    explanation: "The medulla oblongata regulates involuntary functions like breathing and heartbeat."
  },
  {
    question: "Which blood cells fight infections?",
    options: ["Red blood cells", "White blood cells", "Platelets", "Plasma cells"],
    correct: "White blood cells",
    explanation: "White blood cells (leukocytes) defend the body against infectious disease."
  },
  {
    question: "Which vitamin is essential for blood clotting?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correct: "Vitamin K",
    explanation: "Vitamin K is required for the synthesis of proteins involved in blood clotting."
  },
  {
    question: "What is the main function of the kidneys?",
    options: ["Produce insulin", "Regulate temperature", "Filter blood", "Store bile"],
    correct: "Filter blood",
    explanation: "The kidneys filter waste from the blood and maintain fluid and electrolyte balance."
  },
  {
    question: "What is the largest artery in the body?",
    options: ["Carotid", "Pulmonary", "Aorta", "Femoral"],
    correct: "Aorta",
    explanation: "The aorta is the main artery that carries oxygenated blood from the heart to the body."
  },
  {
    question: "Which muscle is responsible for breathing?",
    options: ["Diaphragm", "Biceps", "Pectoral", "Abdominal"],
    correct: "Diaphragm",
    explanation: "The diaphragm contracts and relaxes to enable breathing."
  },
  {
    question: "What is the normal body temperature in Celsius?",
    options: ["35.5°C", "36.5°C", "37°C", "38°C"],
    correct: "37°C",
    explanation: "The average normal body temperature is approximately 37°C."
  },
  {
    question: "Which hormone controls the body's metabolism?",
    options: ["Thyroxine", "Adrenaline", "Insulin", "Estrogen"],
    correct: "Thyroxine",
    explanation: "Thyroxine (T4), produced by the thyroid gland, regulates metabolism."
  },
  {
    question: "Which system regulates hormones?",
    options: ["Nervous system", "Digestive system", "Endocrine system", "Respiratory system"],
    correct: "Endocrine system",
    explanation: "The endocrine system secretes hormones that regulate various body processes."
  },
  {
    question: "What is the basic functional unit of the kidney?",
    options: ["Neuron", "Alveolus", "Nephron", "Osteon"],
    correct: "Nephron",
    explanation: "The nephron filters blood and forms urine in the kidney."
  },
  {
    question: "Which part of the brain regulates body temperature?",
    options: ["Cerebellum", "Hypothalamus", "Medulla", "Pons"],
    correct: "Hypothalamus",
    explanation: "The hypothalamus maintains homeostasis, including temperature regulation."
  },
  {
    question: "Which blood vessels carry blood back to the heart?",
    options: ["Arteries", "Capillaries", "Veins", "Aorta"],
    correct: "Veins",
    explanation: "Veins return deoxygenated blood to the heart."
  },
  {
    question: "What do red blood cells transport?",
    options: ["Hormones", "Nutrients", "Carbon dioxide", "Oxygen"],
    correct: "Oxygen",
    explanation: "Red blood cells carry oxygen from the lungs to body tissues."
  },
  {
    question: "What is the fluid portion of blood called?",
    options: ["Serum", "Plasma", "Lymph", "Bile"],
    correct: "Plasma",
    explanation: "Plasma is the liquid component of blood that carries cells and proteins throughout the body."
  }
];

let currentQuestion = 0;
let score = 0;
let timer = 600;
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

  localStorage.setItem("physiologyScore", score);
  localStorage.setItem("physiologyTotal", total);
  localStorage.setItem("physiologyDetailed", JSON.stringify(userAnswers));

  const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  history.push({
    course: "Physiology",
    score: score,
    time: new Date().toLocaleString()
  });
  localStorage.setItem("quizHistory", JSON.stringify(history));

  window.location.href = "result/presult.html";
}

window.addEventListener("DOMContentLoaded", startQuiz);
