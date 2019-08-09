import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';

const Login = () => {
    return <h1>Login</h1>;
};

const Logout = () => {
    return <h1>Logout</h1>;
};

const NotFound = () => <h1>No existe la página!!!</h1>;

export default [
    <Route exact path="/signup" component={Signup} key={0} />,
    <Route exact path="/login" component={Login} key={1} />,
    <Route exact path="/logout" component={Logout} key={2} />,
    <Route exact path="/" component={Home} key={3} />,
    <Route component={NotFound} key={10} />,
];