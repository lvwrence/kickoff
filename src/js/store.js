import { browserHistory } from 'react-router';
import { syncHistory, routeReducer } from 'redux-simple-router';
import { createStore, compose, combineReducers } from 'redux';

function todos(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

const reducer = combineReducers(Object.assign({}, todos, {
  routing: routeReducer
}));

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);

export default store;
