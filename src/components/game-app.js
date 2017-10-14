import React from 'react';
import {connect} from 'react-redux';

import HeaderRow from './header-row';
import PotRow from './pot-row';
import CardRow from './card-row';
import MessageRow from './message-row';
import UserActRow from './user-act-row';
import UserInfoRow from './user-info-row';
import {shuffle} from '../actions';

import './game-app.css';

export default class GameApp extends React.Component {

  // startPlay() {
  //   const updatedCards = this.state.currDeck.slice();
  //   let updatedCurrCards = updatedCards.splice(0,3);
  //   if(Number(updatedCurrCards[0].slice(1)) > Number(updatedCurrCards[2].slice(1))) {
  //     let tempCard = updatedCurrCards[0];
  //     updatedCurrCards[0] = updatedCurrCards[2];
  //     updatedCurrCards[2] = tempCard;
  //   }
  //   this.setState ({
  //     currDeck: updatedCards,
  //     currCards: updatedCurrCards,
  //     gameState: 'bet'
  //   })
  // }

  // handleBet(betValue) {
  //   let bet = parseInt(betValue, 10);
  //   if(isNaN(bet) || bet < 25 || bet > 250) {
  //     this.setState ({
  //       currStatusStr: 'Your bet must be a positive amount between 25 and 250'
  //     });
  //     return;
  //   }

  //   if(bet > this.state.playerStack) {
  //     this.setState ({
  //       currStatusStr: 'You cannot bet more than your stack'
  //     });
  //     return;
  //   }
    
  //   this.setState ({
  //     playerBet: bet,
  //     playerStack: (this.state.playerStack - bet),
  //     gameState: 'game',
  //     currStatusStr: ''
  //   })
  // }

  // handleResults() {
  //   let tempDeck;
  //   let tempCards;
  //   if(this.state.playerBet > 0){
  //     if(Number(this.state.currCards[1].slice(1)) > Number(this.state.currCards[0].slice(1)) &&
  //         Number(this.state.currCards[1].slice(1)) < Number(this.state.currCards[2].slice(1))) {
  //           this.setState ({
  //             playerStack: (this.state.playerStack + (this.state.playerBet * 2)),
  //             gamePot: (this.state.gamePot - this.state.playerBet),
  //             currStatusStr: 'You won that one'
  //           })
  //     }
  //     else {
  //           this.setState ({
  //             gamePot: (this.state.gamePot + this.state.playerBet),
  //             currStatusStr: 'You lost that one'
  //           })
  //     }

  //     tempDeck = this.state.currDeck.slice();
  //     tempDeck.splice(0,2);
  //     if (tempDeck.length <=12) {
  //       tempDeck = shuffle().slice();
  //     }

  //     this.setState ({
  //       playerBet: 0,
  //       currCards: ['', '', ''],
  //       currDeck: tempDeck
  //     })
  //   }
  //   else {
  //     this.startPlay();
  //   }
  // }

  render() {
    return (
      <div className="game-table">
        <HeaderRow />
        <PotRow />
        <CardRow />
        <MessageRow />
        <UserActRow />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});



//<UserInfoRow playerBet={this.state.playerBet} 
//            playerStack={this.state.playerStack}
//            gameState={this.state.gameState}
//            onStart={() => this.startPlay()}
//            onBet={(betValue) => this.handleBet(betValue)} 
//            onContinue={() => this.handleResults()} />