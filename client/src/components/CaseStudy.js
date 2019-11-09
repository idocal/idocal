import React, { Component } from 'react';
import FlexView from 'react-flexview';
import '../style/CaseStudy.css';
import { projects } from "../config";
import Project from "./Project";
import FullPage from "./FullPage";
import Rosette from "./Rosette";
import Feelboard from "./Feelboard";

const projectsMap = {
    'rosette': <Rosette />,
    'feelboard': <Feelboard />,
};

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
            <FlexView grow column className={"case-study " + this.state.project} width="100%">
                <FullPage>

                    <FlexView className={"section header"}
                              width="100%"
                              vAlignContent="bottom">
                        <FlexView column className="headline">
                            <h1>{this.state.name}</h1>
                            <h2>{this.state.roles}</h2>
                        </FlexView>

                    </FlexView>

                    { projectsMap[this.state.project] }

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


                </FullPage>
            </FlexView>

        )
    }

}