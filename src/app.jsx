const React = require('react');
const HealthDataBox = require('./health-data-box.jsx');
import { Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
          <div>
            <ul role="nav">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/heartrate">Heart rate</Link></li>
            </ul>

            {this.props.children}

          </div>
        );
  }
}
module.exports = App;
