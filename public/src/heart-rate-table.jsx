const React = require('react');
const HeartRateRow = require('./heart-rate-row.jsx');

class HeartRateTable extends React.Component {
  render () {
    var rows = [];
    for (var i = 0; i < 5; i += 1) {
      rows.push(<HeartRateRow />);
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
