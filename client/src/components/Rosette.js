import React from 'react';
import FlexView from 'react-flexview';
import { projects } from '../config';
import ImgSection2 from '../images/rosette-section-2.png';
import VidSection3 from '../images/rosette-section-3.mp4';

const project = projects['rosette'];

function Rosette(props) {
    const section1 =
        <FlexView column className="case-section rosette-section-1 logomode-dark" width="100%" height="100%">

            <FlexView column className="info center">
                <h2>{project.sections[0].title}</h2>
                <p className="center">{project.sections[0].text}</p>
            </FlexView>

            <div className="background" />

        </FlexView>;

    const section2 =
        <FlexView column className="case-section half rosette-section-2" width="100%" height="100%">

            <FlexView className="case-image half" hAlignContent="center" vAlignContent="center">
                <img src={ ImgSection2 } alt="Rosette NLP Analyzer" />
            </FlexView>

            <FlexView column className="info half">
                <h2>{project.sections[1].title}</h2>
                <p>{project.sections[1].text}</p>
            </FlexView>

        </FlexView>;

    const section3 =
        <FlexView column className="case-section half rosette-section-3" width="100%" height="100%">

            <FlexView className="case-video half" hAlignContent="center" vAlignContent="center">
                <video autoPlay={true} muted loop className="video" data-keepplaying playsInline>
                    <source src={VidSection3} type="video/mp4"/>
                </video>
            </FlexView>

            <FlexView column className="info half stretch">
                <h2>{project.sections[2].title}</h2>
                <p>{project.sections[2].text}</p>
            </FlexView>

        </FlexView>;

    const section4 =
        <FlexView column className="case-section rosette-section-4" width="100%" height="100%">

            <FlexView column className="info center">
                <h2>{project.sections[3].title}</h2>
                <p className="center">{project.sections[3].text}</p>
            </FlexView>

            <div className="background" />

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
            mode: 'logomode-dark',
        }
    ];

    return (
        sections.map(({section, mode}, i) => {
            return (
                <FlexView className={"section " + mode} column key={i}>
                    { section }
                </FlexView>
            )
        })
    )
}

export default Rosette;