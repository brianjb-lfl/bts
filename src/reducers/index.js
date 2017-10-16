import * as actions from '../actions';
import {shuffle} from '../components/cardDeck';

const initialState = {
  gameState: 'start',                 // start / ante / bet / show / results / endHand
  gamePot: 1000,
  playerStack: 1000,
  playerBet: 0,
  anteSize: 25,
  currDeck: shuffle().slice(),
  currCards: ['?', '?', '?'],
  handResult: 'pending'
}

export const gameReducer = (state=initialState, action) => {

  // ***** SHUFFLE *****
  if (action.type === 'SHUFFLE') {
    return Object.assign( {}, state, {
      currDeck: shuffle().slice()
    });
  }

  // ***** START_GAME *****
  else if(action.type === 'START_GAME') {
    return Object.assign( {}, state, {
      gameState: 'ante'
    });
  }

  // ***** ANTE_UP *****
  else if(action.type === 'ANTE_UP') {
    // deal 2 bookend cards w placeholder in middle
    const updatedDeck = state.currDeck.slice();
    const updatedCurrCards = [
      updatedDeck.splice(0,1)[0],
      '?',
      updatedDeck.splice(0,1)[0] ];

    // order bookend cards, low on left, high on right
    if(Number(updatedCurrCards[0].slice(4)) > Number(updatedCurrCards[2].slice(4))) {
      let tempCard = updatedCurrCards[0];
      updatedCurrCards[0] = updatedCurrCards[2];
      updatedCurrCards[2] = tempCard;
    }

    // set ante amt
    let thisBet = Math.min(state.anteSize, state.playerStack)

    return Object.assign( {}, state, {
      gameState: 'bet',
      playerBet: thisBet,
      playerStack: state.playerStack - thisBet,
      currDeck: updatedDeck,
      currCards: updatedCurrCards
    });
  }

  // ***** PLACE_BET *****
  else if(action.type === 'PLACE_BET') {

    // add player bet to ante and update stack
    let thisBet = Math.min(state.playerStack, action.playerBet);
    let newStack = state.playerStack - thisBet;
    thisBet += state.playerBet;
    
    let updatedDeck = state.currDeck.slice();
    let newResult = '';

    // deal third card to middle
    let updatedCurrCards = [
      state.currCards[0],
      updatedDeck.splice(0,1)[0],
      state.currCards[2]
    ];

    // determine hand result
    if(Number(updatedCurrCards[1].slice(4)) > Number(updatedCurrCards[0].slice(4)) &&
      Number(updatedCurrCards[1].slice(4)) < Number(updatedCurrCards[2].slice(4))) {
    newResult = 'Well done! You WIN that hand.';
    }
    else {
    newResult = 'Gotcha! You LOSE that one.';
    }

    return Object.assign( {}, state, {
      gameState: 'show',
      playerBet: thisBet,
      playerStack: newStack,
      currDeck: updatedDeck,
      currCards: updatedCurrCards,
      handResult: newResult
    });
  }

  // ***** SETTLE_UP *****
  else if(action.type === 'SETTLE_UP') {
    let newPot;
    let newStack;

    // apply hand result to pot, stack
    if(state.handResult.indexOf('WIN',10) > -1) {
      newPot = state.gamePot - state.playerBet;
      newStack = state.playerStack + (state.playerBet * 2);
    }
    else {
      newPot = state.gamePot + state.playerBet;
      newStack = state.playerStack;
    }

    // burn 2 cards
    const updatedDeck = state.currDeck.splice(2);

    return Object.assign( {}, state, {
      gameState: 'endHand',
      currDeck: updatedDeck,
      currCards: ['?', '?', '?'],
      gamePot: newPot,
      playerBet: 0,
      playerStack: newStack
    });
  }

  // ***** NEXT_HAND *****
  else if(action.type === 'NEXT_HAND') {
    return Object.assign( {}, state, {
      gameState: 'ante'
    });
  }

  // ***** DEFAULT *****
  return state;

};

