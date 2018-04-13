import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Api from './Api';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const api = new Api();
ReactDOM.render(<App api={api} />, document.getElementById('root'));
registerServiceWorker();
