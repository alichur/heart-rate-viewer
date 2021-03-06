import React from 'react';
import PropTypes from 'prop-types';
import HeartRateRow from './heart-rate-row.jsx';

function HeartRateTable (props) {
  const rows = [];
  // todo add normalizr or similar to remove nested data structure.
  if (props.heartData && props.heartData.hasOwnProperty('activities-heart-intraday')) {
    rows.push(props.heartData['activities-heart-intraday'].dataset.map((record) => <HeartRateRow key={record.time} heartRecord={record} />));
  }

  if (props.error) {
    return (
      <div>an error occured.
      </div>
    );
  }
  return (
    <div>
      'Time BPM' {rows}
    </div>
  );
}

HeartRateTable.propTypes = {
  heartData: PropTypes.array,
  error: PropTypes.bool
};
export default HeartRateTable;
