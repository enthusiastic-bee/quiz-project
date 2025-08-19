const questions = [
  {
    question: "What is the hallmark of reversible cell injury?",
    options: ["Cell death", "Necrosis", "Cellular swelling", "Inflammation"],
    correct: "Cellular swelling",
    explanation: "Cellular swelling due to failure of ion pumps is the earliest sign of reversible cell injury."
  },
  {
    question: "Which of these is characteristic of apoptosis?",
    options: ["Cell swelling", "Nuclear fragmentation", "Loss of membrane integrity", "Inflammation"],
    correct: "Nuclear fragmentation",
    explanation: "Apoptosis involves nuclear fragmentation without inflammation."
  },
  {
    question: "Which protein regulates apoptosis?",
    options: ["Albumin", "Bcl-2", "Troponin", "Actin"],
    correct: "Bcl-2",
    explanation: "Bcl-2 family proteins control mitochondrial apoptosis pathways."
  },
  {
    question: "What is a granuloma?",
    options: ["Type of necrosis", "Fibrous capsule", "Cluster of immune cells", "Abscess"],
    correct: "Cluster of immune cells",
    explanation: "Granulomas are chronic inflammation structures composed of macrophages and T cells."
  },
  {
    question: "Coagulative necrosis is typical in:",
    options: ["Brain infarct", "Tuberculosis", "Lung abscess", "Myocardial infarction"],
    correct: "Myocardial infarction",
    explanation: "Coagulative necrosis is seen in infarcts, especially in the heart."
  },
  {
    question: "Which type of necrosis is characteristic of tuberculosis?",
    options: ["Liquefactive", "Fat", "Caseous", "Fibrinoid"],
    correct: "Caseous",
    explanation: "TB causes caseous necrosis, which looks cheese-like."
  },
  {
    question: "Which feature is typical of malignant tumors?",
    options: ["Slow growth", "Encapsulation", "Well-differentiation", "Invasion"],
    correct: "Invasion",
    explanation: "Malignant tumors invade surrounding tissues and metastasize."
  },
  {
    question: "Which stain detects amyloid deposits?",
    options: ["H&E", "PAS", "Ziehl-Neelsen", "Congo red"],
    correct: "Congo red",
    explanation: "Congo red stain turns amyloid apple-green under polarized light."
  },
  {
    question: "Hyperplasia refers to:",
    options: ["More cells", "Bigger cells", "Smaller cells", "Change in cell type"],
    correct: "More cells",
    explanation: "Hyperplasia is an increase in the number of cells."
  },
  {
    question: "Metaplasia is defined as:",
    options: ["Cell death", "Tumor growth", "One mature cell type replaced by another", "Increase in cell number"],
    correct: "One mature cell type replaced by another",
    explanation: "Metaplasia is a reversible change in adult cell type due to stress."
  },
  {
    question: "Predominant cells in acute inflammation are:",
    options: ["Lymphocytes", "Macrophages", "Plasma cells", "Neutrophils"],
    correct: "Neutrophils",
    explanation: "Neutrophils dominate in early acute inflammation."
  },
  {
    question: "Which is a systemic inflammatory response?",
    options: ["Erythema", "Edema", "Fever", "Warmth"],
    correct: "Fever",
    explanation: "Fever is caused by pyrogens acting on the hypothalamus."
  },
  {
    question: "Which is a tumor suppressor gene?",
    options: ["HER2", "ABL", "TP53", "KRAS"],
    correct: "TP53",
    explanation: "TP53 stops cell cycle progression in damaged cells."
  },
  {
    question: "Oncogenes are:",
    options: ["DNA repair genes", "Tumor suppressors", "Mutated proto-oncogenes", "Apoptosis promoters"],
    correct: "Mutated proto-oncogenes",
    explanation: "Oncogenes arise from mutated proto-oncogenes and drive cancer."
  },
  {
    question: "Which virus causes cervical cancer?",
    options: ["HIV", "HBV", "HPV", "EBV"],
    correct: "HPV",
    explanation: "High-risk HPV types (16, 18) are linked to cervical cancer."
  },
  {
    question: "Main cause of edema in nephrotic syndrome?",
    options: ["Increased hydrostatic pressure", "Lymph blockage", "Protein loss", "Inflammation"],
    correct: "Protein loss",
    explanation: "Proteinuria reduces plasma oncotic pressure, leading to edema."
  },
  {
    question: "What type of necrosis is seen in brain infarcts?",
    options: ["Caseous", "Coagulative", "Liquefactive", "Fat"],
    correct: "Liquefactive",
    explanation: "Brain infarcts undergo liquefactive necrosis due to high enzyme activity."
  },
  {
    question: "Feature of benign tumors?",
    options: ["Invasive", "Metastatic", "Encapsulated", "Undifferentiated"],
    correct: "Encapsulated",
    explanation: "Benign tumors are usually slow-growing and encapsulated."
  },
  {
    question: "Reed-Sternberg cells are seen in:",
    options: ["Hodgkin lymphoma", "Non-Hodgkin lymphoma", "Multiple myeloma", "Leukemia"],
    correct: "Hodgkin lymphoma",
    explanation: "Reed-Sternberg cells are diagnostic of Hodgkin lymphoma."
  },
  {
    question: "Fat necrosis is common in:",
    options: ["Heart", "Pancreas", "Liver", "Lung"],
    correct: "Pancreas",
    explanation: "Fat necrosis from enzyme leakage is typical in acute pancreatitis."
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

  localStorage.setItem("pathologyScore", score);
  localStorage.setItem("pathologyTotal", total);
  localStorage.setItem("pathologyDetailed", JSON.stringify(userAnswers));

  const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  history.push({
    course: "Pathology",
    score: score,
    time: new Date().toLocaleString()
  });
  localStorage.setItem("quizHistory", JSON.stringify(history));

  window.location.href = "result/patresult.html";
}

window.addEventListener("DOMContentLoaded", startQuiz);

