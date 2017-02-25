import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import { Router, Route, browserHistory } from 'react-router';
import About from './About.jsx'
import HealthDataBox from './health-data-box.jsx';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/about" component={About}/>
        <Route path="/heartrate" component={HealthDataBox}/>
      </Route>
    </Router>
  ), document.getElementById('container'));
