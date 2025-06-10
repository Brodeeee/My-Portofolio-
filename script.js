// Toggle dark mode
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Scroll animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  for (const el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  }
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);