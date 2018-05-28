import isofetch from 'isomorphic-fetch';
import store from '../store/store';

export const setDataView = (frequency) => ({
  type: 'SET_DATA_VIEW',
  frequency
});

export const fetchData = function (frequency) {
  return (dispatch) => {
    var headers = {
      'Authorization': 'Bearer ' + store.getState().fitbitApp.fitbitAuthToken
    };
    var url = 'https://api.fitbit.com/1/user/-/activities/heart/date/2016-01-30/1d/1min/time/14:00/14:10.json';
    return isofetch(url, {
      headers: headers,
      mode: 'cors',
      method: 'GET'
    }).then(function (res) {
      return res.json();
    }).then(function (json) {
      console.log(json);
      dispatch(fetchHeartDataSuccess(json));
    }).catch(function (err) {
      console.log('error', err);
    });
  };
};

const fetchHeartDataSuccess = (data) => ({
  type: 'FETCH_HEARTDATA_SUCCESS',
  data
});

export const fetchHeartDataFailure = (err) => ({
  type: 'FETCH_HEARTDATA_FAILURE',
  err
});

export const isAuthenticating = () => ({
  type: 'IS_AUTHENTICATING'
});

export const isAuthenticated = (token) => ({
  type: 'IS_AUTHENTICATED',
  token
});

export const authenticationError = (error) => ({
  type: 'AUTHENTICATION_ERROR',
  error
});
