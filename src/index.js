import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);

// To hook up redux thunk first - import thunk from 'redux-thunk',
// - after createStore add applyMiddleware from redux,
// - add a second argument to createStore with applyMiddleware(thunk)
// - move on to actions/index.js 