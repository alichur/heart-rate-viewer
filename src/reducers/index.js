import {heartRateSeconds, heartRateMinute} from '../dummyData.js';

var initialState =
  {
    dataFrequency: 'seconds',
    heartData: heartRateSeconds
  };
// when heartData comes from an API call remove from reducer and replace with better states e.g. isFetching.
// https://github.com/reactjs/redux/issues/291
function fitbitApp (state = initialState, action) {
  switch (action.type) {
    case 'SET_DATA_VIEW':
      var newData = ((action.frequency === 'seconds') ? heartRateSeconds : heartRateMinute);
      return Object.assign({}, state, {
        dataFrequency: action.frequency,
        heartData: newData
      });
    default:
      return state;
  }
}

export default fitbitApp;
