import React from 'react';
import PlayerRowStart from './player-row-start';
import PlayerRowStacks from './player-row-stacks';
import PlayerRowBet from './player-row-bet';
import PlayerRowEnd from './player-row-end';
import './player-row.css';

export default class PlayerRow extends React.Component {
  render() {

    const playerRows = {
      start: <PlayerRowStart onStart={this.props.onStart} />,
      game: <PlayerRowStacks 
              playerBet={this.props.playerBet} 
              playerStack={this.props.playerStack}
              onContinue={this.props.onContinue} />,
      bet: <PlayerRowBet 
            playerStack={this.props.playerStack}
            onBet={this.props.onBet} />,
      end: <PlayerRowEnd playerStack={this.props.playerStack} />
    }
   
    return (
      playerRows[this.props.gameState]
    );
  }
}