const React = require('react');

function HeartRateRow(props) {
  return (
    <div>
      {props.heartRecord.time}
      {'\u00A0'}
      {props.heartRecord.BPM}
    </div>
  );
}
module.exports = HeartRateRow;
