
let HardCodedHeartData = { time: '14:24', BPM: '76' }

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
    return (
      <div>
    Time   BPM
        <HeartRateRow heartData={this.props.heartData}/>
      </div>
    );
  }
}

class HeartRateRow extends React.Component {
  render() {
    return (
      <div>
        {this.props.heartData.time} {'\u00A0'}
        {this.props.heartData.BPM}
      </div>
    );
  }
}

ReactDOM.render(
  <HealthDataBox heartData={HardCodedHeartData} />,
  document.getElementById('container')
);
