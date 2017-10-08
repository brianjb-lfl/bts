import React from 'react';
import PlayerRowStart from './player-row-start';
import PlayerRowStacks from './player-row-stacks';
import PlayerRowBet from './player-row-bet';
import PlayerRowEnd from './player-row-end';
import './player-row.css';

export default class PlayerRow extends React.Component {
  render() {

    const playerRows = {
      start: <PlayerRowStart />,
      game: <PlayerRowStacks playerBet={this.props.playerBet} playerStack={this.props.playerStack} />,
      bet: <PlayerRowBet playerStack={this.props.playerStack}/>,
      end: <PlayerRowEnd playerStack={this.props.playerStack}/>
    }
   
    return (
      playerRows[this.props.gameState]
    );
  }
}