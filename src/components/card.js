import React from 'react';
import './card.css';

export default function Card(props) {

  let cardStr;
  let cardSuit;
  
  if (props.card === '?') {
    cardStr = '?'
    cardSuit = 'blk'
  }
  else {
    const ranks = ['','','2','3','4','5','6','7',
                    '8','9','T','J','Q','K','A'];
                    
    cardStr = ranks[Number(props.card.substr(4))];
    cardStr += props.card.substr(3,1);
    cardSuit = props.card.substr(0,3);
  }
  
  const cardDivs = {
    blk: <div className="playing-card blk">{cardStr}</div>,
    clu: <div className="playing-card clu">{cardStr}</div>, 
    dia: <div className="playing-card dia">{cardStr}</div>, 
    hrt: <div className="playing-card hrt">{cardStr}</div>, 
    spa: <div className="playing-card spa">{cardStr}</div>
  };

  return (
    cardDivs[cardSuit]
  );
}