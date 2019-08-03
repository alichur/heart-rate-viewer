import store from './store/store';
import { isAuthenticated } from './actions'

export const redirectToFitbitAuth = () => {
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