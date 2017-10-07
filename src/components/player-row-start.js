import React from 'react';

export default class PlayerRowStart extends React.Component {
  render() {
    return (
      <div className="player-row">
        <button type="button" id="start-button" className="gen-button">Start</button>
      </div>
    );
  }
}