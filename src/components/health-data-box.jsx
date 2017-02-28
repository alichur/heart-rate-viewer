import React from 'react';
import SelectionBoxContainer from '../containers/selection-box-container.js';
import HeartRateTableContainer from '../containers/heart-rate-table-container.js';

function HealthDataBox (props) {
  var options = [
    {
      key: 'seconds',
      value: 'Seconds'
    }, {
      key: 'minutes',
      value: 'Minutes'
    }
  ];

  return (
    <div>
      <h1>
        Heart Rate
      </h1>
      <SelectionBoxContainer options={options} />
      <HeartRateTableContainer />
    </div>
  );
}
module.exports = HealthDataBox;
