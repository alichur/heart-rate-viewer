import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../src/actions';
import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('creates FETCH_HEARTDATA_SUCCESS and SET_DATA_VIEW when heart data retrieved', () => {
    var testJson = {
      "time": " 14:01:00",
      "value": 62
    }
    nock('https://api.fitbit.com')
      .get('/1/user/-/activities/heart/date/2016-01-30/2016-01-30/1min/time/14:00/14:10.json')
      .reply(200, testJson);

    const expectedActions = [
      {
        type: 'FETCH_HEARTDATA_SUCCESS',
        data: testJson
      }
    ]
    const store = mockStore({
      fitbitApp: []
    })

    return store.dispatch(actions.fetchData('minutes'))
      .then(() => {
        console.log(store.getActions())
        expect(store.getActions()).to.deep.equal(expectedActions)
      });
  });
});
