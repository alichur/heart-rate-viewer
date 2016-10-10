const React = require('react');

const ReactDOM = require('react-dom');

let HardCodedHeartData;

class HealthDataBox extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Heartrates
        </h1>
        <SearchBox />
        <HeartRateTable />
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
    Time   beats per min
        <HeartRateRow />
        <HeartRateRow />
        <HeartRateRow />
        <HeartRateRow />
      </div>
    );
  }
}

class HeartRateRow extends React.Component{
  render() {
    return (
      <div>
          12:42  76
      </div>
    );
  }
}

HardCodedHeartData = [
  { time: '14:24', BPM: '76' },
  { time: '14:25', BPM: '79' },
  { time: '14:26', BPM: '78' },
];

ReactDOM.render(
  <HealthDataBox />,
  document.getElementById('container')
);
