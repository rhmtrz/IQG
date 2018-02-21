import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CheckBox from './Component/checkBox.js';
import Chart from './Component/temperature-chart.js';

ReactDOM.render(<div>
    <App />
    <CheckBox />
    <Chart />
  </div>,
  document.getElementById('root'));
registerServiceWorker();
