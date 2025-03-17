gsap.registerPlugin(ScrollTrigger);
const Article = document.querySelector(".article__S3");
gsap.from(Article, {
  //y: 50,
  x: 300,
  //z: 50,
  //scale: 0,
  duration: 3,
  // rotation: 90,
  opacity: 0,
  stagger: 0.5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".article__S3",
    start: "top 85%",
    end: "bottom 80%",
    // markers: true,
    scrub: 3,
  },
});

const titreArticle = document.querySelector(".article__titre--container");
gsap.from(titreArticle, {
  y: 60,
  //x: 150,
  //z: 50,
  //scale: 0,
  duration: 8,
  // rotation: 90,
  opacity: 0,
  stagger: 0.9,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".article__titre--container",
    start: "top 95%",
    end: "bottom 80%",
    // markers: true,
    scrub: 3,
  },
});
const fig = document.querySelector(".article__fig");
gsap.from(fig, {
  //y: 40,
  x: 150,
  //z: 50,
  //scale: 0,
  duration: 8,
  // rotation: 90,
  opacity: 0,
  stagger: 1.5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".article__fig",
    start: "top 95%",
    end: "bottom 80%",
    // markers: true,
    scrub: 3,
  },
});
