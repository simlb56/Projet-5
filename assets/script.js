const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
/* Récupération des éléments HTML*/
const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot'); // Sélectionnez tous les points

/* Image à afficher de base, élément actuel */
let currentIndex = 0;

// Fonction pour mettre à jour les points indicateurs
function updateDots(index) { //mise à jours des Dots
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // supprime le point pour la classe
        }
    });
}

// Fonction pour passer de la première à la dernière images et inversement
function updateCarousel(index, direction) {
      //Aller à la dernière diapo
      if (currentIndex === -1 && direction === 'left') {
        currentIndex = slides.length - 1;
        //Aller à la prochaine diapo
    } else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0; //première diapositive
    }

    // Mettre à jour l'image
    const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.src = imagePath;
    /*bannerImg.alt = `Slide ${currentIndex + 1}`;*/

    // Mettre à jour le texte
    const tagLine = slides[currentIndex].tagLine;
    document.querySelector('p').innerHTML = tagLine;

}
/* Flèche Gauche */
// Gestionnaire d'événement pour le clic sur la flèche gauche
arrowLeft.addEventListener('click', function () {
    currentIndex = (currentIndex - 1);
    updateCarousel(currentIndex, 'left');
    updateDots(currentIndex); // Mettez à jour les points indicateurs
});

/* Flèche droite */

// Gestionnaire d'événement pour le clic sur la flèche droite
arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) ;
    updateCarousel(currentIndex, 'right');
    updateDots(currentIndex); // Mettez à jour les points indicateurs
});


// Afficher la première diapositive au chargement de la page
updateCarousel(currentIndex, 'démarrage');
updateDots(currentIndex); // Mettez à jour les points indicateurs pour la première diapositive