import React from 'react';
import Card from './card';
import './card-row.css';
const {cardDeck} = require('./cardDeck.js');

export default class CardRow extends React.Component {
  
  render() {
    const cards = this.props.cardArr.map((card, index) =>
      <Card key={index} card={card} />
    )

    return(
      <div className="card-container">
        <div className="card-block">{cards}</div>
      </div>
    )


  }


}
