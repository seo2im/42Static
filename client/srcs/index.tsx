import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom'

import { Header } from './publicComponent'
import { Login, Main, ClusterInOut, UserNum } from './pages'

const App = () => {
    return (
        <>
        <Header />
        <Router>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/main' component={Main} />
                <Route path='/clusterInOut' component={ClusterInOut} />
                <Route path='/userNum' component={UserNum} />
            </Switch>
        </Router>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))
