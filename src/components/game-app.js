import React from 'react';
import Header from './header';
import PotRow from './pot-row';
import CardSpread from './card-spread';
import PlayerRow from './player-row';
import StatusRow from './status-row';
import cardDeck from './cardDeck';

import './game-app.css';

export default class GameApp extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            gameState: 'start',                     // start
            gamePot: 1000,
            playerStack: 500,
            playerBet: 0,
            currDeck:[],
            currCards: ['', '', '']
        };
    }

    resetGame() {
      this.setState ({
        gameState: 'start',
        gamePot: 1000,
        playerStack: 500,
        playerBet: 0,
        currCards: ['', '', '']
      })
    }

    render() {
        return (
            <div className="game-table">
                <Header />
                <PotRow pot={this.state.gamePot} gameState={this.state.gameState}/>
                <CardSpread cardArr={this.state.currCards} />
                <PlayerRow playerBet={this.state.playerBet} 
                            playerStack={this.state.playerStack}
                            gameState={this.state.gameState}/>
                <StatusRow gameState={this.state.gameState}/>
            </div>
        );
    }
}