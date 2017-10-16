import * as actions from '../actions';
import {shuffle} from '../components/cardDeck';

const initialState = {
  gameState: 'start',                 // start / ante / bet / show / game / end
  gamePot: 1000,
  playerStack: 1000,
  playerBet: 0,
  anteSize: 25,
  currDeck: shuffle().slice(),
  currCards: ['?', '?', '?'],
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

  else if(action.type === 'ANTE_UP') {
    const updatedDeck = state.currDeck.slice();
    const updatedCurrCards = [
      updatedDeck.splice(0,1)[0],
      '?',
      updatedDeck.splice(0,1)[0] ];
      console.log(updatedCurrCards);
    if(Number(updatedCurrCards[0].slice(5)) > Number(updatedCurrCards[2].slice(5))) {
      let tempCard = updatedCurrCards[0];
      updatedCurrCards[0] = updatedCurrCards[2];
      updatedCurrCards[2] = tempCard;
    }
    let thisBet = Math.min(state.anteSize, state.playerStack)
    return Object.assign( {}, state, {
      gameState: 'bet',
      playerBet: thisBet,
      playerStack: state.playerStack - thisBet,
      currDeck: updatedDeck,
      currCards: updatedCurrCards
    })
  }

  else if(action.type === 'PLACE_BET') {
    let thisBet = Math.min(state.playerStack, action.playerBet);
    let newStack = state.playerStack - thisBet;
    let updatedDeck = state.currDeck.slice();
    let updatedCurrCards = [
      state.currCards[0],
      updatedDeck.splice(0,1)[0],
      state.currCards[2]
    ];
    thisBet += state.playerBet;
    return Object.assign( {}, state, {
      gameState: 'show',
      playerBet: thisBet,
      playerStack: newStack,
      currDeck: updatedDeck,
      currCards: updatedCurrCards
    });
  }

  return state;

};

