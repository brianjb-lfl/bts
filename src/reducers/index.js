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
  else if(action.type === 'ANTE_UP') {
    const updatedCards = state.currDeck.slice();
    let updatedCurrCards = updatedCards.splice(0,3);
    if(Number(updatedCurrCards[0].slice(1)) > Number(updatedCurrCards[2].slice(1))) {
      let tempCard = updatedCurrCards[0];
      updatedCurrCards[0] = updatedCurrCards[2];
      updatedCurrCards[2] = tempCard;
    }
    return Object.assign( {}, state, {
      gameState: 'bet',
      playerBet: action.playerBet,
      playerStack: action.playerStack,
      currDeck: updatedCards,
      currCards: updatedCurrCards
    })
  }

  return state;

};

