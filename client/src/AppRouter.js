import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Homepage from './components/Homepage';
import CaseStudy from "./components/CaseStudy";
import FlexView from "react-flexview/lib/FlexView";
import LogoBright from "./images/logo-bright@2x.png";

const onClick = () => {
    document.getElementById('fullpage').style.transform = "translate3d(0px, 0px, 0px)"
};

function AppRouter() {
    return (
        <Router>
            <FlexView className="logo-bar bright">
                <FlexView width="100%" height="100%" vAlignContent="center">
                    <Link to='/'>
                        <img src={LogoBright} alt="idocal" onClick={onClick} />
                    </Link>
                </FlexView>
            </FlexView>
            <Route path="/" exact component={Homepage} />
            <Route path="/work/:project" component={CaseStudy} />
        </Router>
    )
}

export default AppRouter
