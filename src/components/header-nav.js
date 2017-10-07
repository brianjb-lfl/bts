import React from 'react';
import './header-nav.css';

export default class HeaderNav extends React.Component {

  render() {
    return (
      <div className="header-nav">
        <span>{'New Game'}</span>
        <span>{'Rules'}</span>
      </div>
    );
  }
}