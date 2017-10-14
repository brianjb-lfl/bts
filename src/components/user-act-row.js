import React from 'react';
import {connect} from 'react-redux';
import {UserActBet} from './user-act-bet';
import './user-act-row.css';

export class UserActRow extends React.Component {

  render() {
    return (
      <div className="user-act-row">
        <UserActBet />
      </div>
    );
  }
}

export default connect()(UserActRow);