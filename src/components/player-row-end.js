import React from 'react';

export default class PlayerRowEnd extends React.Component {
  render() {
    return (
      <div className="player-row">
        <div className="result-text">
          <p>Game Over:  YOU WIN !!!</p>
        </div>
        <div className="player-stack">
          <b>Stack:</b>
          <span>$ {this.props.playerStack
                .toLocaleString('en-US', {style: 'decimal', maximumFractionDigits: 0})}</span>
        </div>
        <div className="play-again">
          <button type="button" id="play-again-btn" className="short-btn">Play Again</button>
        </div>
      </div>
    );
  }
}