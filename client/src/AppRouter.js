import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Homepage from './components/Homepage';
import CaseStudy from "./components/CaseStudy";


function AppRouter() {
    return (
        <Router>
            {/*<div className="sticky-header">*/}
            {/*    <Link to='/'>*/}
            {/*        <h1>idocal</h1>*/}
            {/*    </Link>*/}
            {/*</div>*/}
            <Route path="/" exact component={Homepage} />
            <Route path="/work/:project" component={CaseStudy} />
        </Router>
    )
}

export default AppRouter
