import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import {Router, Route, browserHistory} from 'react-router';
import About from './components/About.jsx';
import HealthDataBox from './components/health-data-box.jsx';
import store from './store/store';
import { isAuthenticated } from './actions';
import {Provider} from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

const history = syncHistoryWithStore(browserHistory, store);

const redirectToFitbitAuth = () => {
  const windowIfDefined = typeof window === 'undefined' ? null : window;
  if (windowIfDefined) {
    getToken();
  }
};

const getToken = () => {
  var fitbitAccessToken;
  if (!window.location.hash) {
    var url = 'https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=227RTW&redirect_uri=http://localhost:8080/heartrate&scope=heartrate';
    window.location.replace(url);
  } else {
    var fragmentQueryParameters = {};
    window.location.hash.slice(1).replace(
      new RegExp('([^?=&]+)(=([^&]*))?', 'g'),
      function ($0, $1, $2, $3) { fragmentQueryParameters[$1] = $3; }
      );
    fitbitAccessToken = fragmentQueryParameters.access_token;
    store.dispatch(isAuthenticated(fitbitAccessToken));
  }
};

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App} onEnter={redirectToFitbitAuth} >
        <Route path='/login' />
        <Route path='/about' component={About} onEnter={redirectToFitbitAuth} />
        <Route path='/heartrate' component={HealthDataBox} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('container'));
