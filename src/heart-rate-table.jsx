const React = require('react');
const HeartRateRow = require('./heart-rate-row.jsx');

function HeartRateTable(props) {
  const rows = [];
  if (Array.isArray(props.heartData)) {
    rows.push(props.heartData.map((record) => <HeartRateRow key={record.time} heartRecord={record}/>));
  }
  return (
    <div>
      Time BPM {rows}
    </div>
  );
}
module.exports = HeartRateTable;
