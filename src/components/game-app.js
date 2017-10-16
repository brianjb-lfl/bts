import React from 'react';
import {connect} from 'react-redux';

import HeaderRow from './header-row';
import PotRow from './pot-row';
import CardRow from './card-row';
import MessageRow from './message-row';
import UserActRow from './user-act-row';
import UserInfoRow from './user-info-row';
import {shuffle} from '../actions';

import './game-app.css';

export class GameApp extends React.Component {

  render() {
    return (
      <div className="game-table">
        <HeaderRow />
        <PotRow />
        <CardRow />
        <MessageRow />
        <UserActRow />
        <UserInfoRow />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(GameApp);
