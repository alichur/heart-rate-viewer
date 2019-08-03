import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import {Router, Route, BrowserRouter} from 'react-router-dom';
import About from './components/About.jsx';
import HealthDataBox from './components/health-data-box.jsx';
import store from './store/store';
import {Provider} from 'react-redux';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
    <div>
      <Route path='/' component={App} />
      <Route path='/login' />
      <Route path='/about' component={About} />
      <Route path='/heartrate' component={HealthDataBox} />
    </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('container'));
