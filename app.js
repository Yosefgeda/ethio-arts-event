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

const featureContainer = document.createElement('div');
featureContainer.className = 'feature-container';
mainSection.appendChild(featureContainer);

const featureHead = document.createElement('div');
featureHead.className = 'feature-head';
featureContainer.appendChild(featureHead);

const featureTitle = document.createElement('h3');
featureTitle.textContent = 'Featured Artists';
featureTitle.className = 'feat-head';
featureHead.appendChild(featureTitle);

const underLine = document.createElement('span');
underLine.className = 'underline';
featureHead.appendChild(underLine);

const featureContainerCards = document.createElement('div');
featureContainerCards.className = 'feature-container-cards';
featureContainer.appendChild(featureContainerCards);

function featureCards(imgSrc, nameOfArtist, ach, artistParagraph) {
  const imgDescription = document.createElement('div');
  imgDescription.classList = 'img-description';
  featureContainerCards.appendChild(imgDescription);

  const imgContainer = document.createElement('div');
  imgContainer.className = 'img-container';
  imgDescription.appendChild(imgContainer);

  const featureImg = document.createElement('img');
  featureImg.className = 'feature-img';
  featureImg.src = imgSrc;
  imgContainer.appendChild(featureImg);

  const featureTexts = document.createElement('div');
  featureTexts.className = 'feature-texts';
  imgDescription.appendChild(featureTexts);

  const artistName = document.createElement('h4');
  artistName.textContent = nameOfArtist;
  artistName.className = 'artist-name';
  featureTexts.appendChild(artistName);

  const artistAchivement = document.createElement('p');
  artistAchivement.className = 'artist-achivement';
  artistAchivement.textContent = ach;
  featureTexts.appendChild(artistAchivement);

  const separator = document.createElement('span');
  separator.className = 'feature-separator';
  featureTexts.appendChild(separator);

  const featurePara = document.createElement('p');
  featurePara.className = 'feature-para';
  featurePara.textContent = artistParagraph;
  featureTexts.appendChild(featurePara);
}

featureCards(featureData.zerihun.img, featureData.zerihun.artistName,
  featureData.zerihun.achivement, featureData.zerihun.description);
featureCards(featureData.kebedech.img, featureData.kebedech.artistName,
  featureData.kebedech.achivement, featureData.kebedech.description);

function featureCardsHidden(imgSrc, nameOfArtist, ach, artistParagraph) {
  const imgDescriptionHidden = document.createElement('div');
  imgDescriptionHidden.className = 'img-description img-desc-hidden';
  featureContainerCards.appendChild(imgDescriptionHidden);

  const imgContainer = document.createElement('div');
  imgContainer.className = 'img-container';
  imgDescriptionHidden.appendChild(imgContainer);

  const featureImg = document.createElement('img');
  featureImg.className = 'feature-img';
  featureImg.src = imgSrc;
  imgContainer.appendChild(featureImg);

  const featureTexts = document.createElement('div');
  featureTexts.className = 'feature-texts';
  imgDescriptionHidden.appendChild(featureTexts);

  const artistName = document.createElement('h4');
  artistName.textContent = nameOfArtist;
  artistName.className = 'artist-name';
  featureTexts.appendChild(artistName);

  const artistAchivement = document.createElement('p');
  artistAchivement.className = 'artist-achivement';
  artistAchivement.textContent = ach;
  featureTexts.appendChild(artistAchivement);

  const separator = document.createElement('span');
  separator.className = 'feature-separator';
  featureTexts.appendChild(separator);

  const featurePara = document.createElement('p');
  featurePara.className = 'feature-para';
  featurePara.textContent = artistParagraph;
  featureTexts.appendChild(featurePara);
}

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

featureCardsHidden(featureData.wosene.img, featureData.wosene.artistName,
  featureData.wosene.achivement, featureData.wosene.description);
featureCardsHidden(featureData.martha.img, featureData.martha.artistName,
  featureData.martha.achivement, featureData.martha.description);
featureCardsHidden(featureData.dege.img, featureData.dege.artistName,
  featureData.dege.achivement, featureData.dege.description);
featureCardsHidden(featureData.lemma.img, featureData.lemma.artistName,
  featureData.lemma.achivement, featureData.lemma.description);
