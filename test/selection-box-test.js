import React from 'react';
import SelectionBox from '../src/selection-box';

describe('Selection Box', () => {
  it('should have props for starting value and change handler', function () {
    const wrapper = shallow(<SelectionBox/>);
    expect(wrapper.props().value).to.be.defined;
    expect(wrapper.props().handleChange).to.be.defined;
  });

  it('should have a default value set from props', function () {
    const wrapper = shallow(<SelectionBox value={'seconds'}/>);
    expect(wrapper.find('select').value).to.equal(wrapper.props().value);
  });

  it('should trigger an update when the user makes a selection', () => {
    const handleChange = spy();
    const wrapper = shallow(<SelectionBox handleChange={handleChange}/>);
    expect(handleChange.called).to.be.false;
    wrapper.find('select').simulate('change', {target: {value: 'myNewSelection'}});
    expect(handleChange.called).to.be.true;
  });
});
