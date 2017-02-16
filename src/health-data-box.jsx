const React = require('react');
const SearchBox = require('./search-box.jsx');
const HeartRateTable = require('./heart-rate-table.jsx');
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
    return (
      <div>
        <h1>
          Heart Rate
        </h1>
        <SearchBox value={this.state.value} handleChange={this.handleTimeUnitChange}/>
        <HeartRateTable heartData={this.state.heartData}/>
      </div>
    );
  }
  componentDidMount() {
    //fitbit api calls here.
  }
}

module.exports = HealthDataBox;
