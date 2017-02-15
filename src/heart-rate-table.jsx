const React = require('react');
const HeartRateRow = require('./heart-rate-row.jsx');

class HeartRateTable extends React.Component {
  constructor(props) {
    super(props);
    const HardCodedHeartData = [
      {
        time: '14:00',
        BPM: '76'
      }, {
        time: '5:59',
        BPM: '14'
      }, {
        time: '8:22',
        BPM: '25'
      }
    ];
    this.state = {
      heartData: HardCodedHeartData
    };
  }
  render() {
    const rows = [];
    rows.push(this.state.heartData.map((record) => <HeartRateRow key={record.time} heartRecord={record}/>));
    return (
      <div>
        Time BPM {rows}
      </div>
    );
  }
}
module.exports = HeartRateTable;
