import React from 'react';
import './status-row.css';

export default class StatusRow extends React.Component {

  render() {
    const statusObj = {
      start: 'Click START to begin',
      bet: 'Place your bet'
    }

    return (
      <div className="status-text">{statusObj[this.props.gameState]}</div>
    );
  }
}