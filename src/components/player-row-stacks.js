import React from 'react';

export default class PlayerRowStacks extends React.Component {
  render() {
    return (
      <div className="player-row">
        <div className="player-bet">
          <b>Bet:</b>
          <span>$ {this.props.playerBet
              .toLocaleString('en-US', {style: 'decimal', maximumFractionDigits: 0})}</span>
        </div>
        <div className="player-stack">
          <b>Stack:</b>
          <span>$ {this.props.playerStack
                .toLocaleString('en-US', {style: 'decimal', maximumFractionDigits: 0})}</span>
        </div>
      </div>
    );
  }
}