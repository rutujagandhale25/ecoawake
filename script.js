// Quiz data
const quizData = [
  {
    question: "1️⃣ What can you do to reduce plastic pollution?",
    options: ["Use reusable bottles", "Buy more plastic", "Burn plastics"],
    correct: 0
  },
  {
    question: "2️⃣ Best way to save energy at home?",
    options: ["Keep lights on all day", "Use LED bulbs", "Leave devices charging overnight"],
    correct: 1
  },
  {
    question: "3️⃣ What helps absorb CO₂ from the atmosphere?",
    options: ["Trees", "Plastic bags", "Cars"],
    correct: 0
  },
  {
    question: "4️⃣ Which is an eco-friendly mode of transport?",
    options: ["Walking", "Flying alone", "Driving solo in a car"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  document.getElementById("quizSection").scrollIntoView({ behavior: "smooth" });
  showQuestion();
}

function showQuestion() {
  const box = document.getElementById("quizBox");
  if (currentQuestion < quizData.length) {
    const q = quizData[currentQuestion];
    box.innerHTML = `
      <h3>${q.question}</h3>
      ${q.options.map((opt, i) => `
        <div class="quiz-option" onclick="selectOption(${i})">${opt}</div>
      `).join('')}
    `;
  } else {
    box.innerHTML = `
      <h3>🎉 Quiz Completed!</h3>
      <p>You scored ${score} / ${quizData.length}</p>
      <p>${score === quizData.length ? "🌿 Amazing! You're an Eco Hero!" : "💪 Keep learning and practicing eco-friendly habits!"}</p>
      <button onclick="restartQuiz()">Restart Quiz</button>
    `;
  }
}

function selectOption(i) {
  if (i === quizData[currentQuestion].correct) score++;
  currentQuestion++;
  showQuestion();
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

// Upload image preview
const input = document.getElementById('fileInput');
const preview = document.getElementById('preview');
input.addEventListener('change', () => {
  const file = input.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      preview.innerHTML = `<img src="${e.target.result}" alt="Eco photo">`;
    };
    reader.readAsDataURL(file);
  }
});
