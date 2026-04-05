// Theme Toggle with Persistence
const toggleBtn = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.body.classList.add(currentTheme);
  toggleBtn.innerHTML =
    currentTheme === "dark"
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
  toggleBtn.innerHTML =
    theme === "dark"
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
});

// Typing Effect
const texts = ["Frontend Developer", "Student", "Problem Solver"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type() {
  const typingElement = document.getElementById("typing");
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  typingElement.textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000);
  } else {
    setTimeout(type, 80);
  }
}
type();

// Mobile Hamburger
document.querySelector(".hamburger").addEventListener("click", () => {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Contact Form
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert(
      "✅ Message sent! (Demo - in real portfolio you can connect Formspree)",
    );
    this.reset();
  });

// Animate skill bars on scroll
const progressBars = document.querySelectorAll(".progress");
const animateBars = () => {
  progressBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width + "%";
  });
};
window.addEventListener("scroll", () => {
  if (window.scrollY > 800) animateBars();
});
