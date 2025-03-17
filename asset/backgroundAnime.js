const gradientContain = document.querySelector("#imgSubContainer");
const carpContain = document.querySelector("#imgContainer");
// Fonction pour gérer l'affichage du background
function dragonScroll() {
  // Si la page est défilée de plus de 350 pixels
  if (window.scrollY > 2700) {
    carpContain.style.transition = "1.5s ease-in-out";
    carpContain.style.backgroundPosition = "70% 50%";
    carpContain.style.backgroundSize = "30%";
  } else {
    carpContain.style.transition = "1.5s ease-in-out";
    carpContain.style.backgroundPosition = "-80% 50%";
  }
}
// Ajouter l'EventListener pour l'événement de scroll
window.addEventListener("scroll", dragonScroll);
