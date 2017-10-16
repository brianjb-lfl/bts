'use strict';



const shuffle = () => {

  const cardDeck = [
    'spa♠2', 'spa♠3', 'spa♠4', 'spa♠5', 'spa♠6', 'spa♠7', 'spa♠8', 
    'spa♠9', 'spa♠10', 'spa♠11', 'spa♠12', 'spa♠13', 'spa♠14',
    'hrt♥2', 'hrt♥3', 'hrt♥4', 'hrt♥5', 'hrt♥6', 'hrt♥7', 'hrt♥8', 
    'hrt♥9', 'hrt♥10', 'hrt♥11', 'hrt♥12', 'hrt♥13', 'hrt♥14',
    'clu♣2', 'clu♣3', 'clu♣4', 'clu♣5', 'clu♣6', 'clu♣7', 'clu♣8', 
    'clu♣9', 'clu♣10', 'clu♣11', 'clu♣12', 'clu♣13', 'clu♣14',
    'dia♦2', 'dia♦3', 'dia♦4', 'dia♦5', 'dia♦6', 'dia♦7', 'dia♦8', 
    'dia♦9', 'dia♦10', 'dia♦11', 'dia♦12', 'dia♦13', 'dia♦14'
  ];

  let shuffledCards = cardDeck.slice();
  let tempCard = '';
  let selCard;

  // shuffle cards - Fisher-Yates
  for(let i = (shuffledCards.length - 1); i > 0; i--) {
    selCard = Math.floor(Math.random()*(i+1))-1;
    tempCard = shuffledCards[selCard];
    shuffledCards[selCard] = shuffledCards[i];
    shuffledCards[i] = tempCard;
  }

  return shuffledCards;
};

module.exports = {shuffle};
