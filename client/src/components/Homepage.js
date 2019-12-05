import React, { Component } from 'react';
import '../style/Homepage.css';
import FlexView from 'react-flexview';
import Project from "./Project";
import FullPage from './FullPage';
import Video from '../images/header_1024.mp4';
import { projects } from "../config";
import preLoading from "../preLoading";
import VideoPoster from "../images/header-poster.png";

export default class Homepage extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         loading: true,
    //     }
    //     preLoading().then(() => {
    //         this.setState({ loading: false });
    //     })
    // }

    state = {
        loading: true
    };

    constructor(props) {
        super(props);
        this.headerSlogan = React.createRef();
    }

    componentDidMount() {
        this.props.changeLogoMode('bright');
        this.setState({
            loading: false
        })
    }

    render() {
        return (
            <FlexView grow column className="homepage" width="100%">
                <FullPage onInit={this.props.onFullPageInit}>
                    <div className="banner section">
                        <video loop autoPlay data-keepplaying muted playsInline poster={VideoPoster}>
                            <source src={Video} type='video/mp4' />
                        </video>
                        <div className={this.state.loading ? "header-slogan" : "header-slogan loaded"} >
                            <FlexView column className="slogan-container">
                                <FlexView>
                                <h1 className="hi">Hi,</h1> <h1 className="i">I</h1> <h1 className="am">am</h1>
                                </FlexView>
                                <h1 className="ido">Ido Calman</h1>
                                <h2>I bring technological ideas to life</h2>
                            </FlexView>
                        </div>
                        <div className="scroll-downs">
                            <div className="mousey">
                                <div className="scroller"></div>
                            </div>
                        </div>
                    </div>

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
