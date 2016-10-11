/* TODO:
* add props validation
* add bundler and require react and ReactDOM
* each component in separate file
*/

const HardCodedHeartData = [
    { time: '14:00', BPM: '76' },
    { time: '5:59', BPM: '14' },
    { time: '8:22', BPM: '25' },
];

class HealthDataBox extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Heart Rate
        </h1>
        <SearchBox />
        <HeartRateTable heartData={this.props.heartData} />
      </div>
    );
  }
}

class SearchBox extends React.Component {
  render() {
    return (
      <form>
        <input type="datetime-local" placeholder="start time..." />
        <input type="datetime-local" placeholder="end time..." />
      </form>
    );
  }
}

class HeartRateTable extends React.Component {
  render() {
    const rows = [];
    const length = this.props.heartData.length;
    for (let i = 0; i < length; i += 1) {
      rows.push(<HeartRateRow heartRecord={this.props.heartData[i]} />);
    }

    return (
      <div>
        Time   BPM
        {rows}
      </div>
    );
  }
}

class HeartRateRow extends React.Component {
  render() {
    return (
      <div>
        {this.props.heartRecord.time} {'\u00A0'}
        {this.props.heartRecord.BPM}
      </div>
    );
  }
}

ReactDOM.render(
  <HealthDataBox heartData={HardCodedHeartData} />,
  document.getElementById('container')
);
