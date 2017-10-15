import * as actions from '../actions';
import {shuffle} from '../components/cardDeck';

const initialState = {
  gameState: 'start',                 // start / ante / bet / game / end
  gamePot: 1000,
  playerStack: 1000,
  playerBet: 0,
  anteSize: 25,
  currDeck: shuffle().slice(),
  currCards: ['', '', ''],
}


export const gameReducer = (state=initialState, action) => {

  if (action.type === 'SHUFFLE') {
    return Object.assign( {}, state, {
      currDeck: shuffle().slice()
    })
  }
  else if(action.type === 'START_GAME') {
    return Object.assign( {}, state, {
      gameState: 'ante'
    });
  }
  else if(action.type === 'PLACE_BET') {
    let nextGameState = '';
    let thisBet = 0;
    let newStack = 0;
    let updatedCards = [];
    let updatedCurrCards = [];

    if(action.playerBet === 0) {
      nextGameState = 'bet'
      thisBet = Math.min(state.anteSize, state.playerStack);
      newStack = state.playerStack - thisBet;
      const updatedCards = state.currDeck.slice();
      let updatedCurrCards = updatedCards.splice(0,3);
      if(Number(updatedCurrCards[0].slice(1)) > Number(updatedCurrCards[2].slice(1))) {
        let tempCard = updatedCurrCards[0];
        updatedCurrCards[0] = updatedCurrCards[2];
        updatedCurrCards[2] = tempCard;
      }
    }
    else {
      nextGameState = 'show';
      thisBet = Math.min(action.playerBet, state.playerStack);
      newStack = state.playerStack - thisBet;
      thisBet += state.playerBet;
    }
    return Object.assign( {}, state, {
      gameState: nextGameState,
      playerBet: thisBet,
      playerStack: newStack,
      currDeck: updatedCards,
      currCards: updatedCurrCards
    })
  }

  return state;

};

