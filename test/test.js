import React from 'react';
import SelectionBox from '../src/selection-box';

describe('Selection Box', () => {
  const wrapper = shallow( < SelectionBox / > );

  it('should be a list item', () => {
    expect(wrapper.text()).to.contain('Choose your level of detail');
  });
});
