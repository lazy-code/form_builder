import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Builder from './components/Builder/Builder';
import Form from './components/Form/Form';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ Builder } />
        <Route path="/form" component={ Form } />
    </Route>
);
