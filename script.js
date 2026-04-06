const arrow = document.getElementById("scrollArrow");
const about = document.getElementById("about");

// Click arrow → scroll to about
arrow.addEventListener("click", () => {
  about.scrollIntoView({ behavior: "smooth" });
});

// Fade in "About Me" on scroll
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;
  const aboutTop = about.getBoundingClientRect().top;

  if (aboutTop < trigger) {
    about.classList.add("show");
  }
});
