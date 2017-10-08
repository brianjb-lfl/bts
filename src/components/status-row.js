import React from 'react';
import './status-row.css';

export default class StatusRow extends React.Component {

  render() {
    const statusObj = {
      start: 'Click START to begin',
      game: 'Game text',
      bet: 'Place your bet',
      end: 'Click button to play again'
    }

    return (
      <div className="status-text">{statusObj[this.props.gameState]}</div>
    );
  }
}