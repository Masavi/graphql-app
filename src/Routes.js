import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';

const Login = () => {
    return <h1>Login</h1>;
};

const Logout = () => {
    return <h1>Logout</h1>;
};

export default [
    <Route exact path="/login" component={Login} key={0} />,
    <Route exact path="/logout" component={Logout} key={1} />,
    <Route exact path="/home" component={Home} key={2} />,
];