import React from 'react';
import ReactDOM from 'react-dom';
import App from './manager/App';
import registerServiceWorker from './manager/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
