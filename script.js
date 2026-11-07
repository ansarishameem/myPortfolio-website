const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);

function updateThemeIcon() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  themeToggle.textContent = isDark ? "☾" : "☼";
}
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const nextTheme = isDark ? "light" : "dark";
  if (nextTheme === "light") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("portfolio-theme", nextTheme);
  updateThemeIcon();
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
