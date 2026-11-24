
// TYPING ANIMATION
const words = ["Computer Science Student", "Web Developer"];
let w = 0, c = 0, deleting = false;

function type() {
    const el = document.getElementById("typing");
    el.textContent = words[w].substring(0, c);
    if (!deleting && c < words[w].length) {
        c++;
        setTimeout(type, 100);
    } else if (!deleting) {
        deleting = true;
        setTimeout(type, 1500);
    } else if (c > 0) {
        c--;
        setTimeout(type, 50);
    } else {
        deleting = false;
        w = (w + 1) % words.length;
        setTimeout(type, 300);
    }
}
type();

// ACTIVE NAV LINK
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    links.forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
});
const themeToggle = document.getElementById('theme-toggle');

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  try { localStorage.setItem('theme', theme); } catch (e) {}
}

let savedTheme = null;
try { savedTheme = localStorage.getItem('theme'); } catch (e) {}
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});