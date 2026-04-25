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

// Source - https://stackoverflow.com/a/63353462
// Posted by Kaiido, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-12, License - CC BY-SA 4.0

const blur_elem = document.getElementById( "blur-around" );
document.onmousemove = (evt) => {
  blur_elem.style.transform = `translate(${evt.clientX}px, ${evt.clientY}px)`;
};


console.log("👀")
