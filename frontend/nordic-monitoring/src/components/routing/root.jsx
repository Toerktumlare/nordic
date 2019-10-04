import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SelectionMenu from '../selectionMenu/selectionMenu';
import App from '../../App';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SelectionMenu} />
      <Route path="/daily" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Root;
