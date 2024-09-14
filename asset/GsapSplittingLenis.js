let selection = Splitting();
// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(selection[0].chars, {
    y: 100,
    rotation: 90,
    opacity: 0,
    color: "rgb(13,13,13)",
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".textOne",
      start: "top 50%",
      end: "bottom bottom",
      markers: true,
      scrub: true,
    },
  });
});
//script pour la compatibilité avec GSAP
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 300);
});

gsap.ticker.lagSmoothing(0);

//script pour la compatibilité sans GSAP

// const lenis = new Lenis();

// lenis.on("scroll", (e) => {
//   console.log(e);
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);
