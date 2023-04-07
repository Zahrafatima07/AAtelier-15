var gal = document.getElementsByClassName("gal");
var currentIndex = 0;

function showNextPhoto() {
  // Cacher la photo actuelle
  gal[currentIndex].style.transform = "translateX(-100%)";

  // Passer à la photo suivante
  currentIndex++;
  if (currentIndex >= gal.length) {
    currentIndex = 0;
  }

  // Afficher la nouvelle photo
  gal[currentIndex].style.transform = "translateX(0)";
}

// Afficher la première photo
gal[currentIndex].style.transform = "translateX(0)";

// Défiler les photos toutes les 3 secondes
setInterval(showNextPhoto, 3000);
