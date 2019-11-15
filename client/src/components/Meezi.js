import React from 'react';
import FlexView from 'react-flexview';
import { projects } from '../config';
import ImgSection1 from "../images/meezi-section-1.png";
import ImgSection2 from "../images/meezi-section-2.png";

const project = projects['meezi'];

function Meezi(props) {
    const section1 =
        <FlexView column className="case-section half meezi-section-1" width="100%" height="100%">

            <FlexView className="case-image half" hAlignContent="center" vAlignContent="center">
                <img src={ImgSection1} alt={project.sections[0].title} />
            </FlexView>

            <FlexView column className="info half content">
                <h2>{project.sections[0].title}</h2>
                <p>{project.sections[0].text}</p>
            </FlexView>

        </FlexView>;

    const section2 =
        <FlexView column className="case-section half meezi-section-2" width="100%" height="100%">

            <FlexView column className="info half content">
                <h2>{project.sections[1].title}</h2>
                <p>{project.sections[1].text}</p>
            </FlexView>

            <FlexView className="case-image half" hAlignContent="center" vAlignContent="center">
                <img src={ImgSection2} alt={project.sections[1].title} />
            </FlexView>

        </FlexView>;


    const section3 =
        <FlexView column className="case-section half meezi-section-3" width="100%" height="100%" hAlignContent="center">

            <FlexView column className="info content">
                <h2>{project.sections[2].title}</h2>
                <p>{project.sections[2].text}</p>
            </FlexView>

        </FlexView>;

    const sections = [
        {
            section: section1,
            mode: 'logomode-dark',
        },
        {
            section: section2,
            mode: 'logomode-dark',
        },
        {
            section: section3,
            mode: 'logomode-bright',
        }
    ];

    return (
        sections.map(({section, mode}, i) => {
            return (
                <FlexView className={"section meezi " + mode} column key={i}>
                    {section}
                </FlexView>
            );
        })
    )
}


export default Meezi;