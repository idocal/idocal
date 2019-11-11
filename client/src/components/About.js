import React, { Component } from 'react';
import FlexView from 'react-flexview';
import '../style/About.css';
import FullPage from "./FullPage";
import {Link} from "react-router-dom";

export default class About extends Component {

    componentDidMount() {
        this.props.changeLogoMode('dark');
    }

    render() {
        return (
            <FlexView grow column className="about" width="100%">
                <FlexView className="section" width="100%" column>
                    <FlexView className="half text content" column>
                        <h1>A technology all-rounder</h1>
                        <p>
                            Hi again! My name is Ido Calman, I’m a 27 years old developer, designer and AI researcher from Tel Aviv.
                            I create projects which embrace the latest advances in Machine and Deep Learning in order to improve people’s lives.
                            I consider myself a <strong>one-stop-shop</strong>, turning any idea into a beautiful, functioning and fun product.
                            Interested in hearing more? Please feel free to <Link to="/contact">contact me!</Link>
                        </p>
                    </FlexView>
                    <FlexView className="profile half" />
                </FlexView>
            </FlexView>
        )
    }

}
