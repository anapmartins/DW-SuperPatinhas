import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Logon from './pages/Logon'
import UserLogon from './pages/UserLogon'
import Register from './pages/Register'
import RegisterUser from './pages/RegisterUser'
import Profile from './pages/Profile'
import NewPet from './pages/NewPet'
import NewEvent from './pages/NewEvent'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Adoption from './pages/Adotar'
import Fundacao from './pages/Fundacao'
import FaleConosco from './pages/FaleConosco'
import Messages from "./pages/Messages"

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/logon" component={Logon}/>
                <Route path="/userLogon" component={UserLogon}/>
                <Route path="/register" component={Register}/>
                <Route path="/registerUser" component={RegisterUser}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/incidents/newPet" component={NewPet}/>
                <Route path="/incidents/newEvent" component={NewEvent}/>
                <Route path="/adoption" component={Adoption} />
                <Route path="/fundacao" component={Fundacao}/>
                <Route path="/faleConosco" component={FaleConosco}/>
                <Route path="/messages" component={Messages}/>
            </Switch>
        </BrowserRouter>
    )
}