const questions = [
  {
    question: "What is the supreme law of the land in most democratic countries?",
    options: ["Parliamentary Act", "Constitution", "Presidential Decree", "Court Ruling"],
    correct: "Constitution",
    explanation: "The Constitution is the highest legal authority and overrides all other laws."
  },
  {
    question: "Which type of law is based on previous court decisions?",
    options: ["Statutory law", "Common law", "Civil law", "Canon law"],
    correct: "Common law",
    explanation: "Common law is developed through judges’ decisions in individual cases."
  },
  {
    question: "The principle of 'habeas corpus' ensures:",
    options: ["Freedom of speech", "Right to education", "Protection against unlawful detention", "Right to vote"],
    correct: "Protection against unlawful detention",
    explanation: "'Habeas corpus' is a legal action demanding that a detained person be brought before court."
  },
  {
    question: "Which body interprets the law in most legal systems?",
    options: ["Police", "Judiciary", "Parliament", "Ministry of Justice"],
    correct: "Judiciary",
    explanation: "Judges interpret and apply laws in court cases."
  },
  {
    question: "Which of these is a criminal offence?",
    options: ["Breach of contract", "Assault", "Failure to pay tax", "Breaking a promise"],
    correct: "Assault",
    explanation: "Assault is a criminal act and can lead to prosecution."
  },
  {
    question: "What is the burden of proof in a criminal case?",
    options: ["Balance of probabilities", "Beyond reasonable doubt", "Reasonable suspicion", "Moral certainty"],
    correct: "Beyond reasonable doubt",
    explanation: "Criminal cases require proof beyond reasonable doubt for conviction."
  },
  {
    question: "A written law passed by a legislative body is called:",
    options: ["Treaty", "Decree", "Statute", "Judgement"],
    correct: "Statute",
    explanation: "A statute is a formal written law enacted by a legislative authority."
  },
  {
    question: "What does 'mens rea' mean?",
    options: ["Guilty mind", "Act of crime", "Law of the land", "Right to defense"],
    correct: "Guilty mind",
    explanation: "'Mens rea' refers to the intention or knowledge of wrongdoing in criminal law."
  },
  {
    question: "In contract law, 'consideration' refers to:",
    options: ["A kind gesture", "Payment or promise exchanged", "Moral duty", "Court's judgment"],
    correct: "Payment or promise exchanged",
    explanation: "Consideration is what each party offers to make a contract legally binding."
  },
  {
    question: "Which court is usually the highest in a country's judicial system?",
    options: ["Supreme Court", "Appeal Court", "Constitutional Court", "High Court"],
    correct: "Supreme Court",
    explanation: "The Supreme Court is the final court of appeal and interpreter of the constitution."
  },
  {
    question: "Who is responsible for prosecuting criminal cases?",
    options: ["Defense lawyer", "Judge", "Prosecutor", "Clerk"],
    correct: "Prosecutor",
    explanation: "The prosecutor represents the state and brings charges against the accused."
  },
  {
    question: "Which legal document allows someone to act on another's behalf?",
    options: ["Will", "Affidavit", "Power of attorney", "Summons"],
    correct: "Power of attorney",
    explanation: "A power of attorney gives legal authority to act on another's behalf."
  },
  {
    question: "Which of these is an equitable remedy?",
    options: ["Damages", "Injunction", "Imprisonment", "Fine"],
    correct: "Injunction",
    explanation: "Injunctions prevent a party from doing something, unlike damages which are monetary."
  },
  {
    question: "Which branch of government enacts laws?",
    options: ["Judicial", "Legislative", "Executive", "Military"],
    correct: "Legislative",
    explanation: "The legislative arm (e.g., Parliament or Congress) makes laws."
  },
  {
    question: "Which right is protected by the principle of 'double jeopardy'?",
    options: ["Right to fair trial", "Right to a lawyer", "Protection from being tried twice for same crime", "Freedom of religion"],
    correct: "Protection from being tried twice for same crime",
    explanation: "Double jeopardy prevents someone from being prosecuted twice for the same offense."
  },
  {
    question: "What is defamation?",
    options: ["False imprisonment", "Verbal abuse", "False statement damaging reputation", "Offensive behavior"],
    correct: "False statement damaging reputation",
    explanation: "Defamation involves harming someone’s reputation with false statements."
  },
  {
    question: "Which law governs relationships between individuals?",
    options: ["Public law", "Civil law", "Criminal law", "Constitutional law"],
    correct: "Civil law",
    explanation: "Civil law deals with disputes between private individuals or entities."
  },
  {
    question: "What is 'stare decisis'?",
    options: ["A legal penalty", "Binding precedent", "Latin for judgment", "A type of contract"],
    correct: "Binding precedent",
    explanation: "'Stare decisis' means following precedents set by previous court decisions."
  },
  {
    question: "What does ADR stand for in legal practice?",
    options: ["Alternate Domestic Rights", "Alternative Dispute Resolution", "Anti-Dispute Rules", "Administrative Defense Rights"],
    correct: "Alternative Dispute Resolution",
    explanation: "ADR methods like mediation and arbitration resolve disputes without court."
  },
  {
    question: "Which of the following is not a source of law?",
    options: ["Judicial precedent", "Custom", "Religious texts", "Fictional novels"],
    correct: "Fictional novels",
    explanation: "Sources of law include statutes, case law, and customs—not fictional books."
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

  localStorage.setItem("lawScore", score);
  localStorage.setItem("lawTotal", total);
  localStorage.setItem("lawDetailed", JSON.stringify(userAnswers));

  const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  history.push({
    course: "Law",
    score: score,
    time: new Date().toLocaleString()
  });
  localStorage.setItem("quizHistory", JSON.stringify(history));

  window.location.href = "result/lresult.html";
}

window.addEventListener("DOMContentLoaded", startQuiz);



