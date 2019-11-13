import React from 'react';
import FlexView from 'react-flexview';
import { projects } from '../config';
import ImgSection2 from '../images/storyline-section-2.png';

const project = projects['storyline'];

function Storyline(props) {
    const section1 =
        <FlexView column className="case-section half storyline-section-1" width="100%" height="100%">

            <FlexView column className="info half content">
                <h2>{project.sections[0].title}</h2>
                <p>{project.sections[0].text}</p>
            </FlexView>

            <FlexView className="case-image half" />

        </FlexView>;

    const section2 =
        <FlexView column className="case-section half storyline-section-2" width="100%" height="100%">

            <FlexView column className="info half content">
                <h2>{project.sections[1].title}</h2>
                <p>{project.sections[1].text}</p>
            </FlexView>

            <FlexView className="case-image half" hAlignContent="center" vAlignContent="center">
                <img src={ImgSection2} alt={project.sections[1].title} />
            </FlexView>

        </FlexView>;

    const section3 =
        <FlexView column className="case-section half storyline-section-3" width="100%" height="100%">

            <FlexView className="case-image half" hAlignContent="center" vAlignContent="center">
                <img src={ImgSection2} alt={project.sections[2].title} />
            </FlexView>

            <FlexView column className="info half content">
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
            mode: 'logomode-dark',
        }
    ];

    return (
        sections.map(({section, mode}, i) => {
            return (
                <FlexView className={"section storyline " + mode} column key={i}>
                    {section}
                </FlexView>
            );
        })
    )
}


export default Storyline;