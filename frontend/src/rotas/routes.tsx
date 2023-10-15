import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import home from '../components/home'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={home}/>
                
            </Switch>
        </Router>
    )
}

export default Routes