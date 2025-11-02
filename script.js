// Quiz functionality
const quizBtn = document.getElementById("quizBtn");
const quizModal = document.getElementById("quizModal");
const closeModal = document.getElementById("closeModal");
const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");

if (quizBtn) {
  quizBtn.addEventListener("click", () => quizModal.style.display = "block");
}
if (closeModal) {
  closeModal.addEventListener("click", () => quizModal.style.display = "none");
}

window.onclick = (e) => {
  if (e.target == quizModal) quizModal.style.display = "none";
};

if (quizForm) {
  quizForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const answers = { q1: "b", q2: "b", q3: "a" };
    let score = 0;
    for (let q in answers) {
      const selected = document.querySelector(`input[name="${q}"]:checked`);
      if (selected && selected.value === answers[q]) score++;
    }
    quizResult.innerText = `You scored ${score}/3 🌿`;
  });
}

// Upload functionality
const uploadBtn = document.getElementById("uploadBtn");
const photoUpload = document.getElementById("photoUpload");
const previewContainer = document.getElementById("previewContainer");

if (uploadBtn) {
  uploadBtn.addEventListener("click", () => {
    const file = photoUpload.files[0];
    if (!file) return alert("Please select a photo first!");
    const reader = new FileReader();
    reader.onload = () => {
      previewContainer.innerHTML = `<img src="${reader.result}" alt="Eco Action">`;
    };
    reader.readAsDataURL(file);
  });
}

// Contact Form
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formMsg.innerText = "Thank you for joining EcoSpark! 🌿";
    contactForm.reset();
  });
}
