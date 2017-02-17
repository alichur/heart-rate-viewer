import React from 'react';
import SelectionBox from '../src/selection-box';

describe('Selection Box', () => {
  it('should trigger an update when the user makes a selection', () => {
    const handleChange = spy();
    const wrapper = shallow(<SelectionBox handleChange={handleChange}/>);
    expect(handleChange.called).to.be.false;
    wrapper.find('select').simulate('change', {target: {value: 'myNewSelection'}});
    expect(handleChange.called).to.be.true;
  });
});
