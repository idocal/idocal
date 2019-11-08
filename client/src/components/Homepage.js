import React, { Component } from 'react';
import '../style/Homepage.css';
import FlexView from 'react-flexview';
import Project from "./Project";
import FullPage from './FullPage';
import Video from '../images/header_1024.mp4';

export default class Homepage extends Component {

    render() {
        return (
                <FlexView grow column className="homepage" width="100%">
                    <FullPage>
                    <FlexView column className="banner section"
                              hAlignContent="center"
                              vAlignContent="center"
                              width="100%"
                    >
                        <video loop autoPlay={true} data-keepplaying>
                            <source src={Video} type='video/mp4' />
                        </video>
                        <div className="header-slogan">
                            <FlexView vAlignContent="center" column height="100%">
                                <h1>Hi, I'm Ido</h1>
                                <h2>I bring technological ideas to life</h2>
                            </FlexView>
                        </div>
                    </FlexView>

                    <FlexView className="projects section" width="100%">
                        <FlexView className="row half">
                            <Project name="Feelboard"
                                     tags="Deep Learning, AI, Computer Vision"
                                     color="red"
                                     alias="feelboard"/>
                        </FlexView>

                        <FlexView column className="half">
                            <FlexView className="row" height="50%">
                                <Project name="Storyline.ai"
                                         tags="Deep Learning, NLP, Generation"
                                         color="black"
                                         alias="storyline" />
                            </FlexView>
                            <FlexView className="row" height="50%">
                                <Project name="Meezi"
                                         tags="Social app, iOS, Android"
                                         color="blue"
                                         alias="meezi"/>
                            </FlexView>
                        </FlexView>
                    </FlexView>

                    <FlexView className="projects section" width="100%">
                        <FlexView className="row half">
                            <Project name="Rosette Text Analyzer"
                                     tags="NLP, Machine Learning, Entity Extraction"
                                     color="black"
                                     alias="rosette"/>
                        </FlexView>

                        <FlexView column className="half">
                            <FlexView className="row" height="50%">
                                <Project name="Bo Nariv"
                                         tags="Politics, Chat app"
                                         color="lightgray"
                                         alias="bonariv" />
                            </FlexView>
                            <FlexView className="row" height="50%">
                                <Project name="MotionSense"
                                         tags="Research, Signal Analysis"
                                         color="darkgray"
                                         alias="motionsense"/>
                            </FlexView>
                        </FlexView>
                    </FlexView>
            </FullPage>
            </FlexView>
        );
    }

}
