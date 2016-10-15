const React = require('react');
const HeartRateRow = require('./heart-rate-row.jsx');

class HeartRateTable extends React.Component {
  render () {
    const rows = [];
    const length = this.props.heartData.length;
    for (let i = 0; i < length; i += 1) {
      rows.push(<HeartRateRow heartRecord={this.props.heartData[i]} />);
    }

    return (
      <div>
        Time   BPM
        {rows}
      </div>
    );
  }
}

module.exports = HeartRateTable;
