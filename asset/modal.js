// Récupère le modal
const modal = document.getElementById("myModal");

// Récupère l'image et insère-la dans le modal - utilise son texte "alt" comme légende
const img = document.querySelectorAll(".gardenModal");
img.forEach((imgSelect) => {
  const modalImg = document.getElementById("img01");
  const captionText = document.getElementById("caption");
  imgSelect.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };

  // Récupère l'élément <span> qui ferme le modal
  const span = document.getElementsByClassName("close")[0];

  // Lorsque l'utilisateur clique sur <span> (x), fermez le modal
  span.onclick = function () {
    modal.style.display = "none";
  };
});

///////////////////////////////////////////////////////////////
// agrandir et reduire les image en un seule click
// const imgSlide = document.querySelectorAll(".slideImg");
// const imgSlide2 = document.querySelectorAll(".slideImg2");

// imgSlide.forEach((carte) => {
//   carte.addEventListener("click", () => {
//     carte.style.transition = "0.5s ease-in-out";
//     carte.style.height = "60vh";
//     carte.style.width = "80vw";
//     imgSlide2.forEach((carte2) => {
//       carte2.style.transition = "0.5s ease-in-out";
//       carte2.style.height = "15vh";
//       carte2.style.width = "15vw";
//       if (imgSlide === imgSlide2) {
//         carte2.style.height = "15vh";
//         carte2.style.width = "15vw";
//       } else {
//         carte.style.height = "60vh";
//         carte.style.width = "80vw";
//       }
//     });
//   });
// });
///////////////////////////////////////////////////////////////
