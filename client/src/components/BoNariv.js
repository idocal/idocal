import React from 'react';
import FlexView from 'react-flexview';
import { projects } from '../config';
import ImgSection1 from "../images/bonariv-section-1.png";
import ImgSection2 from "../images/bonariv-section-2.png";
import ImgSection3 from "../images/bonariv-section-3.png";
import ImgSection4 from "../images/bonariv-section-4.png";

const project = projects['bonariv'];

function BoNariv(props) {
    const section1 =
        <div column className="case-section half bonariv-section-1 reverse">

            <div className="info grow center">
                <h2>{project.sections[0].title}</h2>
                <p>{project.sections[0].text}</p>
            </div>

            <div className="case-image" style={{justifyContent: "flex-end"}} >
                <img src={ImgSection1} alt={project.sections[0].title} />
            </div>

        </div>;

    const section2 =
        <div className="case-section half bonariv-section-2">

            <div className="case-image center">
                <img src={ImgSection2} alt={project.sections[1].title} />
            </div>

            <div className="info grow center">
                <h2>{project.sections[1].title}</h2>
                <p>{project.sections[1].text}</p>
            </div>

        </div>;

    const section3 =
        <div className="case-section half bonariv-section-3">

            <div className="case-image center">
                <img src={ImgSection3} alt={project.sections[2].title} />
            </div>

            <div className="info grow center">
                <h2>{project.sections[2].title}</h2>
                <p>{project.sections[2].text}</p>
            </div>

        </div>;

    const section4 =
        <div className="case-section half bonariv-section-4">

            <div className="case-image center">
                <img src={ImgSection4} alt={project.sections[3].title} />
            </div>

            <div className="info grow center">
                <h2>{project.sections[3].title}</h2>
                <p>{project.sections[3].text}</p>
            </div>

        </div>;

    const section5 =
        <div className="case-section half bonariv-section-5">

            <div className="info center text-shrink">
                <h2>{project.sections[4].title}</h2>
                <p>{project.sections[4].text}</p>
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