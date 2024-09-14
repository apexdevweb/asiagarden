/////////////////////////////GSAP///////////////////////////
const { innerHeight } = window;
gsap.to("#primaryContainer h1", {
  scale: 400,
  stagger: 0.5,
  duration: 2,
  ease: "power2.inOut", // Easing pour un effet smooth
  scrollTrigger: {
    trigger: "#primaryContainer",
    //start: `top top+=${innerHeight * 0.00002}`, // Ratio de départ ajusté (??% de la hauteur de la fenêtre)
    start: "top 0%",
    end: `+=${innerHeight * 0.5}`, // Durée de l'animation liée au défilement
    scrub: 1, // Animation plus réactive
    pin: true,
    anticipatePin: 1, // Évite les sauts lors de l'épinglage
    markers: true, // Affiche les marqueurs de debug
  },
});

//gsap.to("#primaryContainer img", {
//  scale: 400,
//  stagger: 0.5,
//  duration: 3,
//  ease: "power2.inOut", // Easing pour un effet smooth
//  scrollTrigger: {
//    trigger: "#primaryContainer",
//    //start: `top top+=${innerHeight * 0.0000002}`, // Ratio de départ ajusté (20% de la hauteur de la fenêtre)
//    start: "top 0%",
//    end: `+=${innerHeight * 0.5}`, // Durée de l'animation liée au défilement
//    scrub: 1, // Animation plus réactive
//    pin: true,
//    anticipatePin: 1, // Évite les sauts lors de l'épinglage
//    markers: true, // Affiche les marqueurs de debug
//  },
//});
