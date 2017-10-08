import React from 'react';
import './card.css';

export default function Card(props) {

  let cardStr;
  
  if (props.card === '') {
    cardStr = ''
  }
  else {
    const ranks = ['','','2','3','4','5','6','7',
                    '8','9','T','J','Q','K','A'];
    cardStr = ranks[Number(props.card.substr(1))];
    cardStr += props.card.substr(0,1);
  }
    
  return (
      <div className="playing-card">{cardStr}</div>
  );
}