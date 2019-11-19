import React from 'react';
import FlexView from 'react-flexview';
import { projects } from '../config';
import ImgSection2 from '../images/storyline-section-2.png';
import ImgSection3 from '../images/storyline-section-3.png';

const project = projects['storyline'];

function Storyline(props) {
    const section1 =
        <div className="case-section half storyline-section-1 reverse">

            <div className="info grow center">
                <h2>{project.sections[0].title}</h2>
                <p>{project.sections[0].text}</p>
            </div>

            <FlexView className="case-image" />

        </div>;

    const section2 =
        <div className="case-section half storyline-section-2">

            <div className="info grow center">
                <h2>{project.sections[1].title}</h2>
                <p>{project.sections[1].text}</p>
            </div>

            <div className="case-image center">
                <img src={ImgSection2} alt={project.sections[1].title} />
            </div>

        </div>;

    const section3 =
        <div className="case-section half storyline-section-3">

            <div className="case-image center">
                <img src={ImgSection3} alt={project.sections[2].title} />
            </div>

            <div className="info grow center">
                <h2>{project.sections[2].title}</h2>
                <p>{project.sections[2].text}</p>
            </div>

        </div>;

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