import React from 'react';
import Menu from './components/Menu/Menu';
import './App.css';
import Panel from './components/Panel/Panel';
import CheckBox from './components/CheckBox/CheckBox';
import DatePicker from './components/DatePicker/DatePicker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppContainer } from './styled';

export default function App() {
    return (
        <BrowserRouter>
            <AppContainer>
                <Switch>
                    <Route exact path='/' component={Menu} />
                    <Route path='/panel' component={Panel} />
                    <Route path='/checkbox' component={CheckBox} />
                    <Route path='/datepicker' component={DatePicker} />
                </Switch>
            </AppContainer>
        </BrowserRouter>
    );
}
