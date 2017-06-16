import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // its from react-redux because its specific to react 
import store from './ducks/store';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
