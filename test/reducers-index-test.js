import fitbitApp from '../src/reducers';
import setDataView from '../src/actions';

describe('set data view reducers', () => {
  it('should hadle change of data view', () => {
    var initialState = {
        dataFrequency: 'seconds'
      },
      expectedState = {
        dataFrequency: 'minutes'
      },
      action = {
        type: 'SET_DATA_VIEW',
        frequency: 'minutes'
      },
      newState = fitbitApp(initialState, action);

    expect(newState['dataFrequency']).to.equal(expectedState.dataFrequency);
  });
});
