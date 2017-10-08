import React from 'react';
import HeaderNav from './header-nav';
import './header.css';

export default class Header extends React.Component {

  render() {
    return (
      <div className="header-block">
        <h1>Between the Sheets</h1>
        <div className="header-nav">
          <HeaderNav onNewGame={this.props.onNewGame}/>
        </div>
      </div>
    );
  }
}