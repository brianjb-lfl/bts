import React from 'react';
import Pot from './pot';
import CardSpread from './cardSpread';
import BetRow from './betRow';
import PlayerRow from './playerRow';

import './gameApp.css';

export default class GameApp extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            gamePhase: 'start'      //start, bet
        };
    }

    render() {
        return (
            <div className="game-table">
                <h1>Between the Sheets</h1>
                <Pot />
                <CardSpread />
                <BetRow />
                <PlayerRow />
            </div>
        );
    }
}