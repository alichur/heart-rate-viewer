import React from 'react';
import HealthDataBox from '../src/components/health-data-box.jsx'
import {heartRateSeconds, heartRateMinute} from '../src/dummyData.js'

describe('Health Data Box', () =>  {
  it('should update state to the selected time units', () => {
    const wrapper = mount(<HealthDataBox />);
    wrapper.instance().handleTimeUnitChange('myNewUnits');
    expect(wrapper.state('value')).to.be.equal('myNewUnits');
  })

  it('should update state with the data for the selected time units: seconds', () => {
    const wrapper = mount(<HealthDataBox />);
    wrapper.instance().handleTimeUnitChange('seconds');
    expect(wrapper.state('heartData')).to.be.equal(heartRateSeconds);
  })

  it('should update state with the data for the selected time units: minutes', () => {
    const wrapper = mount(<HealthDataBox />);
    wrapper.instance().handleTimeUnitChange('minutes');
    expect(wrapper.state('heartData')).to.be.equal(heartRateMinute);
  })
});
