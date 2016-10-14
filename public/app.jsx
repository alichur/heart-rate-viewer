/* TODO:
* hook app into Browserify rather than the random link
*/

const React = require('react');

class App extends React.Component {
  render() {
    return (
      React.createElement('a', { href: 'www.google.co.nz' }, 'basic Browserify setup')
    );
  }
}

module.exports = App;
