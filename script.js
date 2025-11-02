// Elements
const modal = document.getElementById("quizModal");
const btn = document.getElementById("quizBtn");
const span = document.getElementById("closeQuiz");
const quizBox = document.getElementById("quizBox");

// Open modal
btn.onclick = function() {
  modal.style.display = "block";
  startMcqQuiz();
};

// Close modal
span.onclick = function() {
  modal.style.display = "none";
};

// Close when clicking outside modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// --- Lightning MCQ Quiz ---
const mcqData = [
  {
    question: "Which of these is a renewable energy source?",
    options: ["Coal", "Solar Power", "Petroleum", "Natural Gas"],
    correct: 1
  },
  {
    question: "What should you do to save water at home?",
    options: ["Leave tap running", "Fix leaks", "Wash car daily", "Use more water"],
    correct: 1
  },
  {
    question: "Which material is biodegradable?",
    options: ["Plastic bottle", "Glass jar", "Banana peel", "Aluminum can"],
    correct: 2
  }
];

let qIndex = 0;
let points = 0;

function startMcqQuiz() {
  qIndex = 0;
  points = 0;
  showMcqQuestion();
}

function showMcqQuestion() {
  if (qIndex < mcqData.length) {
    const q = mcqData[qIndex];
    quizBox.innerHTML = `
      <h3>${q.question}</h3>
      ${q.options.map((opt, i) => `
        <div class="quiz-option" onclick="selectMcq(${i})">${opt}</div>
      `).join('')}
    `;
  } else {
    quizBox.innerHTML = `
      <h3>⚡ Lightning Round Complete!</h3>
      <p>You got ${points} / ${mcqData.length} correct.</p>
      <p>${points === 3 ? "🌿 Perfect! You're an Eco Genius!" : "💪 Keep improving — every small step counts!"}</p>
      <button onclick="startMcqQuiz()">Play Again</button>
    `;
  }
}

function selectMcq(i) {
  if (i === mcqData[qIndex].correct) {
    points++;
  }
  qIndex++;
  showMcqQuestion();
}
