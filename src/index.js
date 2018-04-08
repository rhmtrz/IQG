import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CheckBox from './Component/checkBox.js';
import Counter from './Component/Counter.js'

ReactDOM.render(<div>
    <App />
    <CheckBox />
    <Counter />
  </div>,
  document.getElementById('root'));
registerServiceWorker();
