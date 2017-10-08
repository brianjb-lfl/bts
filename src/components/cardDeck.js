'use strict';



const shuffle = () => {

  const cardDeck = [
    'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 
    'S9', 'S10', 'S11', 'S12', 'S13', 'S14',
    'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 
    'H9', 'H10', 'H11', 'H12', 'H13', 'H14',
    'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 
    'C9', 'C10', 'C11', 'C12', 'C13', 'C14',
    'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 
    'D9', 'D10', 'D11', 'D12', 'D13', 'D14'
  ];

  let shuffledCards = cardDeck.slice();
  let tempCard = '';
  let selCard;
  for(let i = (shuffledCards.length - 1); i > 0; i--) {
    selCard = Math.ceil(Math.random()*(i+1))-1;
    tempCard = shuffledCards[selCard];
    shuffledCards[selCard] = shuffledCards[i];
    shuffledCards[i] = tempCard;
  }

  return shuffledCards;
};

module.exports = {shuffle};
