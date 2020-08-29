import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from '../components/Dashboard/index';
import AddProduce from '../components/Produce/Add';
import Produce from '../components/Produce/View';


//AUTH
import Login from '../components/Auth/Login';

//Private Route
import PrivateRoute from './privateRoute';
import Register from "../components/Auth/Register";

export default (
    <Switch>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <PrivateRoute path="/" exact component={Dashboard}/>
        <PrivateRoute path="/produce/add" exact component={AddProduce}/>
        <PrivateRoute path="/produce/list" exact component={Produce}/>
    </Switch>
)
