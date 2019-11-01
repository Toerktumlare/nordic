import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/store';
import SelectionMenu from './components/selectionMenu/selectionMenu';
import DailyView from './components/views/dailyView';
import FitnessView from './components/views/fitnessView';

const store = configureStore();
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SelectionMenu} />
        <Route path="/daily" component={DailyView} />
        <Route path="/fitness" component={FitnessView} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
