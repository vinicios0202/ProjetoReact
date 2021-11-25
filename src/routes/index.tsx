import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/Deshboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" component={Dashboard} />
        <Dashboard/>
        <Repository/>
    </Switch>


);

export default Routes