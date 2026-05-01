var typed = new Typed('#hello', {
  strings: ["Hello World!", "Je m'appelle Cosmow22."],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  startDelay: 500,
  loop: false
  });

const arrow = document.getElementById("scroll-arrow");

setTimeout(() => {
  arrow.classList.remove("hidden");
}, 7000);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    arrow.classList.add("hidden");
  }
});
