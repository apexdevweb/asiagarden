// Sélectionner le titre
const titre = document.querySelector(".firsttitle");

// Fonction pour gérer l'affichage du titre
function gererScroll() {
  // Si la page est défilée de plus de 350 pixels
  if (window.scrollY > 350) {
    titre.style.transition = "0.8s ease-in-out";
    titre.style.transform = "translateY(-350px)";
    titre.style.opacity = "0";
  } else if (window.scrollY < 50) {
    titre.style.transition = "0.8s ease-in-out";
    titre.style.transform = "translateY(0px)";
    titre.style.opacity = "1";
  }
}

// Ajouter l'EventListener pour l'événement de scroll
window.addEventListener("scroll", gererScroll);
