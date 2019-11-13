import React from 'react';
import FlexView from 'react-flexview';
import { projects } from '../config';
import ImgSection2 from "../images/bonariv-section-2.png";
import ImgSection3 from "../images/bonariv-section-3.png";
import ImgSection4 from "../images/bonariv-section-4.png";

const project = projects['bonariv'];

function BoNariv(props) {
    const section1 =
        <FlexView column className="case-section half bonariv-section-1" width="100%" height="100%">

            <FlexView className="case-image half" />

            <FlexView column className="info half content">
                <h2>{project.sections[0].title}</h2>
                <p>{project.sections[0].text}</p>
            </FlexView>

        </FlexView>;

    const section2 =
        <FlexView column className="case-section half bonariv-section-2" width="100%" height="100%">

            <FlexView className="case-image half" hAlignContent="center" vAlignContent="center">
                <img src={ImgSection2} alt={project.sections[1].title} />
            </FlexView>

            <FlexView column className="info half content">
                <h2>{project.sections[1].title}</h2>
                <p>{project.sections[1].text}</p>
            </FlexView>

        </FlexView>;

    const section3 =
        <FlexView column className="case-section half bonariv-section-3" width="100%" height="100%">

            <FlexView className="case-image half" hAlignContent="center" vAlignContent="center">
                <img src={ImgSection3} alt={project.sections[2].title} />
            </FlexView>

            <FlexView column className="info half content">
                <h2>{project.sections[2].title}</h2>
                <p>{project.sections[2].text}</p>
            </FlexView>

        </FlexView>;

    const section4 =
        <FlexView column className="case-section half bonariv-section-4" width="100%" height="100%">

            <FlexView className="case-image half" hAlignContent="center" vAlignContent="center">
                <img src={ImgSection4} alt={project.sections[3].title} />
            </FlexView>

            <FlexView column className="info half content">
                <h2>{project.sections[3].title}</h2>
                <p>{project.sections[3].text}</p>
            </FlexView>

        </FlexView>;

    const section5 =
        <FlexView column className="case-section half bonariv-section-5" width="100%" height="100%" vAlignContent="center">

            <FlexView column className="info content">
                <h2>{project.sections[4].title}</h2>
                <p>{project.sections[4].text}</p>
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
            mode: 'logomode-dark',
        },
        {
            section: section4,
            mode: 'logomode-dark',
        },
        {
            section: section5,
            mode: 'logomode-dark',
        }
    ];

    return (
        sections.map(({section, mode}, i) => {
            return (
                <FlexView className={"section bonariv " + mode} column key={i}>
                    {section}
                </FlexView>
            );
        })
    )
}


export default BoNariv;