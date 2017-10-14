import React from 'react';
import './message-row.css';

export default class MessageRow extends React.Component {

  render() {
    let status = '';
    const statusObj = {
      start: 'Click START to begin',
      game: 'Game text',
      bet: 'Place your bet',
      end: 'Click button to play again'
    }

    if(this.props.statusStr === ''){
      status = statusObj[this.props.gameState];
    }
    else {
      status = this.props.statusStr;
    }

    return (
      <div className="status-text">{status}</div>
    );
  }
}