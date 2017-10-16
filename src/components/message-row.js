import React from 'react';
import {connect} from 'react-redux';
import {anteUp, placeBet, startGame, settleUp, nextHand} from '../actions';
import './message-row.css';

export class MessageRow extends React.Component {

  goStart() {
    this.props.dispatch(startGame());
  }

  goAnte() {
    this.props.dispatch(anteUp());
  }

  goSettle() {
    this.props.dispatch(settleUp());
  }

  goNext() {
    this.props.dispatch(nextHand());
  }

  render() {
    
    let message = '';

    // define message code for each gameState
    const msgObj = {
      start: <button 
                type="button"
                className="message-btn" 
                onClick={ () => this.goStart()}>Start</button>,
      ante: <button 
                type="button"
                className="message-btn" 
                onClick={ () => this.goAnte()}>Ante Up</button>,
      game: 'Game text',
      show: <div>
              <span>{this.props.handResult}</span>
              <button 
                type="button"
                className="message-btn" 
                onClick={ () => this.goSettle()}>Settle Up</button>
            </div>,
      bet: 'Place your bet',
      endHand:  <div>
                  <span>Settled ... burned 2 cards ... </span>
                  <button 
                    type="button"
                    className="message-btn" 
                    onClick={ () => this.goNext()}>Continue</button>
                </div>
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
  gameState: state.gameState,
  handResult: state.handResult
});

export default connect(mapStateToProps)(MessageRow);