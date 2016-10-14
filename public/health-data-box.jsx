const React = require('react');
const SearchBox = require('../public/search-box.jsx');
const HeartRateTable = require('../public/heart-rate-table');

class HealthDataBox extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Heart Rate
        </h1>
          //<SearchBox />
          //<HeartRateTable heartData={this.props.heartData} />
      </div>
    );
  }
}

exports.healthDataBox = HealthDataBox;
