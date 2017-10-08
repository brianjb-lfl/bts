import React from 'react';

export default class PlayerRowStacks extends React.Component {
  
  onClickContinue() {
    this.props.onContinue();
  }
  
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
        <div className="continue-div">
          <button type="button" 
                    id="continue-btn" 
                    className="short-btn"
                    onClick={ () => this.onClickContinue()}>Continue</button>
        </div>
      </div>
    );
  }
}