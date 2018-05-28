var initialState = {
  dataFrequency: 'seconds',
  heartData: [],
  isAuthenticating: false,
  isAuthenticated: false,
  fitbitAuthToken: ' ',
  error: false,
  user: 'fake'
};
// when heartData comes from an API call remove from reducer and replace with better states e.g. isFetching.
// https://github.com/reactjs/redux/issues/291
function fitbitApp (state = initialState, action) {
  switch (action.type) {
    case 'IS_AUTHENTICATING':
      return Object.assign({}, state, {
        isAuthenticating: true,
        isAuthenticated: false
      });
    case 'IS_AUTHENTICATED':
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: true,
        fitbitAuthToken: action.token
      });
    case 'AUTHENTICATION_ERROR':
      return Object.assign({}, state, {
        isAuthenticating: false,
        isAuthenticated: false,
        error: true
      });
    case 'SET_DATA_VIEW':
      return Object.assign({}, state, {
        dataFrequency: action.frequency
      });
    case 'FETCH_HEARTDATA_SUCCESS':
      return Object.assign({}, state, {
        heartData: action.data
      });
    default:
      return state;
  }
}

export default fitbitApp;
