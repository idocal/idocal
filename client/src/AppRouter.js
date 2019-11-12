import React, { useState, useRef } from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Homepage from './components/Homepage';
import CaseStudy from "./components/CaseStudy";
import FlexView from "react-flexview/lib/FlexView";
import LogoBright from "./images/logo-bright@2x.png";
import LogoDark from "./images/logo-dark@2x.png";
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';




function AppRouter() {
    const [mode, setMode] = useState('bright');
    const fullPageInstance = useRef();

    const changeLogoMode = mode => {
        setMode(mode);
    };
    const onFullPageInit = (fullPage) => {
        fullPageInstance.current = fullPage;
    };
    const onClick = () => {
        fullPageInstance.current && fullPageInstance.current.moveTo(1);
    };
    return (
        <Router>
            <FlexView id="logo-bar" className={`logo-bar ${mode}`}>
                <FlexView width="100%" height="100%" vAlignContent="center">
                    <Link to='/'>
                        <img src={LogoBright} className="logo-bright" alt="idocal" onClick={onClick} />
                        <img src={LogoDark} className="logo-dark" alt="idocal" onClick={onClick} />
                    </Link>
                    <Menu />
                </FlexView>
            </FlexView>

            <Route path="/" exact render={props => <Homepage {...props} changeLogoMode={changeLogoMode} onFullPageInit={onFullPageInit} /> } />
            <Route path="/work/:project" component={CaseStudy} />
            <Route path="/about" exact render={ props => <About {...props} changeLogoMode={changeLogoMode} /> } />
            <Route path="/contact" exact render={ props => <Contact {...props} changeLogoMode={changeLogoMode} /> } />
        </Router>
    )
}

export default AppRouter
