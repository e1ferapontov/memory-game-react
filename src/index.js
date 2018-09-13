import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {persistor, store} from './Components/Store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import App from './Containers/App/App';
import './Styles/GlobalStyle.css';

ReactDOM.render(
    <Provider store = { store }>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();