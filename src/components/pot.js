import React from 'react';
import './pot.css';

export default function Pot(props) {
    return (
        <div className="pot-row">
            <b>Pot:  </b>
            <span className="pot-string">{props.pot.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</span>
        </div>
    );
}