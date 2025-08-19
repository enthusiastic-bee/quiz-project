const questions = [
  {
    question: "Which of the following is a beta-blocker?",
    options: ["Atropine", "Propranolol", "Captopril", "Losartan"],
    correct: "Propranolol",
    explanation: "Propranolol is a non-selective beta-adrenergic blocker used to manage hypertension and anxiety."
  },
  {
    question: "Which drug is commonly used to treat hypertension?",
    options: ["Ibuprofen", "Paracetamol", "Amlodipine", "Omeprazole"],
    correct: "Amlodipine",
    explanation: "Amlodipine is a calcium channel blocker used in managing high blood pressure."
  },
  {
    question: "Which of these drugs is used to reduce stomach acid?",
    options: ["Loratadine", "Metformin", "Omeprazole", "Salbutamol"],
    correct: "Omeprazole",
    explanation: "Omeprazole is a proton pump inhibitor used to reduce gastric acid secretion."
  },
  {
    question: "Which class does Diazepam belong to?",
    options: ["Opioids", "Benzodiazepines", "Antidepressants", "Antipsychotics"],
    correct: "Benzodiazepines",
    explanation: "Diazepam is a benzodiazepine used for anxiety, seizures, and muscle relaxation."
  },
  {
    question: "Which antibiotic inhibits bacterial cell wall synthesis?",
    options: ["Penicillin", "Erythromycin", "Tetracycline", "Ciprofloxacin"],
    correct: "Penicillin",
    explanation: "Penicillin disrupts bacterial cell wall formation, leading to lysis of the bacteria."
  },
  {
    question: "What is the antidote for acetaminophen (paracetamol) overdose?",
    options: ["Naloxone", "Atropine", "N-acetylcysteine", "Flumazenil"],
    correct: "N-acetylcysteine",
    explanation: "N-acetylcysteine replenishes glutathione, neutralizing the toxic metabolite of acetaminophen."
  },
  {
    question: "Which of the following is an antiplatelet drug?",
    options: ["Heparin", "Aspirin", "Warfarin", "Alteplase"],
    correct: "Aspirin",
    explanation: "Aspirin inhibits thromboxane A2, preventing platelet aggregation."
  },
  {
    question: "Which drug is used in asthma treatment as a bronchodilator?",
    options: ["Furosemide", "Salbutamol", "Morphine", "Metoprolol"],
    correct: "Salbutamol",
    explanation: "Salbutamol is a beta-2 agonist that relaxes bronchial muscles."
  },
  {
    question: "Which class of drugs is primarily used to treat depression?",
    options: ["Antihistamines", "Antipsychotics", "SSRIs", "Benzodiazepines"],
    correct: "SSRIs",
    explanation: "SSRIs (Selective Serotonin Reuptake Inhibitors) increase serotonin levels and treat depression."
  },
  {
    question: "Which drug is a loop diuretic?",
    options: ["Spironolactone", "Hydrochlorothiazide", "Furosemide", "Amiloride"],
    correct: "Furosemide",
    explanation: "Furosemide inhibits the Na+/K+/2Cl- transporter in the loop of Henle."
  },
  {
    question: "What is the mechanism of action of Warfarin?",
    options: ["Vitamin K antagonist", "Thrombin inhibitor", "Platelet blocker", "Calcium channel blocker"],
    correct: "Vitamin K antagonist",
    explanation: "Warfarin inhibits vitamin K epoxide reductase, reducing synthesis of clotting factors II, VII, IX, and X."
  },
  {
    question: "Which of the following is an opioid analgesic?",
    options: ["Lidocaine", "Ibuprofen", "Morphine", "Aspirin"],
    correct: "Morphine",
    explanation: "Morphine binds to opioid receptors in the CNS to relieve pain."
  },
  {
    question: "Which antihypertensive is also used for benign prostatic hyperplasia (BPH)?",
    options: ["Amlodipine", "Prazosin", "Captopril", "Metoprolol"],
    correct: "Prazosin",
    explanation: "Prazosin is an alpha-1 blocker that reduces blood pressure and relaxes smooth muscle in the prostate."
  },
  {
    question: "Which anti-TB drug causes orange-red discoloration of body fluids?",
    options: ["Isoniazid", "Ethambutol", "Rifampin", "Pyrazinamide"],
    correct: "Rifampin",
    explanation: "Rifampin turns urine, tears, and sweat orange-red."
  },
  {
    question: "Which drug is used in type 2 diabetes treatment?",
    options: ["Insulin", "Metformin", "Hydrocortisone", "Adrenaline"],
    correct: "Metformin",
    explanation: "Metformin decreases hepatic glucose production and increases insulin sensitivity."
  },
  {
    question: "Which of the following is a selective COX-2 inhibitor?",
    options: ["Ibuprofen", "Aspirin", "Celecoxib", "Naproxen"],
    correct: "Celecoxib",
    explanation: "Celecoxib selectively inhibits the COX-2 enzyme, reducing inflammation with fewer gastric side effects."
  },
  {
    question: "Which drug is used as a local anesthetic?",
    options: ["Ketamine", "Lidocaine", "Propofol", "Morphine"],
    correct: "Lidocaine",
    explanation: "Lidocaine blocks voltage-gated sodium channels in neurons, preventing pain signal conduction."
  },
  {
    question: "Which drug is used to treat hyperthyroidism?",
    options: ["Levothyroxine", "Propranolol", "Methimazole", "Prednisone"],
    correct: "Methimazole",
    explanation: "Methimazole inhibits thyroid hormone synthesis by blocking TPO."
  },
  {
    question: "Which drug is used to prevent motion sickness?",
    options: ["Diphenhydramine", "Omeprazole", "Propranolol", "Atenolol"],
    correct: "Diphenhydramine",
    explanation: "Diphenhydramine is an antihistamine with antiemetic and sedative effects."
  },
  {
    question: "Which antipsychotic causes extrapyramidal side effects?",
    options: ["Haloperidol", "Clozapine", "Olanzapine", "Risperidone"],
    correct: "Haloperidol",
    explanation: "Haloperidol is a typical antipsychotic with a high risk of extrapyramidal symptoms."
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

  localStorage.setItem("pharmacologyScore", score);
  localStorage.setItem("pharmacologyTotal", total);
  localStorage.setItem("pharmacologyDetailed", JSON.stringify(userAnswers));

  const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  history.push({
    course: "Pharmacology",
    score: score,
    time: new Date().toLocaleString()
  });
  localStorage.setItem("quizHistory", JSON.stringify(history));

  window.location.href = "result/phresult.html";
}

window.addEventListener("DOMContentLoaded", startQuiz);
