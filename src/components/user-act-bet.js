import React from 'react';
import {connect} from 'react-redux';
import {placeBet} from '../actions';

export class UserActBet extends React.Component {
  
  placeBet(event) {
    event.preventDefault();
    this.props.dispatch(placeBet);
  }


  render() {
    return (
      <div className="user-row">
        <div className="user-bet-form">
          <form id="bet-form" className = "user-form" onSubmit={ e => this.placeBet(e)} >
            <input type="text" 
                className="gen-input"
                placeholder="enter bet"
                ref={input => this.betInput = input} />
            <button type="submit" 
                id="bet-btn"
                className="gen-btn">Place Bet</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(UserActBet);


