const questions = [
  {
    question: "Which law states that stress is proportional to strain within the elastic limit?",
    options: ["Newton's Law", "Hooke's Law", "Pascal's Law", "Bernoulli's Principle"],
    correct: "Hooke's Law",
    explanation: "Hooke's Law describes linear elasticity in materials: stress ∝ strain."
  },
  {
    question: "Which unit is used to measure torque?",
    options: ["Joule", "Newton", "Newton-meter", "Watt"],
    correct: "Newton-meter",
    explanation: "Torque is a measure of rotational force and is expressed in Newton-meters (Nm)."
  },
  {
    question: "Which engine has no spark plug?",
    options: ["Petrol engine", "Diesel engine", "Two-stroke engine", "Gasoline engine"],
    correct: "Diesel engine",
    explanation: "Diesel engines use compression ignition and do not require spark plugs."
  },
  {
    question: "Which cycle is used in a steam power plant?",
    options: ["Otto cycle", "Diesel cycle", "Rankine cycle", "Brayton cycle"],
    correct: "Rankine cycle",
    explanation: "The Rankine cycle describes the process in steam power generation."
  },
  {
    question: "Which metal has the highest thermal conductivity?",
    options: ["Copper", "Iron", "Aluminum", "Silver"],
    correct: "Silver",
    explanation: "Silver is the best thermal conductor among common metals."
  },
  {
    question: "What is the SI unit of pressure?",
    options: ["Pascal", "Bar", "Atmosphere", "Torr"],
    correct: "Pascal",
    explanation: "Pressure is measured in Pascals (Pa), which is N/m²."
  },
  {
    question: "Which instrument measures rotational speed?",
    options: ["Manometer", "Tachometer", "Thermometer", "Altimeter"],
    correct: "Tachometer",
    explanation: "Tachometers measure revolutions per minute (RPM)."
  },
  {
    question: "What is the function of a flywheel?",
    options: ["Increase friction", "Store energy", "Generate heat", "Reduce velocity"],
    correct: "Store energy",
    explanation: "Flywheels store rotational energy and help maintain uniform motion."
  },
  {
    question: "What is the efficiency of an ideal machine?",
    options: ["0%", "50%", "75%", "100%"],
    correct: "100%",
    explanation: "An ideal machine has no energy losses, so efficiency is 100%."
  },
  {
    question: "What type of gear is used to connect non-parallel and non-intersecting shafts?",
    options: ["Spur gear", "Bevel gear", "Helical gear", "Worm gear"],
    correct: "Worm gear",
    explanation: "Worm gears connect shafts at right angles with high torque output."
  },
  {
    question: "Which one is NOT a thermodynamic property?",
    options: ["Pressure", "Temperature", "Heat", "Volume"],
    correct: "Heat",
    explanation: "Heat is a form of energy transfer, not a property of the system."
  },
  {
    question: "What is Poisson's ratio?",
    options: ["Shear strain / Normal strain", "Lateral strain / Longitudinal strain", "Stress / Strain", "Strain / Stress"],
    correct: "Lateral strain / Longitudinal strain",
    explanation: "Poisson's ratio measures deformation in perpendicular directions."
  },
  {
    question: "What is cavitation in pumps?",
    options: ["Flow increase", "Bubbling due to low pressure", "Oil leakage", "Filter clogging"],
    correct: "Bubbling due to low pressure",
    explanation: "Cavitation is the formation of vapor bubbles in low-pressure zones."
  },
  {
    question: "The Mach number is defined as:",
    options: ["Velocity of sound / Object speed", "Object speed / Speed of sound", "Speed of air / Pressure", "Kinetic energy / Volume"],
    correct: "Object speed / Speed of sound",
    explanation: "Mach number indicates the ratio of object speed to speed of sound."
  },
  {
    question: "Which material is best for making cutting tools?",
    options: ["Cast iron", "Mild steel", "High-speed steel", "Brass"],
    correct: "High-speed steel",
    explanation: "High-speed steel retains hardness at high temperatures, ideal for cutting."
  },
  {
    question: "Bernoulli’s equation is applicable to:",
    options: ["Viscous flow", "Compressible flow", "Turbulent flow", "Incompressible flow"],
    correct: "Incompressible flow",
    explanation: "Bernoulli's principle assumes fluid is incompressible and non-viscous."
  },
  {
    question: "Which of the following is a scalar quantity?",
    options: ["Torque", "Velocity", "Displacement", "Energy"],
    correct: "Energy",
    explanation: "Energy has magnitude only and no direction, hence it's a scalar."
  },
  {
    question: "Which component in a car converts mechanical energy into electrical energy?",
    options: ["Radiator", "Battery", "Starter", "Alternator"],
    correct: "Alternator",
    explanation: "An alternator charges the battery by converting mechanical to electrical energy."
  },
  {
    question: "The first law of thermodynamics is a statement of:",
    options: ["Entropy", "Conservation of mass", "Conservation of energy", "Enthalpy"],
    correct: "Conservation of energy",
    explanation: "It states energy can neither be created nor destroyed, only transformed."
  },
  {
    question: "A ductile material exhibits:",
    options: ["High elasticity", "Low yield strength", "Brittle fracture", "Large plastic deformation"],
    correct: "Large plastic deformation",
    explanation: "Ductile materials can deform significantly before fracturing."
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

  localStorage.setItem("mechengineScore", score);
  localStorage.setItem("mechengineTotal", total);
  localStorage.setItem("mechengineDetailed", JSON.stringify(userAnswers));

  const history = JSON.parse(localStorage.getItem("quizHistory")) || [];
  history.push({
    course: "Medical Biochemistry",
    score: score,
    time: new Date().toLocaleString()
  });
  localStorage.setItem("quizHistory", JSON.stringify(history));

  window.location.href = "result/mechresult.html";
}

window.addEventListener("DOMContentLoaded", startQuiz);



