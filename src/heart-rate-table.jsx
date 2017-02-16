const React = require('react');
const HeartRateRow = require('./heart-rate-row.jsx');
import {heartRateSeconds, heartRateMinute} from './dummyData.js';

class HeartRateTable extends React.Component {
  constructor() {
    super();
    this.state = {
      heartData: {}
    };
  }

  componentDidMount() {
    var data = heartRateSeconds;
    this.setState({heartData: data});
  }

  render() {
    const rows = [];
    if (Array.isArray(this.state.heartData)) {
      rows.push(this.state.heartData.map((record) => <HeartRateRow key={record.time} heartRecord={record}/>));
    }
    return (
      <div>
        Time BPM {rows}
      </div>
    );
  }
}
module.exports = HeartRateTable;
