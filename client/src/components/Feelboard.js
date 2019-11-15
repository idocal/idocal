import React from 'react';
import FlexView from 'react-flexview';
import { projects } from '../config';
import ImgSection1 from "../images/feelboard-section-1.png";
import ImgSection2 from "../images/feelboard-section-2.png";
import ImgSection3 from "../images/feelboard-section-3.png";
import ImgSection4 from "../images/feelboard-section-4.png";

const project = projects['feelboard'];

function Feelboard(props) {
    const section1 =
        <FlexView column className="case-section half feelboard-section-1" width="100%" height="100%">

            <FlexView className="case-image half" hAlignContent="center" vAlignContent="center">
                <img src={ ImgSection1 } alt="A sensible board" />
            </FlexView>

            <FlexView column className="info half">
                <h2>{project.sections[0].title}</h2>
                <p>{project.sections[0].text}</p>
            </FlexView>

        </FlexView>;

    const section2 =
        <FlexView column className="case-section half feelboard-section-2" width="100%" height="100%">

            <FlexView className="case-image half" hAlignContent="center" vAlignContent="center">
                <img src={ ImgSection2 } alt="One platform, many use cases" />
            </FlexView>

            <FlexView column className="info half">
                <h2>{project.sections[1].title}</h2>
                <p>{project.sections[1].text}</p>
            </FlexView>

        </FlexView>;

    const section3 =
        <FlexView column className="case-section half feelboard-section-3" width="100%" height="100%">

            <FlexView className="case-image half" hAlignContent="center" vAlignContent="center">
                <img src={ ImgSection3 } alt="How it works" />
            </FlexView>

            <FlexView column className="info half">
                <h2>{project.sections[2].title}</h2>
                <p>{project.sections[2].text}</p>
            </FlexView>

        </FlexView>;

    const section4 =
        <FlexView column className="case-section half feelboard-section-4" width="100%" height="100%">

            <FlexView className="case-image half" hAlignContent="center" vAlignContent="center">
                <img src={ ImgSection4 } alt="How it works" />
            </FlexView>

            <FlexView column className="info half">
                <div className="boxes">
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
        },
        {
            section: section4,
            mode: 'logomode-bright',
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