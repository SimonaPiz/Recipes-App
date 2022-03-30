import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app/App.js';
import { store } from './app/store.js';

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
}
render();
