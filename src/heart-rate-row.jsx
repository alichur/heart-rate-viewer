const React = require('react');
class HeartRateRow extends React.Component {
  render() {
    return (
      <div>
        {this.props.heartRecord.time}
        {'\u00A0'}
        {this.props.heartRecord.BPM}
      </div>
    );
  }
}
module.exports = HeartRateRow;
