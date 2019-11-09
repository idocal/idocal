import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Homepage from './components/Homepage';
import CaseStudy from "./components/CaseStudy";
import FlexView from "react-flexview/lib/FlexView";
import LogoBright from "./images/logo-bright@2x.png";
import LogoDark from "./images/logo-dark@2x.png";
import { slide as Menu } from 'react-burger-menu'
import CrossIcon from './images/cross@2x.png';
import About from './components/About';
import Contact from './components/Contact';

const onClick = () => {
    if (document.getElementById('fullpage')) {
        document.getElementById('fullpage').style.transform = "translate3d(0px, 0px, 0px)"
    }
};

const changeLogoMode = mode => {
    console.log('changing logo mode to: ', mode);
    if (document.getElementById('logo-bar')) {
        if (mode === 'dark') {
            document.getElementById('logo-bar').classList.remove("bright");
            document.getElementById('logo-bar').classList.add("dark");
        }
        else if (mode === 'bright') {
            document.getElementById('logo-bar').classList.remove("dark");
            document.getElementById('logo-bar').classList.add("bright");
        }
    }
};

function AppRouter() {
    return (
        <Router>
            <FlexView id="logo-bar" className="logo-bar bright">
                <FlexView width="100%" height="100%" vAlignContent="center">
                    <Link to='/'>
                        <img src={LogoBright} className="logo-bright" alt="idocal" onClick={onClick} />
                        <img src={LogoDark} className="logo-dark" alt="idocal" onClick={onClick} />
                    </Link>
                    <Menu right width="100%"
                          customCrossIcon={ <img src={CrossIcon} alt="close" /> }>
                        <a id="home" className="menu-item" href="/">Home</a>
                        <a id="about" className="menu-item" href="/about">About</a>
                        <a id="contact" className="menu-item" href="/contact">Contact</a>
                        <div className="secondary">
                            <a className="menu-item secondary-item" href="https://www.linkedin.com/in/idocal/" target="_blank" rel="noopener noreferrer">LiknedIn</a>
                            <a className="menu-item secondary-item" href="https://github.com/idocal" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </Menu>
                </FlexView>
            </FlexView>

            <Route path="/" exact render={props => <Homepage {...props} changeLogoMode={changeLogoMode} /> } />
            <Route path="/work/:project" component={CaseStudy} />
            <Route path="/about" exact render={ props => <About {...props} changeLogoMode={changeLogoMode} /> } />
            <Route path="/contact" exact render={ props => <Contact {...props} changeLogoMode={changeLogoMode} /> } />
        </Router>
    )
}

export default AppRouter
