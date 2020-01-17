import React, { useEffect, useState } from 'react'
import { observer, inject } from 'mobx-react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import axios from 'axios'

import './components/utils/scss/base.scss'
import Header from './components/utils/Header'
import Home from './components/views/Home/Home'


const App = () => {

    return (
        <Router>
            <Switch>
                <BuilderApp />
            </Switch>
        </Router>
    )
}

const BuilderApp = ({...props}) => {
    return (
        <div>
            <Header {...props} /> 
            <div id="ContentRoute">
                <IndexRoute />
            </div>
        </div>
    )
}

const IndexRoute = () => {
    return (
        <>
            <Route exact path="/login" component={HomeTest} />
            <Route exact path="/auth/callback" component={Test} />
        </>
    )
}

const HomeTest = ({...props}) => {
    console.log({props})
    return (
        <Home {...props} />
    )
}

const Test = ({ match, location }) => {
    console.log({ match, location })
    return (
        <div>{'callback'}</div>
    )
}

export default App