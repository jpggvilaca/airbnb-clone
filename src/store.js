import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import thunk from 'redux-thunk';

import reducers from './reducers';

const middleware = applyMiddleware(thunk, routerMiddleware(history));

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f)
);

export default store;