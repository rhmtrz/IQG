import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CheckBox from './Component/checkBox.js';
import Counter from './Component/Counter.js'
import Calculator from './Component/Calculator.js'

ReactDOM.render(
  <div>
    <App />
    <CheckBox />
    <Counter />
    <Calculator />
  </div>,
  document.getElementById('root'));
registerServiceWorker();
