const { innerHeight } = window;
gsap.to("#primaryContainer h1", {
  scale: 400,
  stagger: 0.5,
  duration: 8,
  ease: "power2.inOut", // Ajout d'un easing pour un effet smooth
  scrollTrigger: {
    trigger: "#primaryContainer",
    pin: true,
    end: `+=${innerHeight * 0.5}`,
    scrub: 1, // Réduction du scrub pour une animation plus réactive
    anticipatePin: 1, // Ajout pour éviter des sauts lorsque l'élément est épinglé
    markers: true,
  },
});

// gsap.to("#primaryContainer h1", {
//   scale: 500,
//   //stager: 0.25,
//   stagger: 0.5,
//   duration: 3,
//   scrollTrigger: {
//     trigger: "#primaryContainer",
//     pin: true,
//     end: `+=${innerHeight * 1.03}`,
//     scrub: 3,
//   },
// });

// gsap.from("#primaryContainer img", {
//   scale: 500,
//   stager: 0.25,
//   duration: 3,
//   scrollTrigger: {
//     trigger: "#primaryContainer",
//     pin: true,
//     end: `+=${innerHeight * 1.3}`,
//     scrub: 3,
//   },
// });
