import React, { Component } from 'react';
import FlexView from 'react-flexview';
import '../style/CaseStudy.css';
import { projects } from "../config";
import Project from "./Project";
import FullPage from "./FullPage";
import Rosette from "./Rosette";
import Feelboard from "./Feelboard";
import Storyline from "./Storyline";
import BoNariv from "./BoNariv";
import Meezi from "./Meezi";

const projectsMap = {
    'rosette': <Rosette />,
    'feelboard': <Feelboard />,
    'storyline': <Storyline />,
    'bonariv': <BoNariv />,
    'meezi': <Meezi />
};

export default class CaseStudy extends Component {
    state = {
        project: null,
        name: null,
        roles: [],
        sections: [],
        url: '/'
    };

    async componentDidMount() {
        let project = this.props.match.params['project'];
        await this.setState({
            project,
            name: projects[project].name,
            roles: projects[project].roles.join(", "),
            sections: projects[project].sections,
            url: projects[project].url
        });
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params !== this.props.match.params) {
            let project = this.props.match.params['project'];
            await this.setState({
                project,
                name: projects[project].name,
                roles: projects[project].roles.join(", "),
                sections: projects[project].sections,
                url: projects[project].url
            });
        }
    }

    render() {
        return (
            <FlexView grow column className={"case-study " + this.state.project} width="100%">
                <FullPage>

                    <FlexView className="section header logomode-bright"
                              width="100%"
                              vAlignContent="bottom">
                        <FlexView column className="headline">
                            <h1>{this.state.name}</h1>
                            <h2>{this.state.roles}</h2>
                        </FlexView>

                    </FlexView>

                    { projectsMap[this.state.project] }

                    <FlexView className="section live logomode-dark" width="100%" height="100%" hAlignContent="center" vAlignContent="center">
                        <a href={this.state.url} target="_blank" rel="noopener noreferrer">
                            <button className="live">Check it live</button>
                        </a>
                    </FlexView>

                    <FlexView className="projects section logomode-bright" width="100%">
                        <FlexView className="row half">
                            <Project name={projects['rosette'].name}
                                     tags={projects['rosette'].tags.join(", ")}
                                     color={projects['rosette'].color}
                                     alias='rosette' />
                        </FlexView>

                        <FlexView className="row half">
                            <Project name={projects['meezi'].name}
                                     tags={projects['meezi'].tags.join(", ")}
                                     color={projects['meezi'].color}
                                     alias='meezi' />
                        </FlexView>
                    </FlexView>


                </FullPage>
            </FlexView>

        )
    }

}