import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import { routerReducer } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';
import fitbitApp from '../reducers';

const reducer = combineReducers({
  routing: routerReducer,
  fitbitApp,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(ReduxThunk)));

export default store;
