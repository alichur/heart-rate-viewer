import React from 'react';

function HeartRateRow(props) {
  return (
    <div>
      {props.heartRecord.time}
      {'\u00A0'}
      {props.heartRecord.value}
    </div>
  );
}
module.exports = HeartRateRow;
