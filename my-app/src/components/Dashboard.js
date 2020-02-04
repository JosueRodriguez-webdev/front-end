import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


export default function Dashboard (props) {
    return (
        <div>
            <div className="nav-links">
                <Link to="/">Sign In</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>
            <h1>Hello Dash!</h1>
        </div>
    )
}