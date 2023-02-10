const hamburger = document.querySelector('.fa-bars');
const mobileMenu = document.querySelector('.mobile-menu');
const faXmark = document.querySelector('.fa-xmark');

hamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

faXmark.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

/** ............ Featured Artists ............. */

const featureData = {
  zerihun: {
    img: 'img/Zerihun-Yetmgeta.jpg',
    artistName: 'Zerihun Yetmgeta',
    achivement: 'Alle School of Fine Art and Design (1968).',
    description: 'Combine elements of contemporary art with traditional forms.',
  },

  kebedech: {
    img: 'img/kt.jpg',
    artistName: 'Kebedech Tekleab',
    achivement: 'Tekleab attended the School of Fine Arts in Addis Ababa.',
    description: 'She produced her Punishment Series of works as part of her thesis project.',
  },

  wosene: {
    img: 'img/wosene-work.jpg',
    artistName: 'Wosene Worke',
    achivement: 'Received an M.F.A. from Howard University in 1980.',
    description: 'Best known for his inventive renderings of the Amharic script.',
  },

  martha: {
    img: 'img/mn.jpg',
    artistName: 'Martha Nasibu',
    achivement: 'Studied at the Académie des Beaux-Arts in Paris.',
    description: 'Founding member of the Ethiopian Artists Club.',
  },

  dege: {
    img: 'img/dege-feder.jpg',
    artistName: 'Dege Feder',
    achivement: ' Choreographer and manager, a musician and visual artist.',
    description: 'Combines the motifs of traditional Ethiopian dance with modern dance.',
  },

  lemma: {
    img: 'img/lemma-guya.jpg',
    artistName: 'Lemma Guya',
    achivement: 'Prior painting artists who provided thousands of original works to art.',
    description: 'He provided about ten-thousand of his original works.',
  },
};

const mainSection = document.querySelector('.main-section');

mainSection.innerHTML += `
      <div class="feature-container">
        <div class="feature-head">
          <h3 class="feat-head">Featured Artists</h3>
          <span class="underline"></span>
        </div>
        <div class="feature-container-cards">
        </div>
      </div>`;

const featureContainerCards = document.querySelector('.main-section .feature-container-cards');

function featureCards(imgSrc, nameOfArtist, ach, artistParagraph) {
  featureContainerCards.innerHTML
          += `<div class="img-description">
            <div class="img-container">
              <img class="feature-img" src=${imgSrc}>
            </div>
              <div class="feature-texts">
                <h4 class="artist-name">${nameOfArtist}</h4>
                <p class="artist-achivement">${ach}</p>
                <span class="feature-separator"></span>
                <p class="feature-para">${artistParagraph}</p>
              </div>
          </div>`;
}

function featureCardsHidden(imgSrc, nameOfArtist, ach, artistParagraph) {
  featureContainerCards.innerHTML
          += `<div class="img-description img-desc-hidden">
            <div class="img-container">
              <img class="feature-img" src=${imgSrc}>
            </div>
              <div class="feature-texts">
                <h4 class="artist-name">${nameOfArtist}</h4>
                <p class="artist-achivement">${ach}</p>
                <span class="feature-separator"></span>
                <p class="feature-para">${artistParagraph}</p>
              </div>
          </div>`;
}

Object.keys(featureData).forEach((speakerdata, index) => {
  if (index === 2) {
    const featureContainer = document.querySelector('.main-section .feature-container');
    const seeMore = document.createElement('div');
    seeMore.className = 'see-more';
    featureContainer.appendChild(seeMore);

    const moreBtn = document.createElement('h4');
    moreBtn.className = 'more-btn';
    moreBtn.textContent = 'MORE';
    seeMore.appendChild(moreBtn);

    const seeMoreImg = document.createElement('img');
    seeMoreImg.src = 'img/arrow_down.png';
    seeMoreImg.className = 'see-more-img';
    seeMore.appendChild(seeMoreImg);
  }
  if (index < 2) {
    featureCards(featureData[speakerdata].img, featureData[speakerdata].artistName,
      featureData[speakerdata].achivement, featureData[speakerdata].description);
  } else {
    featureCardsHidden(featureData[speakerdata].img, featureData[speakerdata].artistName,
      featureData[speakerdata].achivement, featureData[speakerdata].description);
  }
});
