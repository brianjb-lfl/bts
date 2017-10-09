import React from 'react';
import Header from './header';
import PotRow from './pot-row';
import CardSpread from './card-spread';
import PlayerRow from './player-row';
import StatusRow from './status-row';
import {shuffle} from './cardDeck';

import './game-app.css';

export default class GameApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: 'start',                     // start / bet / game / end
      gamePot: 1000,
      playerStack: 500,
      playerBet: 0,
      currDeck: shuffle().slice(),
      currCards: ['', '', ''],
      currStatusStr: ''
    };
  }

  reShuffle() {
    console.log('re-shuffling ...');
    console.log(this.state.currDeck);
    this.setState({
      currDeck: shuffle().slice()
    });
    console.log('new deck');
    console.log(this.state.currDeck);
  }

  newGame() {
    this.setState ({
      gameState: 'start',
      gamePot: 1000,
      playerStack: 500,
      playerBet: 0,
      currDeck: shuffle().slice(),
      currCards: ['', '', ''],
      currStatusStr: ''
    })
  }

  startPlay() {
    const updatedCards = this.state.currDeck.slice();
    let updatedCurrCards = updatedCards.splice(0,3);
    if(Number(updatedCurrCards[0].slice(1)) > Number(updatedCurrCards[2].slice(1))) {
      let tempCard = updatedCurrCards[0];
      updatedCurrCards[0] = updatedCurrCards[2];
      updatedCurrCards[2] = tempCard;
    }
    this.setState ({
      currDeck: updatedCards,
      currCards: updatedCurrCards,
      gameState: 'bet'
    })
  }

  handleBet(betValue) {
    let bet = parseInt(betValue, 10);
    if(isNaN(bet) || bet < 25 || bet > 250) {
      this.setState ({
        currStatusStr: 'Your bet must be a positive amount between 25 and 250'
      });
      return;
    }

    if(bet > this.state.playerStack) {
      this.setState ({
        currStatusStr: 'You cannot bet more than your stack'
      });
      return;
    }
    
    this.setState ({
      playerBet: bet,
      playerStack: (this.state.playerStack - bet),
      gameState: 'game',
      currStatusStr: ''
    })
  }

  handleResults() {
    let tempDeck;
    let tempCards;
    if(this.state.playerBet > 0){
      if(Number(this.state.currCards[1].slice(1)) > Number(this.state.currCards[0].slice(1)) &&
          Number(this.state.currCards[1].slice(1)) < Number(this.state.currCards[2].slice(1))) {
            this.setState ({
              playerStack: (this.state.playerStack + (this.state.playerBet * 2)),
              gamePot: (this.state.gamePot - this.state.playerBet),
              currStatusStr: 'You won that one'
            })
      }
      else {
            this.setState ({
              gamePot: (this.state.gamePot + this.state.playerBet),
              currStatusStr: 'You lost that one'
            })
      }

      tempDeck = this.state.currDeck.slice();
      tempDeck.splice(0,2);
      if (tempDeck.length <=12) {
        tempDeck = shuffle().slice();
      }

      this.setState ({
        playerBet: 0,
        currCards: ['', '', ''],
        currDeck: tempDeck
      })
    }
    else {
      this.startPlay();
    }
  }

  render() {
    return (
      <div className="game-table">
        <Header onNewGame={() =>this.newGame()} />
        <PotRow pot={this.state.gamePot} gameState={this.state.gameState} />
        <CardSpread cardArr={this.state.currCards} />
        <PlayerRow playerBet={this.state.playerBet} 
                    playerStack={this.state.playerStack}
                    gameState={this.state.gameState}
                    onStart={() => this.startPlay()}
                    onBet={(betValue) => this.handleBet(betValue)} 
                    onContinue={() => this.handleResults()} />
        <StatusRow gameState={this.state.gameState} statusStr={this.state.currStatusStr} />
      </div>
    );
  }
}