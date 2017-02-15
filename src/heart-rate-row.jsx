const React = require('react');

function HeartRateRow(props) {
  return (
    <div>
      {this.props.heartRecord.time}
      {'\u00A0'}
      {this.props.heartRecord.BPM}
    </div>
  );
}
module.exports = HeartRateRow;
