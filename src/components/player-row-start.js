import React from 'react';

export default class PlayerRowStart extends React.Component {
  render() {
    return (
      <div className="player-row">
        <button type="button" id="start-btn" className="gen-btn">Start</button>
      </div>
    );
  }
}