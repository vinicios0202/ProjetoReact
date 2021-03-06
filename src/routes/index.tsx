import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from '../pages/Deshboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (

    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/Repository" component={Repository} />
    </Switch>
    


);

export default Routes