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
import MotionSense from "./MotionSense";

const projectsMap = {
    'rosette': <Rosette />,
    'feelboard': <Feelboard />,
    'storyline': <Storyline />,
    'bonariv': <BoNariv />,
    'meezi': <Meezi />,
    'motionsense': <MotionSense />
};

export default class CaseStudy extends Component {
    state = {
        project: null,
        name: null,
        roles: [],
        sections: [],
        url: '/',
        nextProjects: []
    };

    getNextProjects(project) {
        let projectList = Object.keys(projects);
        let projectIndex = projectList.findIndex(e => {return e === project});
        let nextProjectsIndex = [(projectIndex + 1) % projectList.length, (projectIndex + 2) % projectList.length];
        return [ projectList[nextProjectsIndex[0]], projectList[nextProjectsIndex[1]] ]
    }

    async componentDidMount() {
        let project = this.props.match.params['project'];
        let nextProjects = this.getNextProjects(project);

        await this.setState({
            project,
            name: projects[project].name,
            roles: projects[project].roles.join(", "),
            sections: projects[project].sections,
            url: projects[project].url,
            nextProjects
        });
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params !== this.props.match.params) {
            let project = this.props.match.params['project'];
            let nextProjects = this.getNextProjects(project);

            await this.setState({
                project,
                name: projects[project].name,
                roles: projects[project].roles.join(", "),
                sections: projects[project].sections,
                url: projects[project].url,
                nextProjects
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

                        {
                            this.state.nextProjects.map( (project, i) => (
                                <Project key={i} name={projects[project].name}
                                         tags={projects[project].tags.join(", ")}
                                         color={projects[project].color}
                                         alias={project} />
                            ))
                        }

                    </FlexView>

                </FullPage>
            </FlexView>

        )
    }

}