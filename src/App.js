// Import dependencies
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
}   from 'react-router-dom';

import "./App.css";
import SignDetect from './components/SignDetect';
import Index from './components/Index';

function App(){
    // eslint-disable-next-line no-unused-expressions
    return (
    <Router>
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/sign" component={SignDetect} />
        </Switch>
    </Router>
    )
}

export default App;
