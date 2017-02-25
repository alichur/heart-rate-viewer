const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./app.jsx');
import { Router, Route, hashHistory } from 'react-router';
import About from './About.jsx'
const HealthDataBox = require('./health-data-box.jsx');

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="/about" component={About}/>
        <Route path="/heartrate" component={HealthDataBox}/>
      </Route>
    </Router>
  ), document.getElementById('container'));
