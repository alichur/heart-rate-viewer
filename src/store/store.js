import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import fitbitApp from '../reducers';
import { routerReducer } from 'react-router-redux';
import ReduxThunk from 'redux-thunk';

const reducer = combineReducers({
  routing: routerReducer,
  fitbitApp: fitbitApp
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(ReduxThunk)));

export default store;
