import React from 'react';

export default class HeaderNav extends React.Component {

  onNewGame(e) {
    e.preventDefault();
    this.props.onNewGame();
  }

  render() {
    return (
      <div className="header-nav">
        <span>{'New'}</span>
        <span>{'Rules'}</span>
      </div>
    );
  }
}

