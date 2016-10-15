const React = require('react');
const SearchBox = require('./search-box.jsx');


class HealthDataBox extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Heart Rate
        </h1>
          <SearchBox />
      </div>
    );
  }
}

module.exports = HealthDataBox;
