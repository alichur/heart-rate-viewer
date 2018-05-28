import isofetch from 'isomorphic-fetch';
import store from '../store/store';

// extract to fitbit helper
const GRANULARITY_SECONDS = '1sec';
const GRANULARITY_MINUTES = '1min';
const HEARTRATE_BASE_URL = 'https://api.fitbit.com/1/user/-/activities/heart';

export const fetchData = function (
  frequency,
  startDate,
  endDate,
  startTime,
  endTime
) {
  return (dispatch) => {
    const headers = {'Authorization': 'Bearer ' + store.getState().fitbitApp.fitbitAuthToken};
    const granularity = (frequency === 'seconds') ? GRANULARITY_SECONDS : GRANULARITY_MINUTES;
    const startDate = '2016-01-30';
    const endDate = '2016-01-30';
    const startTime = '14:00';
    const endTime = '14:10';
    const url = `${HEARTRATE_BASE_URL}/date/${startDate}/${endDate}/${granularity}/time/${startTime}/${endTime}.json`;

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
