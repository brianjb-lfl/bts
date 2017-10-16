import React from 'react';
import {connect} from 'react-redux';
import UserActBet from './user-act-bet';
import './user-act-row.css';

export class UserActRow extends React.Component {

  render() {

    let uaBet = '';

    if(this.props.gameState === 'bet') {
      uaBet = <UserActBet />;
    }

    return (
      <div className="user-act-row">
        {uaBet}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gameState: state.gameState,
});

export default connect(mapStateToProps)(UserActRow);