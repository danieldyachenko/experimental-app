import React from "react"
import Menu from "./components/Menu/Menu"
import "./App.css"
import Panel from "./components/Panel/Panel"
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

export default () => {
    return (
        <Router>
            <div className='App'>
                <Switch>
                    <Route exact path="/" component={Menu}/>
                    <Route path="/panel" component={Panel}/>
                </Switch>
            </div>
        </Router>
    )
}