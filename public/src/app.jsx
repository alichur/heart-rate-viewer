const React = require('react');
const HealthDataBox = require('./health-data-box.jsx');


class App extends React.Component {
  render() {
    return (
      <HealthDataBox />
      //React.createElement('a', { href: 'www.google.co.nz' }, 'basic Browserify setup')
    );
  }
}

module.exports = App;
