gsap.registerPlugin(ScrollTrigger);
const Article = document.querySelector(".article__S3");
gsap.from(Article, {
  // height: 50,
  y: -50,
  //x: 300,
  //z: 50,
  //scale: 0,
  duration: 9,
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
  stagger: 0.9,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".article__fig",
    start: "top 95%",
    end: "bottom 80%",
    // markers: true,
    scrub: 3,
  },
});
const ArticleB = document.querySelector(".article__S3--B");
gsap.from(ArticleB, {
  // height: 50,
  y: 50,
  //x: 300,
  //z: 50,
  //scale: 0,
  duration: 18,
  // rotation: 90,
  opacity: 0,
  stagger: 0.5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".article__S3--B",
    start: "top 85%",
    end: "bottom 80%",
    // markers: true,
    scrub: 3,
  },
});

const titreArticleB = document.querySelector(".article__titre--container--B");
gsap.from(titreArticleB, {
  y: -70,
  //x: 150,
  //z: 50,
  //scale: 0,
  duration: 16,
  // rotation: 90,
  opacity: 0,
  stagger: 0.5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".article__titre--container--B",
    start: "top 95%",
    end: "bottom 80%",
    // markers: true,
    scrub: 3,
  },
});
const figB = document.querySelector(".article__fig--B");
gsap.from(figB, {
  //y: 40,
  x: -150,
  //z: 50,
  //scale: 0,
  duration: 8,
  // rotation: 90,
  opacity: 0,
  stagger: 0.9,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".article__fig--B",
    start: "top 95%",
    end: "bottom 80%",
    // markers: true,
    scrub: 3,
  },
});

const txtfin = document.querySelector(".endtxt");

// Diviser le texte en plusieurs <span>
txtfin.innerHTML = txtfin.textContent
  .split("")
  .map((letter) => `<span class="letter">${letter}</span>`)
  .join("");

// Sélectionner tous les <span> créés
const letters = document.querySelectorAll(".endtxt .letter");

gsap.from(letters, {
  opacity: 0,
  y: 150, // Déplace légèrement chaque lettre vers le bas
  duration: 5,
  stagger: 0.5, // Chaque lettre apparaît l’une après l’autre
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".endtxt",
    start: "top 94%",
    end: "bottom 98%",
    scrub: 2,
    // markers: true,
  },
});
const txtintro = document.querySelector(".introTxt");

// Diviser le texte en plusieurs <span>
txtintro.innerHTML = txtintro.textContent
  .split("")
  .map((letter) => `<span class="letter">${letter}</span>`)
  .join("");

// Sélectionner tous les <span> créés
const lettersInt = document.querySelectorAll(".introTxt .letter");

gsap.from(lettersInt, {
  opacity: 0,
  y: 150, // Déplace légèrement chaque lettre vers le bas
  duration: 5,
  stagger: 0.8, // Chaque lettre apparaît l’une après l’autre
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".introTxt",
    start: "top 80%",
    end: "bottom bottom",
    scrub: 3,
  },
});
