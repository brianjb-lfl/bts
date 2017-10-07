import React from 'react';
import './pot-row.css';

export default class Pot extends React.Component {
  render() {
    const displayPotRowOpts = {
      start: false,
      bet: true
    }
    
    let potRow;

    if (displayPotRowOpts[this.props.gameState]) {
      potRow = 
        <div className="pot-row">
          <b>Pot:</b>
          <span className="pot-string">$ {this.props.pot
            .toLocaleString('en-US', {style: 'decimal', maximumFractionDigits: 0})}</span>
        </div>
    }
    else {
      potRow = 
        <div className="pot-row">
        </div>
    }

    return (
      potRow
    );
  }
}