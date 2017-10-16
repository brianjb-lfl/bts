import React from 'react';
import {connect} from 'react-redux';
import Card from './card';
import './card-row.css';
const {cardDeck} = require('./cardDeck.js');

export class CardRow extends React.Component {
  
  render() {
    const cards = this.props.currCards.map((card, index) =>
      <Card key={index} card={card} />
    )

    return(
      <div className="card-container">
        <div className="card-block">{cards}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  gameState: state.gameState,
  currCards: state.currCards
});

export default connect(mapStateToProps)(CardRow);