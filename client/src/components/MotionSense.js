import React from 'react';
import FlexView from 'react-flexview';
import { projects } from '../config';


const project = projects['motionsense'];

function MotionSense(props) {
    const section1 =
        <FlexView column className="case-section half motionsense-section-1" width="100%" height="100%">

            <FlexView column className="info half content">
                <h2>{project.sections[0].title}</h2>
                <p>{project.sections[0].text}</p>
            </FlexView>

        </FlexView>;

    const section2 =
        <FlexView column className="case-section half motionsense-section-2" width="100%" height="100%" hAlignContent="left">

            <FlexView column className="info half content">
                <h2>{project.sections[1].title}</h2>
                <p>{project.sections[1].text}</p>
            </FlexView>

        </FlexView>;

    const section3 =
        <FlexView column className="case-section half motionsense-section-3" width="100%" height="100%" hAlignContent="left">

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
            mode: 'logomode-bright',
        },
        {
            section: section3,
            mode: 'logomode-dark',
        }
    ];

    return (
        sections.map(({section, mode}, i) => {
            return (
                <FlexView className={"section motionsense " + mode} column key={i}>
                    {section}
                </FlexView>
            );
        })
    )
}


export default MotionSense;