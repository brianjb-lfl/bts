import React from 'react';
import './header-nav.css';

export default class HeaderNav extends React.Component {

  onNewGame(e) {
    e.preventDefault();
    this.props.onNewGame();
  }

  render() {
    return (
      <div className="header-nav">
        <span>
          <a className="new-link" href="#" onClick={e => this.onNewGame(e)}>
            New Game
          </a>
        </span>
        <span>{'Rules'}</span>
      </div>
    );
  }
}