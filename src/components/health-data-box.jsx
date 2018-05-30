import React from 'react';
import SelectionBoxContainer from '../containers/selection-box-container.js';
import HeartRateTableContainer from '../containers/heart-rate-table-container.js';

function HealthDataBox (props) {
  return (
    <div>
      <h1>
        Heart Rate
      </h1>
      <SelectionBoxContainer />
      <HeartRateTableContainer />
    </div>
  );
}
export default HealthDataBox;
