import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Homepage from './components/Homepage';
import CaseStudy from "./components/CaseStudy";


function AppRouter() {
    return (
        <Router>

            <Route path="/" exact component={Homepage} />
            <Route path="/work/:project" component={CaseStudy} />
        </Router>
    )
}

export default AppRouter
