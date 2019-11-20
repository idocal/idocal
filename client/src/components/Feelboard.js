import React from 'react';
import FlexView from 'react-flexview';
import { projects } from '../config';
import ImgSection1 from "../images/feelboard-section-1.png";
import ImgSection2 from "../images/feelboard-section-2.png";
import ImgSection3 from "../images/feelboard-section-3.png";

const project = projects['feelboard'];

function Feelboard(props) {
    const section1 =
        <div className="case-section half feelboard-section-1">

            <div className="case-image center">
                <img src={ ImgSection1 } alt={project.sections[0].title} />
            </div>

            <div className="info grow center">
                <h2>{project.sections[0].title}</h2>
                <p>{project.sections[0].text}</p>
            </div>

        </div>;

    const section2 =
        <div className="case-section half feelboard-section-2">

            <div className="case-image center">
                <img src={ ImgSection2 } alt={project.sections[1].title} />
            </div>

            <div className="info grow center">
                <h2>{project.sections[1].title}</h2>
                <p>{project.sections[1].text}</p>
            </div>

        </div>;

    const section3 =
        <div className="case-section half feelboard-section-3">

            <div className="case-image center">
                <img src={ ImgSection3 } alt={project.sections[2].title} />
            </div>

            <div className="info grow center">
                <h2>{project.sections[2].title}</h2>
                <p>{project.sections[2].text}</p>
            </div>

        </div>;

    const section4 =
        <div className="case-section half feelboard-section-4">

            <div className="info center">
                <div className="boxes" style={{marginTop: 0}}>
                    <div className="box">Record video</div>
                    <div className="arrow" />

                    <div className="box">Cut frames</div>
                    <div className="arrow" />

                    <div className="box">Detect multiple faces</div>
                    <div className="arrow" />

                    <div className="box">Detect face landmarks</div>
                    <div className="arrow" />

                    <div className="box">Predict age and gender</div>
                </div>
            </div>

            <div className="background grow" />

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
        },
        {
            section: section4,
            mode: 'logomode-dark',
        }
    ];

    return (
        sections.map(({section, mode}, i) => {
            return (
                <FlexView className={"section feelboard " + mode} column key={i}>
                    {section}
                </FlexView>
            );
        })
    )
}


export default Feelboard;