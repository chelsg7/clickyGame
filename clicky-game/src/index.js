import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClickyGame from './ClickyGame';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ClickyGame />, document.getElementById('root'));
registerServiceWorker();
