const React = require('react');
const HealthDataBox = require('./health-data-box.jsx');
const HardCodedHeartData = [
    { time: '14:00', BPM: '76' },
    { time: '5:59', BPM: '14' },
    { time: '8:22', BPM: '25' },
];

class App extends React.Component {
  render () {
    return (
      <HealthDataBox heartData={HardCodedHeartData}/>
    );
  }
}

module.exports = App;
