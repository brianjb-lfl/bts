import React from 'react';

export default class UserActBet extends React.Component {
  
  render() {
    return (
      <div className="user-row">
        <div className="user-bet-form">
          <form id="bet-form" className = "user-form" >
            <input type="text" className="gen-input" />
            <button type="submit" id="bet-btn" className="gen-btn">Place Bet</button>
          </form>  
        </div>
      </div>
    );
  }
}