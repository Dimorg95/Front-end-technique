let current = 1,
  playPauseBool = true,
  interval;

//Fonction pour le changement d'image automatique
const changeSlide = () => {
  const slideList = document.querySelectorAll('.slide');

  const slides = Array.from(slideList);

  if (current > slides.length) {
    current = 1;
  } else if (current === 0) {
    current = slides.length;
  }

  slides.forEach((slide) => {
    if (slide.classList[1].split('-')[1] * 1 === current) {
      slide.style.cssText = 'visibility : visible; opacity : 1; ';
    } else {
      slide.style.cssText = 'visibility : hidden; opacity : 0; ';
    }
  });
};

//Fonction par rapport au bouton play/pause
const playPause = () => {
  if (playPauseBool) {
    interval = setInterval(() => {
      current++;
      changeSlide();
    }, 3000);
    playPauseBool = false;
  } else {
    clearInterval(interval);
    playPauseBool = true;
  }
  changePlayPause();
  arrowsVisibility();
};

//Changement de l'icone si on clique dessus
const changePlayPause = () => {
  const icon = document.querySelector('.play-pause i');
  const cls = icon.classList[1];

  if (cls === 'fa-play') {
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  } else {
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
};

//Fonction pour enlever les fleche si le slide est automatique
//et les remettre a la pause
const arrowsVisibility = () => {
  const arrows = document.querySelectorAll('.control');

  Array.from(arrows).forEach((arrow) => {
    if (!playPauseBool) {
      arrow.classList.add('arrows-visibility');
    } else {
      arrow.classList.remove('arrows-visibility');
    }
  });
};

//Au click sur play/pause on lance la fonction playPause
document.querySelector('.play-pause').addEventListener('click', () => {
  playPause();
});

//fleche de gauche au click on repart dans le sens inverse manuelement
document.querySelector('.left-arrow').addEventListener('click', () => {
  if (!playPauseBool) {
    playPause();
  }
  current--;
  changeSlide();
});

//Fleche de droite on part manuelement dans le sens de lecture des images
document.querySelector('.right-arrow').addEventListener('click', () => {
  if (!playPauseBool) {
    playPause();
  }
  current++;
  changeSlide();
});

changeSlide();
playPause();
