import React, { Component } from 'react';
import '../style/Homepage.css';
import FlexView from 'react-flexview';
import Project from "./Project";
import FullPage from './FullPage';
import Video from '../images/header_1024.mp4';
import { projects } from "../config";

export default class Homepage extends Component {
    componentDidMount() {
        this.props.changeLogoMode('bright');
    }

    render() {
        return (
            <FlexView grow column className="homepage" width="100%">
                <FullPage>
                    <FlexView column className="banner section"
                              hAlignContent="center"
                              vAlignContent="center"
                              width="100%"
                    >
                        <video loop autoPlay data-keepplaying muted>
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
                            <Project name={projects['feelboard'].name}
                                     tags={projects['feelboard'].tags.join(", ")}
                                     color={projects['feelboard'].color}
                                     alias='feelboard' />
                        </FlexView>

                        <FlexView column className="half">
                            <FlexView className="row" height="50%">
                                <Project name={projects['storyline'].name}
                                         tags={projects['storyline'].tags.join(", ")}
                                         color={projects['storyline'].color}
                                         alias='storyline' />
                            </FlexView>
                            <FlexView className="row" height="50%">
                                <Project name={projects['bonariv'].name}
                                         tags={projects['bonariv'].tags.join(", ")}
                                         color={projects['bonariv'].color}
                                         alias='bonariv' />
                            </FlexView>
                        </FlexView>
                    </FlexView>

                    <FlexView className="projects section" width="100%">
                        <FlexView className="row half">
                            <Project name={projects['rosette'].name}
                                     tags={projects['rosette'].tags.join(", ")}
                                     color={projects['rosette'].color}
                                     alias='rosette' />
                        </FlexView>

                        <FlexView column className="half">
                            <FlexView className="row" height="50%">
                                <Project name={projects['meezi'].name}
                                         tags={projects['meezi'].tags.join(", ")}
                                         color={projects['meezi'].color}
                                         alias='meezi' />
                            </FlexView>
                            <FlexView className="row" height="50%">
                                <Project name={projects['motionsense'].name}
                                         tags={projects['motionsense'].tags.join(", ")}
                                         color={projects['motionsense'].color}
                                         alias='motionsense' />
                            </FlexView>
                        </FlexView>
                    </FlexView>
                </FullPage>
            </FlexView>
        );
    }

}
