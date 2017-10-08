import React from 'react';

export default class PlayerRowBet extends React.Component {
  render() {
    return (
      <div className="player-row">
        <div className="player-bet-form">
          <form id="bet-form" className = "player-form">
            <input type="text" className="gen-input" ref={input => this.betInput = input} />
            <button type="submit" id="bet-btn" className="gen-btn">Place Bet</button>
          </form>  
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