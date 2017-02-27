import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import { Router, Route, browserHistory } from 'react-router';
import About from './components/About.jsx'
import HealthDataBox from './components/health-data-box.jsx';
import { createStore } from 'redux'
import fitbitApp from './reducers'
import { Provider } from 'react-redux'

const store = createStore(
  fitbitApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/about" component={About}/>
        <Route path="/heartrate" component={HealthDataBox}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('container'));
