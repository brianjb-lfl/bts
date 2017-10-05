import React from 'react';
import Card from './card';
import './cardSpread.css';
const {cardDeck} = require('./cardDeck.js');

export default class CardSpread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }
  
  


  render() {
    let tempArr = [];
    let tempStr = '';
    tempArr[0] = cardDeck.splice(Math.floor(Math.random()*52),1)[0];
    tempArr[1] = cardDeck.splice(Math.floor(Math.random()*51),1)[0];
    if(Number(tempArr[0].substr(1)) > Number(tempArr[1].substr(1))) {
      tempStr = tempArr[0];
      tempArr[0] = tempArr[1];
      tempArr[2] = tempStr;
    }
    else {
      tempArr[2] = tempArr[1];
    }
    tempArr[1] = cardDeck.splice(Math.floor(Math.random()*50),1)[0];

    console.log(tempArr);
    const cards = tempArr.map((card, index) =>
      <Card key={index} card={card} />
    )


    return(
      <div className="card-container">
        <div className="card-block">{cards}</div>
      </div>
    )


  }


}
