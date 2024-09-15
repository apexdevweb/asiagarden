gsap.registerPlugin(ScrollTrigger);
const textA = document.querySelector(".textTwo");
gsap.to(textA, {
  //y: 50,
  //x: 50,
  //z: 50,
  scale: 6,
  duration: 5,
  //rotation: 90,
  opacity: 1,
  stagger: 0.5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".textTwo",
    start: "top 35%",
    end: "bottom 80%",
    markers: true,
    scrub: 3,
  },
});
