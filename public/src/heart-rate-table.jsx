const React = require('react');
const HeartRateRow = require('./heart-rate-row.jsx');

class HeartRateTable extends React.Component {
  render () {
    const rows = [];
    rows.push(this.props.heartData.map((record) => <HeartRateRow heartRecord={record} />));


    return (
      <div>
        Time   BPM
        {rows}
      </div>
    );
  }
}

module.exports = HeartRateTable;
