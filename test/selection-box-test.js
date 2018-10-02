import React from 'react';
import SelectionBox from '../src/components/selection-box';

var selectOptions = [{
      key: 'mittens123',
      value: 'Cat'
    }, {
      key: 'Rover244',
      value: 'Dog'
    },
    {
      key: 'Tweet007',
      value: 'Bird'
    }
  ];
describe('Selection Box', () => {
  it('should have props for starting value and change handler', function () {
    const wrapper = shallow(<SelectionBox options={selectOptions}/>);
    expect(wrapper.props().value).to.be.defined;
    expect(wrapper.props().handleChange).to.be.defined;
    expect(wrapper.props().options).to.be.defined;
  });

  it('should trigger an update when the user makes a selection', () => {
    const handleChange = spy();
    const wrapper = shallow(<SelectionBox handleChange={handleChange} options={selectOptions}/>);
    expect(handleChange.called).to.be.false;
    wrapper.find('select').simulate('change', {target: {value: 'myNewSelection'}});
    expect(handleChange.called).to.be.true;
  });
});
