import React from 'react';
import {connect} from 'react-redux';
import './message-row.css';

export class MessageRow extends React.Component {

  render() {
    let message = '';
    const msgObj = {
      start: 'Click START to begin',
      game: 'Game text',
      bet: 'Place your bet',
      end: 'Click button to play again'
    }

    message = msgObj[this.props.gameState];

    return (
      <div className="message-text">
        <span className="message-text">{message}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameState: state.gameState
});

export default connect(mapStateToProps)(MessageRow);