import React, { Component } from 'react';
import FlexView from 'react-flexview';
import './App.css';
import AppRouter from "./AppRouter";
import ReactFullpage from '@fullpage/react-fullpage';


export default class App extends Component {
    render() {

        return (
            <FlexView id="fullpage" className="app" height="100%">
                <AppRouter />
            </FlexView>
        );
    }
}