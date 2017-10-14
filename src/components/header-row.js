import React from 'react';
import HeaderNav from './header-nav';
import './header-row.css';

export default class HeaderRow extends React.Component {

  render() {
    return (
      <div className="header-row">
        <h1>Between the Sheets</h1>
        <div className="header-nav">
          <HeaderNav onNewGame={this.props.onNewGame}/>
        </div>
      </div>
    );
  }
}