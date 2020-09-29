import React from "react";
import Menu from "./components/Menu/Menu";
import "./App.css";
import Panel from "./components/Panel/Panel";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckBox from "./components/CheckBox/CheckBox";
import DatePicker from "./components/DatePicker/DatePicker";

export default function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Menu} />
                    <Route path="/panel" component={Panel} />
                    <Route path="/checkbox" component={CheckBox} />
                    <Route path="/datepicker" component={DatePicker} />
                </Switch>
            </div>
        </Router>
    );
}
