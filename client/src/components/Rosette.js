import React from 'react';
import FlexView from 'react-flexview';
import { projects } from '../config';
import ImgSection2 from '../images/rosette-section-2.png';
import VidSection3 from '../images/rosette-section-3.mp4';

const project = projects['rosette'];

function Rosette(props) {
    const section1 =
        <div className="case-section rosette-section-1 column" style={{background: "white"}}>

            <div className="info grow center text-center">
                <h2>{project.sections[0].title}</h2>
                <p className="center">{project.sections[0].text}</p>
            </div>

            <div className="background" style={{height: "50%"}} />

        </div>;

    const section2 =
        <div className="case-section rosette-section-2 half">

            <div className="case-image center">
                <img src={ ImgSection2 } alt="Rosette NLP Analyzer" />
            </div>

            <div className="info grow center">
                <h2>{project.sections[1].title}</h2>
                <p>{project.sections[1].text}</p>
            </div>

        </div>;

    const section3 =
        <div className="case-section half rosette-section-3">

            <div className="case-video half center">
                <video autoPlay={true} muted loop className="video" data-keepplaying playsInline>
                    <source src={VidSection3} type="video/mp4"/>
                </video>
            </div>

            <div className="info grow center">
                <h2>{project.sections[2].title}</h2>
                <p>{project.sections[2].text}</p>
            </div>

        </div>;

    const section4 =
        <div className="case-section rosette-section-4 column">

            <div column className="info grow center text-center text-shrink margin-top" style={{paddingBottom: "40px"}}>
                <h2>{project.sections[3].title}</h2>
                <p className="center">{project.sections[3].text}</p>
            </div>

            <div className="background" style={{height: "50%"}} />


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
                <FlexView className={"section rosette " + mode} column key={i}>
                    {section}
                </FlexView>
            );
        })
    )
}

export default Rosette;