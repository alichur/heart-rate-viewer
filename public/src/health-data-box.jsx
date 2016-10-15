const React = require('react');
const SearchBox = require('./search-box.jsx');
const HeartRateTable = require('./heart-rate-table.jsx');

class HealthDataBox extends React.Component {
  render () {
    return (
      <div>
        <h1>
          Heart Rate
        </h1>
        <SearchBox />
        <HeartRateTable />
      </div>
    );
  }
}

module.exports = HealthDataBox;
