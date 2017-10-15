import React from 'react';
import {connect} from 'react-redux';
import './user-info-row.css';

export class UserInfoRow extends React.Component {
  render() {
    return (
      <div className="user-info">
        <div id="player-bet-string">$ {this.props.playerBet
          .toLocaleString('en-US', {style: 'decimal', maximumFractionDigits: 0})}
        </div>
        <div id="player-stack-string">$ {this.props.playerStack
          .toLocaleString('en-US', {style: 'decimal', maximumFractionDigits: 0})}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playerBet: state.playerBet,
  playerStack: state.playerStack,
  currDeck: state.currDeck
});

export default connect(mapStateToProps)(UserInfoRow);