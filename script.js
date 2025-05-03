// Button click
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button was clicked!");
});

// Hover effects
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => hoverBox.style.backgroundColor = "salmon");
hoverBox.addEventListener("mouseout", () => hoverBox.style.backgroundColor = "lightblue");

// Keypress detection
document.getElementById("keypressInput").addEventListener("keypress", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Secret action - double click
document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("🎉 You found the secret!");
});

// Button changes color
document.getElementById("changeBtn").addEventListener("click", function() {
  this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

// Image Gallery
const images = [
  "https://via.placeholder.com/200/FF0000",
  "https://via.placeholder.com/200/00FF00",
  "https://via.placeholder.com/200/0000FF"
];
let imgIndex = 0;
document.getElementById("nextImg").addEventListener("click", () => {
  imgIndex = (imgIndex + 1) % images.length;
  document.getElementById("galleryImg").src = images[imgIndex];
});

// Tabs
document.querySelectorAll(".tabBtn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tabContent").forEach(content => content.classList.remove("active"));
    document.getElementById("tab" + button.dataset.tab).classList.add("active");
  });
});

// Form Validation
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const feedback = document.getElementById("feedback");

  if (!email.value.includes("@")) {
    feedback.textContent = "Please enter a valid email.";
    return;
  }

  if (password.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    return;
  }

  feedback.textContent = "Form submitted successfully! 🎉";
  feedback.style.color = "green";
});

// Real-time password feedback
document.getElementById("password").addEventListener("input", function() {
  const feedback = document.getElementById("feedback");
  if (this.value.length < 8) {
    feedback.textContent = "Password too short!";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Looks good!";
    feedback.style.color = "green";
  }
});
