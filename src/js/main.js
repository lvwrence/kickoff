import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router';

import App from 'components/App/App';


function myReducer(state = [], action) {
    switch (action.type) {
    default:
        return state;
    }
}

const reducer = combineReducers(Object.assign({}, myReducer, {
    routing: routeReducer,
}));
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>,

  // The mount point.
  document.getElementById('app')
);
