import React from 'react';
import './index.css';
import {App} from './App';
import registerServiceWorker from './registerServiceWorker';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';


const store = configureStore();

render(<Provider store ={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
