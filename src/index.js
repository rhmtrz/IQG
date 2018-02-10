import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CheckBox from './Component/checkBox.js';

ReactDOM.render(<div>
    <App />
    <CheckBox />
  </div>,
  document.getElementById('root'));
registerServiceWorker();
