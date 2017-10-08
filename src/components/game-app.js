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
      currCards: ['', '', '']
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
      currCards: ['', '', '']
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

  render() {
    return (
      <div className="game-table">
        <Header onNewGame={() =>this.newGame()} />
        <PotRow pot={this.state.gamePot} gameState={this.state.gameState}/>
        <CardSpread cardArr={this.state.currCards} />
        <PlayerRow playerBet={this.state.playerBet} 
                    playerStack={this.state.playerStack}
                    gameState={this.state.gameState}
                    onStart={() => this.startPlay()} />
        <StatusRow gameState={this.state.gameState}/>
      </div>
    );
  }
}