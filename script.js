// Modal open/close
const modal = document.getElementById("quizModal");
const btn = document.getElementById("quizBtn");
const span = document.getElementsByClassName("close")[0];
btn.onclick = () => (modal.style.display = "block");
span.onclick = () => (modal.style.display = "none");
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };

// Image preview
const input = document.getElementById("fileInput");
if (input) {
  input.addEventListener("change", () => {
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        document.getElementById("preview").innerHTML = `<img src="${e.target.result}" alt="Eco action">`;
      };
      reader.readAsDataURL(file);
    }
  });
}

// Word quiz
const quizData = [
  { q: "What process converts sunlight into energy in plants?", a: "photosynthesis" },
  { q: "Which gas do trees absorb?", a: "carbon dioxide" },
  { q: "What 3 R’s help reduce waste?", a: "reduce reuse recycle" },
  { q: "Which renewable source powers solar panels?", a: "sun" },
  { q: "Name one ocean cleanup activity.", a: "beach cleanup" }
];

let current = 0, score = 0;
const box = document.getElementById("quizBox");
if (box) showQuestion();

function showQuestion() {
  if (current < quizData.length) {
    box.innerHTML = `
      <p>${quizData[current].q}</p>
      <input type="text" id="answer" placeholder="Type your answer">
      <button onclick="checkAnswer()">Check</button>
    `;
  } else {
    box.innerHTML = `<h3>Quiz Complete!</h3><p>You scored ${score}/${quizData.length}</p>`;
  }
}
function checkAnswer() {
  const ans = document.getElementById("answer").value.toLowerCase().trim();
  if (ans && quizData[current].a.includes(ans)) {
    alert("✅ Correct!");
    score++;
  } else {
    alert("❌ Try again!");
  }
  current++;
  showQuestion();
}
