document.addEventListener("DOMContentLoaded", function () {
  const reveals = document.querySelectorAll(".reveal");

  function handleScroll() {
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        reveals[i].classList.add("visible");
      }
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); 
});