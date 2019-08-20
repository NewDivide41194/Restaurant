import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import DashboardCards from '../features/component/DashboardCards';
import login from '../features/Login/login';

const MainRoute = () => {
    return (
        <div>
            <Switch>
            <Route path='/Home' component={DashboardCards} />
            <Route path='/Login' component={login} />
            <Redirect to='/Home' />
        </Switch>
        </div>        
    )
}
export default MainRoute;