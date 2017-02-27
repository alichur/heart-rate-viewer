import React from 'react';
import SelectionBox from './selection-box.jsx';
import HeartRateTable from './heart-rate-table.jsx';
import {heartRateSeconds, heartRateMinute} from './dummyData.js';

class HealthDataBox extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'minutes',
      heartData: heartRateMinute
    };
    this.handleTimeUnitChange = this.handleTimeUnitChange.bind(this);
  }
  handleTimeUnitChange(newUnit) {
    var newData;

    switch (newUnit) {
      case 'seconds':
        newData = heartRateSeconds
        break;
      case 'minutes':
        newData = heartRateMinute
        break;
      default:
        newData = {};
    }

    this.setState({value: newUnit, heartData: newData});
  }

  render() {
    var options = [{
      key: 'seconds',
      value: 'Seconds'
    }, {
      key: 'minutes',
      value: 'Minutes'
    }
  ];
    return (
      <div>
        <h1>
          Heart Rate
        </h1>
        <SelectionBox value={this.state.value} options={options} handleChange={this.handleTimeUnitChange}/>
        <HeartRateTable heartData={this.state.heartData}/>
      </div>
    );
  }
  componentDidMount() {
    //fitbit api calls here.
  }
}

module.exports = HealthDataBox;