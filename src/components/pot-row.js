import React from 'react';
import {connect} from 'react-redux';
import './pot-row.css';

export class PotRow extends React.Component {
  render() {
    
    const displayPotRowOpts = {
      start: true,
      bet: true,
      game: true,
      end: true
    }
    
    let potRow;

    if (displayPotRowOpts[this.props.gameState]) {
      potRow = 
        <div className="pot-row">
          <b>Pot:</b>
          <span className="pot-string">$ {this.props.gamePot
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

const mapStateToProps = state => ({
  gameState: state.gameState,
  gamePot: state.gamePot
});

export default connect(mapStateToProps)(PotRow);