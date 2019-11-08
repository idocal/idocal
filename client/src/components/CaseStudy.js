import React, { Component } from 'react';
import FlexView from 'react-flexview';
import '../style/CaseStudy.css';
import { projects } from "../config";
import Project from "./Project";
import FullPage from "./FullPage";

export default class CaseStudy extends Component {
    state = {
        project: null,
        name: null,
        roles: [],
        sections: []
    };

    async componentDidMount() {
        let project = this.props.match.params['project'];
        await this.setState({
            project,
            name: projects[project].name,
            roles: projects[project].roles.join(", "),
            sections: projects[project].sections
        });
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params !== this.props.match.params) {
            let project = this.props.match.params['project'];
            await this.setState({
                project,
                name: projects[project].name,
                roles: projects[project].roles.join(", "),
                sections: projects[project].sections
            });
        }
    }

    render() {
        return (
            <FullPage>
                <FlexView grow column className="case-study" width="100%">
                    <FlexView className={"section header " + this.state.project}
                              width="100%"
                              vAlignContent="bottom">
                        <FlexView column className="headline">
                            <h1>{this.state.name}</h1>
                            <h2>{this.state.roles}</h2>
                        </FlexView>

                    </FlexView>

                    {
                        this.state.sections.map((section, i) => {
                            let imgSource = "/img/" + this.state.project + "-section-" + (i + 1).toString() + ".png";
                            return (
                                <FlexView key={i}
                                          className="section case-section"
                                          column
                                >

                                    <FlexView className="case-image" vAlignContent="center" hAlignContent="right">
                                        <div className="image" style={{backgroundImage: 'url(' + imgSource + ')'}} />
                                    </FlexView>

                                    <FlexView column className="info" hAlignContent="left">
                                        <h2>{section.title}</h2>
                                        <p>{section.text}</p>
                                    </FlexView>

                                </FlexView>

                            )
                        })
                    }

                    <FlexView className="projects section" width="100%">
                        <FlexView className="row half">
                            <Project name="Rosette"
                                     tags="Deep Learning, AI, Computer Vision"
                                     color="lightgray"
                                     alias="rosette"/>
                        </FlexView>

                        <FlexView className="row half">
                            <Project name="Meezi"
                                     tags="Social app"
                                     color="darkgray"
                                     alias="meezi"/>
                        </FlexView>
                    </FlexView>

                </FlexView>
            </FullPage>

        )
    }

}