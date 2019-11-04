import React, { Component } from 'react';
import FlexView from 'react-flexview';
import '../style/CaseStudy.css';
import { projects } from "../config";
import Project from "./Project";
import FullPage from "./FullPage";

export default class CaseStudy extends Component {
    state = {
        windowHeight: 0
    };

    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        console.log(this.myRef.current);
        this.myRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ windowHeight: window.innerHeight });
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.project !== prevProps.match.params.project) {
            this.myRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    render() {
        const fullHeight = this.state.windowHeight + "px";
        // const { project } = this.props.match.params;
        const project = 'rosette';
        const headerImage = '/img/' + project + '-header.jpg';

        const name = projects[project].name;
        const roles = projects[project].roles.join(", ");
        const sections = projects[project].sections;

        return (
            <FullPage>
            <div ref={this.myRef}>
                <FlexView grow column className="case-study" width="100%">
                    <FlexView className="section header"
                              width="100%"
                              vAlignContent="bottom"
                              style={{
                                  backgroundImage: 'url(' + headerImage + ')',
                                  minHeight: fullHeight
                              }}>
                        <FlexView column className="headline">
                            <h1>{name}</h1>
                            <h2>{roles}</h2>
                        </FlexView>

                    </FlexView>

                    {
                        sections.map((section, i) => {
                            let imgSource = "/img/" + project + "-section-" + (i + 1).toString() + ".png";
                            return (
                                <FlexView key={i}
                                          style={{minHeight: fullHeight}}
                                          className="section case-section"
                                          vAlignContent="center">
                                    <FlexView column className="info half" vAlignContent="center" hAlignContent="left">
                                        <h2>{section.title}</h2>
                                        <p>{section.text}</p>
                                    </FlexView>
                                    <FlexView className="case-image" vAlignContent="center" hAlignContent="right">
                                        <div className="image" style={{backgroundImage: 'url(' + imgSource + ')'}} />
                                    </FlexView>
                                </FlexView>

                            )
                        })
                    }

                    <FlexView className="projects section" width="100%" style={{minHeight:fullHeight}}>
                        <FlexView className="row half">
                            <Project name="Feelboard"
                                     tags="Deep Learning, AI, Computer Vision"
                                     color="lightgray"
                                     alias="feelboard"/>
                        </FlexView>

                        <FlexView column className="half">
                            <FlexView className="row" height="50%">
                                <Project name="Storyline.ai"
                                         tags="Deep Learning, NLP, Generation"
                                         color="gray"
                                         alias="storyline" />
                            </FlexView>
                            <FlexView className="row" height="50%">
                                <Project name="Meezi"
                                         tags="Social app, iOS, Android"
                                         color="darkgray"
                                         alias="meezi"/>
                            </FlexView>
                        </FlexView>
                    </FlexView>

                </FlexView>
            </div>
            </FullPage>
        )
    }

}