import * as actions from '../src/actions';

describe('actions', () => {
  it('should create an action to set the data view', () => {
    const frequency = 'seconds';
    const expectedAction = {
      type: 'SET_DATA_VIEW',
      frequency: frequency
    };
    expect(actions.setDataView(frequency)).to.deep.equal(expectedAction);
  });
});
