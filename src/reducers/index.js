import * as actions from '../actions';
import {shuffle} from '../components/cardDeck';

const initialState = {
  gameState: 'start',                 // start / bet / game / end
  gamePot: 1000,
  playerStack: 1000,
  playerBet: 500,
  currDeck: shuffle().slice(),
  currCards: ['spa♠3', 'dia♦6', 'hrt♥11']
}

  // currCards: ['', '', ''],

export const gameReducer = (state=initialState, action) => {

  if (action.type === 'SHUFFLE') {
    return Object.assign( {}, state, {
      currDeck: shuffle().slice()
    })
  }

  return state;

};

