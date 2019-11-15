import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import thunk from 'redux-thunk'
import multi from 'redux-multi'

import AuthOrApp from './main/authOrApp';
import reducers from './main/reducers'
import * as serviceWorker from './serviceWorker';
import '../src/common/template/custom.css'

const devTools = window.__REDUX__DEVTOOLS_EXTENSION__ &&
                window.__REDUX__DEVTOOLS_EXTENSION__()
                
const store = applyMiddleware(thunk,multi,promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <AuthOrApp />
    </Provider>
    , document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
