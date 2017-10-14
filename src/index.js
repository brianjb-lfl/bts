import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import GameApp from './components/game-app';
import './index.css';


ReactDOM.render(
  <Provider store={store}>
    <GameApp />
  </Provider>,
  document.getElementById('root')
);

