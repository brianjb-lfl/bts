import React from 'react';
import {connect} from 'react-redux';
import {startGame} from '../actions';
import {anteUp} from '../actions';
import './message-row.css';

export class MessageRow extends React.Component {

  goStart() {
    console.log('running goStart');
    this.props.dispatch(startGame());
  }

  goAnte() {
    let ante = Math.min(this.props.anteSize, this.props.playerStack)
    this.props.dispatch(anteUp(ante, this.props.playerStack - ante));
  }

  render() {
    let message = '';
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
  gameState: state.gameState,
  anteSize: state.anteSize,
  playerStack: state.playerStack
});

export default connect(mapStateToProps)(MessageRow);