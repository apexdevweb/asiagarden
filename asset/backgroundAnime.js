const gradientContain = document.querySelector("#imgSubContainer");
const dragonContain = document.querySelector("#imgContainer");
// Fonction pour gérer l'affichage du background
function dragonScroll() {
  // Si la page est défilée de plus de 350 pixels
  if (window.scrollY > 2700) {
    dragonContain.style.transition = "1.5s ease-in-out";
    dragonContain.style.backgroundPosition = "70% 50%";
    dragonContain.style.backgroundSize = "70%";
  } else {
    dragonContain.style.transition = "1.5s ease-in-out";
    dragonContain.style.backgroundPosition = "-80% 50%";
  }
}
// Ajouter l'EventListener pour l'événement de scroll
window.addEventListener("scroll", dragonScroll);
///////////////////////////////////////////////////////////////
// agrandir et reduire les image en un seule click
const imgSlide = document.querySelectorAll(".slideImg");
const imgSlide2 = document.querySelectorAll(".slideImg2");

imgSlide.forEach((carte) => {
  carte.addEventListener("click", () => {
    carte.style.transition = "0.5s ease-in-out";
    carte.style.height = "60vh";
    carte.style.width = "80vw";
    imgSlide2.forEach((carte2) => {
      carte2.style.transition = "0.5s ease-in-out";
      carte2.style.height = "15vh";
      carte2.style.width = "15vw";
      if (imgSlide === imgSlide2) {
        carte2.style.height = "15vh";
        carte2.style.width = "15vw";
      } else {
        carte.style.height = "60vh";
        carte.style.width = "80vw";
      }
    });
  });
});
///////////////////////////////////////////////////////////////
