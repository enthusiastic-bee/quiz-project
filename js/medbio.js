const questions = [
  {
    question: "Which molecule is the primary energy currency of the cell?",
    options: ["ATP", "DNA", "RNA", "NADH"],
    correct: "ATP",
    explanation: "ATP (Adenosine Triphosphate) stores and transfers energy in cells."
  },
  {
    question: "Which enzyme breaks down starch into maltose?",
    options: ["Amylase", "Lipase", "Lactase", "Pepsin"],
    correct: "Amylase",
    explanation: "Amylase breaks down starch into maltose in the mouth and small intestine."
  },
  {
    question: "Which vitamin is essential for collagen synthesis?",
    options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    correct: "Vitamin C",
    explanation: "Vitamin C is a cofactor in collagen synthesis and wound healing."
  },
  {
    question: "Which organ is responsible for urea formation?",
    options: ["Liver", "Kidney", "Lungs", "Heart"],
    correct: "Liver",
    explanation: "The liver converts ammonia to urea during protein metabolism."
  },
  {
    question: "What is the building block of proteins?",
    options: ["Fatty acids", "Monosaccharides", "Amino acids", "Nucleotides"],
    correct: "Amino acids",
    explanation: "Proteins are made from long chains of amino acids."
  },
  {
    question: "Which lipid is most important in cell membranes?",
    options: ["Cholesterol", "Triglycerides", "Phospholipids", "Steroids"],
    correct: "Phospholipids",
    explanation: "Phospholipids form the lipid bilayer of cell membranes."
  },
  {
    question: "Which coenzyme is required for dehydrogenase enzymes?",
    options: ["FAD", "ATP", "CoA", "Fe2+"],
    correct: "FAD",
    explanation: "FAD acts as an electron carrier for dehydrogenase enzymes."
  },
  {
    question: "Which mineral is essential for hemoglobin synthesis?",
    options: ["Calcium", "Iron", "Zinc", "Magnesium"],
    correct: "Iron",
    explanation: "Iron is required for hemoglobin, which carries oxygen in the blood."
  },
  {
    question: "Which organ stores glycogen for energy release?",
    options: ["Pancreas", "Liver", "Spleen", "Gallbladder"],
    correct: "Liver",
    explanation: "The liver stores glycogen and releases glucose during fasting."
  },
  {
    question: "Which pathway converts glucose to pyruvate?",
    options: ["Gluconeogenesis", "Glycolysis", "Krebs cycle", "Beta-oxidation"],
    correct: "Glycolysis",
    explanation: "Glycolysis breaks down glucose to produce ATP and pyruvate."
  },
  {
    question: "Which vitamin is essential for blood clotting?",
    options: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
    correct: "Vitamin K",
    explanation: "Vitamin K is necessary for activating clotting factors."
  },
  {
    question: "What is the pH of human blood?",
    options: ["6.8", "7.0", "7.4", "8.0"],
    correct: "7.4",
    explanation: "Normal blood pH is tightly regulated around 7.4."
  },
  {
    question: "What is the end product of fatty acid beta-oxidation?",
    options: ["Pyruvate", "Lactate", "Acetyl-CoA", "Glycerol"],
    correct: "Acetyl-CoA",
    explanation: "Beta-oxidation breaks down fatty acids into Acetyl-CoA units."
  },
  {
    question: "Which enzyme digests fats in the intestine?",
    options: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
    correct: "Lipase",
    explanation: "Lipase breaks down triglycerides into glycerol and fatty acids."
  },
  {
    question: "Which molecule carries amino acids to the ribosome?",
    options: ["mRNA", "tRNA", "rRNA", "snRNA"],
    correct: "tRNA",
    explanation: "tRNA transports amino acids during protein synthesis."
  },
  {
    question: "Which base is found only in RNA?",
    options: ["Thymine", "Cytosine", "Adenine", "Uracil"],
    correct: "Uracil",
    explanation: "Uracil replaces thymine in RNA molecules."
  },
  {
    question: "Which condition is caused by Vitamin B12 deficiency?",
    options: ["Scurvy", "Pellagra", "Beriberi", "Pernicious anemia"],
    correct: "Pernicious anemia",
    explanation: "Vitamin B12 deficiency leads to megaloblastic/pernicious anemia."
  },
  {
    question: "Where does the Krebs cycle take place?",
    options: ["Cytoplasm", "Nucleus", "Mitochondria", "Ribosome"],
    correct: "Mitochondria",
    explanation: "The Krebs cycle occurs in the mitochondrial matrix."
  },
  {
    question: "Which enzyme converts glucose to glucose-6-phosphate?",
    options: ["Hexokinase", "Isomerase", "Peptidase", "Lactase"],
    correct: "Hexokinase",
    explanation: "Hexokinase catalyzes the first step of glycolysis."
  },
  {
    question: "Which nucleotide base pairs with guanine?",
    options: ["Adenine", "Thymine", "Cytosine", "Uracil"],
    correct: "Cytosine",
    explanation: "In DNA and RNA, guanine pairs with cytosine via three hydrogen bonds."
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

  localStorage.setItem("medicalBiochemistryScore", score);
  localStorage.setItem("medicalBiochemistryTotal", total);
  localStorage.setItem("medicalBiochemistryDetailed", JSON.stringify(userAnswers));

  const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  history.push({
    course: "Medical Biochemistry",
    score: score,
    time: new Date().toLocaleString()
  });
  localStorage.setItem("quizHistory", JSON.stringify(history));

  window.location.href = "result/mresult.html";
}

window.addEventListener("DOMContentLoaded", startQuiz);
