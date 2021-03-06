import React from 'react';
import {Link} from 'react-router-dom';
import * as fitbit from '../fitbit-connector.js';


class App extends React.Component {
  componentWillMount() {
    fitbit.redirectToFitbitAuth()
  }

  render () {
    return (
      <div>
        <ul role='nav'>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/heartrate'>Heart rate</Link>
          </li>
        </ul>

        {this.props.children}

      </div>
    );
  }
}

export default App;
