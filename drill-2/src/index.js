import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

import { Provider } from 'react-redux';
import store from './store';

=======
import { Provider } from 'react-redux'
>>>>>>> fa2787c0d3712edb3e821557619662fac47501d2
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(
<<<<<<< HEAD
    <Provider store={ store }>
        <App />
    </Provider>
    , document.getElementById('root'));
=======
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
>>>>>>> fa2787c0d3712edb3e821557619662fac47501d2
registerServiceWorker();
