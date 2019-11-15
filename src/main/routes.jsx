import React from 'react'

import { Switch, Route, Redirect } from 'react-router'

import Home from '../common/template/home'
import ReviewList from '../reviews/reviewsList'
import Profile from '../user/Profile'

export default props => (
    <div className="content-wrapper">
        <Switch>
            <Route exact path = '/' component={Home} ></Route>
            <Route exact path = '/reviews' component={ReviewList} ></Route>
            <Route exact path = '/profile' component={Profile}></Route>
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)
