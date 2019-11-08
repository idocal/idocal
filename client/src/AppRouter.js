import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Homepage from './components/Homepage';
import CaseStudy from "./components/CaseStudy";
import FlexView from "react-flexview/lib/FlexView";
import LogoBright from "./images/logo-bright@2x.png";
import { slide as Menu } from 'react-burger-menu'
import CrossIcon from './images/cross@2x.png';

const onClick = () => {
    if (document.getElementById('fullpage')) {
        document.getElementById('fullpage').style.transform = "translate3d(0px, 0px, 0px)"
    }
};

function AppRouter() {
    return (
        <Router>
            <FlexView className="logo-bar bright">
                <FlexView width="100%" height="100%" vAlignContent="center">
                    <Link to='/'>
                        <img src={LogoBright} alt="idocal" onClick={onClick} />
                    </Link>
                    <Menu right width="100%"
                          customCrossIcon={ <img src={CrossIcon} /> }>
                        <a id="home" className="menu-item" href="/">Home</a>
                        <a id="about" className="menu-item" href="/about">About</a>
                        <a id="contact" className="menu-item" href="/contact">Contact</a>
                    </Menu>
                </FlexView>
            </FlexView>
            <Route path="/" exact component={Homepage} />
            <Route path="/work/:project" component={CaseStudy} />
        </Router>
    )
}

export default AppRouter
