import React from 'react';
import FlexView from 'react-flexview';
import { projects } from '../config';
import ImgSection1 from "../images/meezi-section-1.png";
import ImgSection2 from "../images/meezi-section-2.png";

const project = projects['meezi'];

function Meezi(props) {
    const section1 =
        <div className="case-section half meezi-section-1">

            <div className="case-image center">
                <img src={ImgSection1} alt={project.sections[0].title} />
            </div>

            <div className="info grow center">
                <h2>{project.sections[0].title}</h2>
                <p>{project.sections[0].text}</p>
            </div>

        </div>;

    const section2 =
        <div className="case-section half meezi-section-2">

            <div className="case-image center">
                <img src={ImgSection2} alt={project.sections[1].title} />
            </div>

            <div className="info grow center">
                <h2>{project.sections[1].title}</h2>
                <p>{project.sections[1].text}</p>
            </div>

        </div>;


    const section3 =
        <div className="case-section half meezi-section-3">

            <div className="info center">
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