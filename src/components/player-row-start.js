import React from 'react';

export default class PlayerRowStart extends React.Component {
  
  startGame() {
    this.props.onStart();
  }
  
  render() {
    return (
      <div className="player-row">
        <button type="button" 
                  id="start-btn" 
                  className="gen-btn"
                  onClick={ () => this.startGame()}>Start</button>
      </div>
    );
  }
}