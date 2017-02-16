const React = require('react');
const SearchBox = require('./search-box.jsx');
const HeartRateTable = require('./heart-rate-table.jsx');
import {heartRateSeconds, heartRateMinute} from './dummyData.js';

class HealthDataBox extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'minutes',
      heartData: {}
    };
  }
  render() {
    return (
      <div>
        <h1>
          Heart Rate
        </h1>
        <SearchBox value={this.state.value}/>
        <HeartRateTable heartData={this.state.heartData}/>
      </div>
    );
  }
  componentDidMount() {
    var data = heartRateSeconds;
    this.setState({heartData: data});
  }
}

module.exports = HealthDataBox;
